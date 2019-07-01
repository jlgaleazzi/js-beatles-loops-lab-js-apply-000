function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i=0; i<musicians.length;i++) {
    var bandMember = musicians[i] + " plays " + instruments[i];
    beatles.push(bandMember);
  }

  return beatles;
}

function johnLennonFacts(arr) {
  facts = [];
  for (var i=0;i<arr.facts;i++) {
    facts.push(arr[i]+"!!!") ;
  }
  return facts;
}