
function isType(type){
  return function(obj){
    // console.log(Object.prototype.toString.call(obj))
    return Object.prototype.toString.call(obj) == '[object '+ type +']';
  }
}

// let testType = {
//   isFunction: isType("function")
// }
let isFunction = isType("Function")
let isUndefined = isType("Undefined")
export {isFunction,isUndefined};
