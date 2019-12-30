const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'db', [])
  }

  prompting() {
    return super.prompting()
  }

  writing() {
    Promise.all([
      this.fs.copyTpl(this.templatePath('app.go.ejs'), this.destinationPath('config/app.go'), this.props),
      this.fs.copyTpl(this.templatePath('logger.go.ejs'), this.destinationPath('config/logger.go'), this.props),
    ])
  }
}