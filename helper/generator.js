const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  constructor (args, options, name, askModules) {
    super(args, options)

    this.name = name
    this.asks = []
    askModules.forEach(n => {
      const Ask = require(`./ask/${n}.js`)
      this.asks.push(new Ask(this))
    })
  }

  prompting () {
    if (!this.options.silent) {
      const name = chalk.red(`go-api-scaffold/${this.name}`)
      this.log(yosay(`Welcome to the ${name} generator for API GoLang`))
    }

    const props = new Map()
    if (!this.asks) {
      return Promise.resolve(props)
    }

    return Promise.all(this.asks.map(ask => {
      const name = ask.getName()
      const option = this.options[name]
      if (option) {
        props[name] = option
        return null
      }
      return ask.getPrompt().then(p => Object.assign(p, {name}))
    })).then(prompts => {
      const required = prompts.filter(n => Boolean(n))

      if (required.length) {
        return this.prompt(required).then(r => {
          Object.assign(props, r)
          this.props = props
          return props
        })
      }

      this.props = props
      return props
    })
  }
}