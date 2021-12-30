const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'Test_user',
        mongodb_password: 'Dev15315315',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog-dev',
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'Test_user',
      mongodb_password: 'Dev15315315',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog',
    }
  }
}
