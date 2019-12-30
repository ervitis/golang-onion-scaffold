const Generator = require('../../helper/generator')

module.exports = class extends Generator {
  constructor (args, options) {
    super(args, options, 'infra', [])
  }

  async prompting () {
    return super.prompting()
  }

  writing () {
    Promise.all([
      this.fs.copyTpl(this.templatePath('healthchecker.go.ejs'), this.destinationPath('infra/healthchecker.go'), this.props),
      this.fs.copyTpl(this.templatePath('metrics.go.ejs'), this.destinationPath('infra/metrics.go'), this.props)
    ])

  }
}
