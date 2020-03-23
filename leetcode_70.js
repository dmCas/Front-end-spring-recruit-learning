function sum(a, b){
  return function(a, b){
    return function(c, d){
      return a+ b
    }
  }
}
sum(1, 2)(3)