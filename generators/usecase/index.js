const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'usecase', [])
  }

  prompting() {
    return super.prompting()
  }

  writing() {
    Promise.all([
      this.fs.copyTpl(this.templatePath('interface.go.ejs'), this.destinationPath('usecase/interface.go'), this.props),
    ])
  }
}