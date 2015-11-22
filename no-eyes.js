
// The Man Who Had No Eyes

var code = [[1,1],[15,4],[1,3],[15,8],[2,56],[5,35],[4,66],[14,34],[4,33],
            [4,56],[14,34],[2,25],[1,3],[5,74],[5,75],[13,191],[7,43],[5,96],
            [5,97],[5,98],[5,99],[1,6],[5,96],[7,79],[10,91],[13,208],
            [3,18],[1,6],[4,35],[10,59],[10,60],[16,59],[4,78],[1,6],
            [5,96],[7,79],[10,91],[13,208],[13,209],[1,6],[12,22],[1,45],
            [2,90],[9,20],[9,21],[14,33],[7,63],[5,31],[7,79],[10,91],
            [16,23],[1,45],[1,23],[13,116],[1,39],[10,43],[12,10],[2,90],
            [10,46],[1,38],[7,63],[9,26],[9,27],[14,12],[2,100],[13,77],
            [16,53],[5,31],[7,79],[10,91],[16,23],[9,26],[2,67],[2,90],
            [13.152],[1,26],[2,46],[14,48],[10,40],[1,38],[2,92],[10,47],
            [1,45],[7,58],[10,27],[10,48],"(",[12,1],[10,41],[4,40],[14,33],".)",
            [10,57],[2,90],[14,64],"?","(",[16,143],[10,91],[10,42],".)",[10,49],
            [2,90],[12,1],[3,10],[2,4],[10,50],[9,24],[13,22],[10,5],
            [13,156],[15,4],[4,5],[14,43]]

