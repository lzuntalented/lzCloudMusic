function lzlog(){
  let args = Array.prototype.slice.call(arguments);
  args.unshift("LZ: ");
  console.log.apply(this,args);
}

export default lzlog;
// export testType;
