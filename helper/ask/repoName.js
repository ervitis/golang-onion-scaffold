module.exports = class Ask {
  constructor (generator) {
    generator.option(`repoName`, {
      type: String,
      description: 'Repository name'
    })

    this.repositories = ['github.com', 'gitlab.com']
  }

  getName() {
    return 'repoName'
  }

  getPrompt() {
    return Promise.resolve({
      type: 'input',
      message: 'Repository name',
      required: true,
      validate: input => this.repositories.includes(input) || `should be one of this: ${this.repositories.join(', ')}`
    })
  }
}