var paras = [
  ["There","came","a","day","when","the","gray","caps","changed","the","course",
   "of","the","River","Moth","and","flooded","the","city","of","Ambergris.",
   "Abandoning","their","PLOTTED","lair,","they","came","out","into","the",
   "light,","put","the","rulers","of","the","city","to","flight,","and","took",
   "over","the","islands","that","were","now","Cinsorium","once","again."],

  ["At","first,","people","found","that","life","did","not","change","much",
   "under","the","new","rulers.","It","certainly","did","not","change","for",
   "the","most","famous","writer","in","Ambergris.","Born","in","the","city,",
   "he","used","the","city","as","his","palette,","bending","every","word","in",
   "the","world","to","his","will.","He","could","create","paragraphs","so",
   "essential","that","to","be","without","their","smooth,","wise","forms",
   "was","to","be","without","a","soul.","If","his","mood","was","grim,","he",
   "would","create","suicide","paragraphs:","words","from","the","almost",
   "dead","to","the","definitely","dead.","He","could,","I","tell","you,",
   "describe","an","object","in","such","a","way","that","forever","after",
   "his","description","replaced","the","original."],

  ["Perhaps","if","he","had","been","less","talented,","he","would","have",
   "been","less","APED.","For","praise","rose","all","about","him","as",
   "naturally","as","the","fog","that","came","off","the","River","Moth","and",
   "he","came","to","think","of","himself","as","unbound","by","any","laws",
   "other","than","those","of","fiction."],

  ["Thus,","he","felt","a","growing","need","to","break","the","labyrinthine",
   "rules","of","the","gray","caps.","He","laughed","at","daybreak","in",
   "front","of","the","watery","ruins","of","Truffidian","Cathedral.","After",
   "dusk,","he","distributed","his","stories","on","public","streets","for",
   "free.","He","read","his","work","from","a","boat","above","the","flooded",
   "and","now","ANONYMITY","statue","of","Voss","Bender.","He","wrote",
   "paragraphs","in","honor","of","the","Lady","in","Blue","(who,","from","the",
   "underground","passages","of","the","gray","caps,","confronted","them",
   "with","the","evidence","of","their","own","cruelty)."],

  ["After","the","fifth","such","offense,","the","gray","caps","cut","out",
   "his","tongue","and","threw","it","into","the","now","BONFIRES","River",
   "Moth,","for","the","fish","had","grown","fond","of","such","flesh.","They",
   "plucked","out","his","eyes","and","used","them","on","their","barges.",
   "They","cut","off","his","hands","and","used","them","as","candles","at",
   "their","administrative","offices.","They","mutilated","his","torso","with",
   "their","symbol,","in","fungus","green.","Then","they","sent","him","to",
   "the","one-room","stilt","house","of","his","birth,","by","the","water,",
   "so","that","he","could,","in","GORGEOUS,","contemplate","his","fate",
   "where","once","he","had","watched","swallows","fly,","snatching","insects."],

  ["For","a","long","time,","no","one","visited","the","writer","out","of",
   "fear.","His","own","wife","left","him","because","she","was","not",
   "BLINDING","enough.","Every","week,","a","Truffidian","priest","would",
   "come","close","enough","to","leave","food","and","water","on","his",
   "doorstep."],

  ["The","writer","sat","in","a","chair","facing","the","wall","as","the",
   "stories","built","up","inside","of","him","until","he","was","so","full",
   "that","he","thought","he","would","die","from","the","SNARL","of","them",
   "in","his","lungs.","But","he","had","no","tongue","with","which","to",
   "speak.","He","had","no","eyes","with","which","to","see","the","world.",
   "He","had","no","hands","with","which","to","write","down","his","stories.",
   "He","lived","inside","a","box","inside","a","box.","What","now","could",
   "he","do?"],

  ["For","many","weeks,","he","thought","about","killing","himself","and",
   "might","have","done","so","except","that","one","day","he","bumped",
   "against","the","table","on","which","he","set","the","supplies","and","a",
   "pen","rolled","off","the","edge.","It","fell","against","his","left",
   "foot.","The","touch","was","cold","and","sharp.","The","sensation","spread",
   "up","his","leg","and","up","into","his","torso","until,","inside","the",
   "boxes","inside","his","head,","something","awoke."],

  ["The","writer","spent","the","next","three","weeks","feeling","his","way",
   "across","every","inch","of","his","room","much","as","you,","dear",
   "reader,","are","feeling","your","way","through","this","story.","He",
   "picked","up","anything","that","lay","against","the","walls","until","the",
   "table,","the","chair,","the","bed,","and","a","few","books","all","stood",
   "in","the","middle","of","the","room.","Then,","holding","the","pen",
   "between","his","toes,","he","began","to","write","on","the","wall."],

  ["It","took","many","months","to","learn","how","to","write","with","his",
   "feet.","It","was","weeks","before","the","visiting","priest","could","read",
   "a","single","letter","and","much","longer","before","anything","more",
   "complex","appeared","on","the","walls.","Words","formed","without","form:",
   "“crashing","am","worry","depends","on","the","continuing","earth",
   "exists","can","Zamilon.”","Each","letter","became","an","act","of",
   "will--a","playing","out","in","his","mind","of","what","it","should","look",
   "like","and","then","making","his","toes,","his","foot,","his","leg,",
   "apply","the","correct","pressure","to","the","wall","so","that","the","pen",
   "did","not","break","and","the","shape","took","form","correctly."],

  ["Over","time,","the","writer","covered","the","walls","of","his","room",
   "with","the","visions","that","blossomed","in","the","dark","gardens","of",
   "his","mind.","Words","formed","sentences,","sentences","paragraphs,",
   "paragraphs","stories.","With","each","word,","a","great","burden","lifted",
   "itself","from","the","writer","and","he","began","to","feel","like",
   "himself","again.","Later,","with","sheets","of","paper","and","more","pens",
   "begged","from","the","priest,","more","words","spilled","out","in","a",
   "jumble,","his","pages","a","flood","greater","than","that","brought","by",
   "the","gray","caps."],

  ["I","saw","one","of","the","stories","the","writer","wrote","on","the",
   "wall--in","red","ink,","surrounded","by","thousands","of","other,",
   "disconnected","words.","It","read:"],

  ["There","once","was","a","cage","in","an","empty","room.","A","soft,","soft",
   "sound","like","weeping","came","from","the","cage.","After","a","time,","a",
   "man","entered","the","room.","He","was","gray","and","sad.","He","held","a",
   "small","animal","by","the","ears.","It","was","battling","to","escape.",
   "The","cage","grew","silent.","The","man","approached","the","cage.","He",
   "pulled","the","cage","door","open,","threw","in","the","animal,","and",
   "slammed","the","door","shut.","As","the","man","watched,","the","animal",
   "screamed,","its","paws","sliding","off","the","bars.","A","wound",
   "appeared","in","its","left","leg.","A","wound","appeared","in","its","left",
   "shoulder.","Slowly,","the","animal","was","eaten","alive","until","it",
   "was","just","a","pile","of","bone","and","blood.","The","weeping","became",
   "relentless.","Everything","the","man","placed","within","the","cage",
   "died.","Every","time,","the","man","felt","a","corresponding","thrill","of",
   "delight.","But","eventually","the","thrill","died","too.","It","became",
   "ordinary,","something","he","had","to","do.","Would","it","ever","stop?",
   "He","could","not","decide.","One","day,","he","grew","so","bored","that",
   "he","opened","the","cage","to","let","the","nothing","out.","He","expected",
   "it","would","kill","him,","but","it","did","not.","It","let","him","live.",
   "It","followed","him","everywhere.","Over","time,","it","killed",
   "everything","he","held","dear,","weeping","the","entire","time.","When",
   "nothing","was","left","to","care","about,","it","abandoned","the","man.",
   "The","man","sat","in","his","room","with","the","empty","cage","and","made",
   "the","weeping","sound","the","cage","had","once","made."],

  ["Before","the","gray","caps","had","mutilated","him,","the","writer","had",
   "published","dreams","and","long,","absurd","stories.","He","had",
   "published","fake","histories","and","travel","guides.","I","cannot","say",
   "I","care","much","for","what","he","writes","now,","although","he","became",
   "famous","for","it.","Within","a","short","time,","readers","began","to",
   "come","from","far","away","to","buy","a","page","from","him.","The",
   "writer","would","be","able","to","continue","to","do","what","he","had",
   "always","done.","He","just","had","no","tongue.","He","just","had","no",
   "eyes.","He","just","had","no","hands.","Was","that","really","so","bad?"],

  ["At","least,","this","is","the","story","the","man","wrote","for","me",
   "when,","as","a","traveler","to","Ambergris--fresh","from","an","encounter",
   "with","the","giant","squid","that","had","scuttled","my","boat--I",
   "visited","him","in","his","room.","Later,","others","told","me","that","he",
   "had","been","born","in","his","current","state","and","that","all","of",
   "his","ideas","came","from","old","books","by","obscure","authors,","read",
   "to","him","by","a","friend."],

  ["When","I","first","saw","him,","he","sat","by","a","window,","his","head",
   "thrown","back","as","if","to","receive","the","light.","(I","now","know",
   "he","was","listening.","Intently.)","The","writer","was","a","wiry","man",
   "whose","face,","with","its","wrinkles","and","mouth","of","perpetual",
   "grimace,","hinted","at","tortures","beyond","imagining.","His","arms","did",
   "indeed","end","in","nothing.","His","legs,","curled","beneath","him,",
   "were","tight","with","muscle","and","ended","in","muscular","feet.","His",
   "toes","seemed","as","supple","as","my","fingers.","When","I","came","in,",
   "he","smiled","at","me.","He","uncurled","his","feet,","stood,","and","held",
   "his","leg","up","in","a","ridiculous","position.","I","thought","he",
   "wanted","to","“shake","hands”,","but","no:","he","held","a","piece","of",
   "paper","between","his","toes.","He","nudged","it","toward","me.","I","took",
   "it.","What","did","it","say?","I","could","not","read","it.","It","was",
   "just","a","series","of","numbers.","What","do","numbers","mean","to","a",
   "man","like","me?","Nothing."]];

var lastPara = code.map(function(thisTerm) {
  thisTerm[0]--;
  thisTerm[1]--;
  var out;
//  console.log(thisTerm);
//  debugger;
  
  if (thisTerm.length > 1) {
    out = paras[thisTerm[0]][thisTerm[1]] + " ";
  } else {
    out = thisTerm + " ";
  }
  console.log(out);
  return out;
}).join();

console.log(lastPara);
