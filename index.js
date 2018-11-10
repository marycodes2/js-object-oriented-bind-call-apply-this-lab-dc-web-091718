//Your code here
function justInvoke(fn) {
  return fn.call(this)
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue, argument)
}

function setThisWithApply(fn, thisValue, argumentsArray) {
  return fn.apply(thisValue, argumentsArray)
}

function returnNewFunctionOf(fn, thisValue) {
  return fn.bind(thisValue)
}
