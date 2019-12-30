const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'validator', [])
  }

  prompting() {
    return super.prompting()
  }

  writing() {
    console.log(this.answers)

    Promise.all([
      this.fs.copyTpl(this.templatePath('interface.go.ejs'), this.destinationPath('validator/model/interface.go'), this.props),
      this.fs.copyTpl(this.templatePath('empty.json.ejs'), this.destinationPath('validator/model/data/empty.json'), this.props),
    ])
  }
}