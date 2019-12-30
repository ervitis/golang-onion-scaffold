const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'input', [])
  }

  async prompting () {
    return super.prompting()
  }

  writing () {
    Promise.all([
      this.fs.copyTpl(this.templatePath('interface.go.ejs'), this.destinationPath('input/events/clients/interface.go'), this.props),
      this.fs.copyTpl(this.templatePath('event_example.go.ejs'), this.destinationPath('input/events/event_example.go'), this.props),
      this.fs.copyTpl(this.templatePath('api.go.ejs'), this.destinationPath('input/http/api/api.go'), this.props),
      this.fs.copyTpl(this.templatePath('middlewares.go.ejs'), this.destinationPath('input/http/api/middlewares.go'), this.props)
    ])
  }
}
