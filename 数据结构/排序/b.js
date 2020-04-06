var object = {
  test: 5,
  color:'red',
  song: 'I Believe In A Thing Called Love',
  profession:'Singer',
  gender:'Male',
  languages: {
    array: ['French', 'German', 'English']
  },
  relationships: {
    'sister': 'Jasmine',
    'brother': 'Ryan'
  }
}
var o = JSON.stringify(object)
console.log(o)
var sortJson = function(obj, callback) {
  var endValue, item, key, keyArray, keyArray2, o, _i, _len;
  endValue = {};
  keyArray = [];
  keyArray2 = [];
  for (key in obj) {
    o = {};
    o[key] = obj[key];
    keyArray.push(key);
  }
  keyArray2 = keyArray.sort();
  for (_i = 0, _len = keyArray2.length; _i < _len; _i++) {
    item = keyArray2[_i];
    endValue[item] = obj[item];
  }
  console.log(endValue)
  return typeof callback === "function" ? callback(endValue) : void 0;
};
sortJson(object, (data) => {console.log(data)})