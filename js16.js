function cutIt(arr){
    //coding here...
    var len=arr[0].length,
        out=[]
    
    for (var key in arr){
      if (arr[key].length<len) len=arr[key].length;
      }
  
    for (var key in arr){
      out[key]=arr[key].substr(0,len);
      }
    return out;
  }