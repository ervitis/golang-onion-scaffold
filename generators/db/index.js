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
      this.fs.copyTpl(this.templatePath('interface.go.ejs'), this.destinationPath('db/interface.go'), this.props),
    ])
  }
}