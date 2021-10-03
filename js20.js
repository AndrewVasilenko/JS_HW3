function topSecret(str){
    //coding here...
    var decstr="";
    
      for (var i=0;i<str.length;i++) 
        {
          if(str[i]==" ") decstr=decstr+" ";
            else if(str[i]=="A") decstr=decstr+"X";
            else if(str[i]=="B") decstr=decstr+"Y";
            else if(str[i]=="C") decstr=decstr+"Z";
            else if(str[i]=="a") decstr=decstr+"x";
            else if(str[i]=="b") decstr=decstr+"y";
            else if(str[i]=="c") decstr=decstr+"z";
            else if((str[i].charCodeAt()>=97 & str[i].charCodeAt()<=123) || (str[i].charCodeAt()>=65 & str[i].charCodeAt()<=90)) decstr=decstr+String.fromCharCode(str[i].charCodeAt()-3);
            else decstr=decstr+str[i];
        }
    return decstr;
  }
  //question1: The top secret file number is...
  answer1="?";
  //question2: Super agent's name is...
  answer2="?";
  //question3: He stole the treasure is...
  answer3="?";