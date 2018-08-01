function forLoop(aray) {
  for(var i = 0; i < 25; i++) {
    if(i===0) {
      aray.push("I am ${i} strange loop.")
    }else{
      aray.push("I am ${i} strange loops.")
    }
  }
  return aray
}

