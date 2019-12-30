const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'cli', ['repoName', 'projectName', 'repoUser', 'dbLayer', 'validator'])
  }

  async prompting () {
    return super.prompting()
  }

  writing () {
    this.fs.copyTpl(this.templatePath('main.go.ejs'), this.destinationPath('cmd/main.go'), this.props)
  }

  install() {
    this.spawnCommandSync('go', ['mod', 'init'])
  }
}
