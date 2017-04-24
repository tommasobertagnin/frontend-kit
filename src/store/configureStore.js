if (process.env.NODE_ENV === 'production') {
  module.exports = require('./createStoreDev')
}
else {
  module.exports = require('./createStoreProd')
}
