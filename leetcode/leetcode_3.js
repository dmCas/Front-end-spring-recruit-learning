var s = "abba"
var lengthOfLongestSubstring = function(s) {
  // 用来保存最大长度
  var count = null;
  var s = s.split('')
  if(s.length == 1) return 1
  var len = s.length
  for(var i = 0; i<len;i++){
      var temp = 0 
      for(var j=i; j<len;j++){
          if(s.slice(j+1).indexOf(s[j]) > -1){
            temp += s.slice(j+1).indexOf(s[j]) + 1
            break;
          }
          else{
            temp += 1
          }
      }
      if(temp > count){
        count = temp
      }
  }
  console.log(count)
  return count
};
lengthOfLongestSubstring(s)