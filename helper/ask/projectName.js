module.exports = class Ask {
  constructor (generator) {
    generator.option(`projectName`, {
      type: String,
      description: 'Project name'
    })
  }

  getName() {
    return 'projectName'
  }

  getPrompt() {
    return Promise.resolve({
      type: 'input',
      message: 'Project name',
      required: true,
      validate: input => Boolean(input) || 'should not be empty'
    })
  }
}