function isTouching(variable1,variable2){
    if (variable1.x - variable2.x < variable2.width/2 + variable1.width/2
      && variable2.x - variable1.x < variable2.width/2 + variable1.width/2
      && variable1.y - variable2.y < variable2.height/2 + variable1.height/2
      && variable2.y - variable1.y < variable2.height/2 + variable1.height/2) {
   return true;
  }
  else {
    return false;
  }
  }