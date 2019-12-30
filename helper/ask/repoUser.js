module.exports = class Ask {
  constructor (generator) {
    generator.option('repoUser', {
      type: String,
      description: 'Project username'
    })
    this.generator = generator
  }

  getName() {
    return 'repoUser'
  }

  getPrompt() {
    return this.generator.user.github.username().then(name => {
      return {
        type: 'input',
        message: 'Project username',
        default: name,
        required: true
      }
    })
  }
}