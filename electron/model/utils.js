const isMac = process.platform === 'darwin'

const whichValue = function (darwinValue, otherValue) {
  return isMac ? darwinValue : otherValue
}


module.exports = {
  isMac,
  whichValue
}