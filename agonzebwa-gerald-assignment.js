// //create 2 string variables
 let clubName = "manchester";
 let className = "player";

// // create 2 number variables
 let shirtNumber = 10;
 let shortNumber = 11;


// // use concatination of strings
// console.log(clubName + " and " + className);


// // use escape characters
let escapeWord = "she shouted, 'get out'";
 console.log(escapeWord);

// // create 3 objs with 2 properties, 1 should be a 'var' obj, second constant, and the other frozen objs
 let object1 = {england: "arsenal", spain:"barca"};
 const object2 = {italy: "juventus", france:"psg"};
 const object3 = Object.freeze({portugal: "benfica", netherlands:"ajax"});


// // add 2 properties to each of the objs
 object1.germany = "bayern";
 console.log(object1);
 object1.usa = "inter Miami";
 object2.turkey = "galatasaray";
 object2.uganda = "vipers";
 object3.denmark = "copenhagen";
 object3.russia = "moscow";
 console.log(object1);
 console.log(object2);
 console.log(object3);



// // delete one property from each of them
 console.log(delete object1.england);
 console.log(delete object2.italy);
 console.log(delete object3.netherlands);
 console.log(object1);




// create 5 if statements 
let liverpool = "premier league"
if (liverpool == "merseyside") {
    console.log("county in which liverpool is located")
} else if (liverpool == "Europa") {
    console.log("the only european competition they will compete in")
} else if (liverpool == "FA") {
    console.log(" the second Domestic competition")
} else if (liverpool == "carabao cup") {
    console.log("The third domestic competition they participate in")
} else {
    console.log("they do not participate in this league")
}



// create 5 switch cases
let football = ""
switch (football) {
    case "serie a":
        console.log("juve");
        break;
    case "la liga":
        console.log("barca");
        break;
    case "ligue 1":
        console.log("psg");
        break;
    case "bundes liga":
        console.log("bayern");
        break;
    case "mls":
        console.log("inter miami");
        break;
    default:
        console.log("league doesn't exist");
}




// create a switch case for arrays

// created an array called sports 
 let sports = ["hockey", "football", "tennis", "badminton"]

// create a variable sport to help us select a sport in the array 
 let sport = "hockey"

// create a variable sportIndex to help us select the position of the sport selected above in the array sports 
// /by using the method sports.indexOf(sport) 
 let sportIndex = sports.indexOf(sport)

// create a switch statement and give it a condition of the value of sportIndex
 switch (sportIndex) {
    case 0:
     console.log("you chose hockey");
         break;
 case 1:
     console.log("you chose football");
     break;
 case 2:
console.log("you chose tennis");
break;
     case 3:
console.log("you chose baddminton");
break;
     default:
console.log("grow up, sport is for babies");
}

// switch case for arrays
let topsix = ["mancity", "Arsenal", "man u", "newcastle", "liverpool", "brighton"]
let club = "tottenham"
let clubIndex = topsix.indexOf(club)

switch (clubIndex) {
    case 0:
        console.log("mancity were crowned champions")
        break;
    case 1:
        console.log("Arsenal were denied the title at the last moment")
        break;
    case 2:
        console.log("They easily qualfied for champions league")
        break;
    case 3:
        console.log("newcastle almost lost there champions league spot to liverpool")
        break;
    case 4:
        console.log("It was klopp's worst season")
        break;
    default:
        console.log("team is not among top six clubs")
}