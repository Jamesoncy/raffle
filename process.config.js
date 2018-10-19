const env = require('dotenv').load({ path: '.env' }).parsed

const mainApp = {
  name: 'dating-site',
  script: './app.js',
  exec_mode : "cluster",
  env
}

if (env.WATCH_FILES) {
  mainApp.watch = ['./server/']
}

const apps = [mainApp]

module.exports = { apps }

