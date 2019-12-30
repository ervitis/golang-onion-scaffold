const path = require('path')

module.exports = class Ask {
  constructor (generator) {
    generator.option('dir', {
      type: String,
      description: 'Path to generate'
    })
  }

  getName() {
    return 'dir'
  }

  _getRoot() {
    const root = process.env.GO_PROJECT_ROOT ? process.env.GO_PROJECT_ROOT : null
    if (root) {
      return root
    }

    return process.env.GOPATH ? path.join(process.env.GOPATH, 'src') : path.join(process.env.HOME, 'go', 'src')
  }

  getPrompt() {
    return Promise.resolve({
      type: 'input',
      message: 'Path to generate',
      default: answers => {
        return path.join(this._getRoot(), answers.repoName, answers.repoUser, answers.projectName)
      }
    })
  }
}