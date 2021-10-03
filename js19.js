function alienLanguage(str){
    //coding here...
    var words=str.toUpperCase().split(" ");
    
    for (var i=0;i<words.length;i++){
      words[i]=words[i].substr(0,words[i].length-1)+words[i].slice(-1).toLowerCase();
    }
    return words.join(" ");
  }