function shout(string) {
  return string.toUpperCase()
}


function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var cantHear = 'I can\'t hear you!'
    var canHear = 'I can hear you!'
      var loveYou = 'I love you too!'
          if(string.toLowerCase === string){
          return cantHear
          }
            else if(string.toUpperCase === string){
              return canHear
            }
                else('I love you Grandma' === string){
                  return loveYou
                }
}
