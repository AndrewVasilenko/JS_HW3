function firstToLast(str,c){
    //coding here..
    if(str.indexOf(c)!=-1) return str.lastIndexOf(c)-str.indexOf(c);
    else return -1;
  }