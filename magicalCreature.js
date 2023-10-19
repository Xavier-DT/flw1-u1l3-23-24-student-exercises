// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName = "Dragon";

// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription = "A red dragon";

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
let isFriendly = true;

// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
let visitorAge = Math.floor(Math.random() * 60) + 1;

// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
let canVisit = visitorAge > 15

// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.
let zooSummary =
  "Creature Name: " + creatureName + "\n" +
  "Description: " + creatureDescription + "\n" +
  "Is Friendly: " + isFriendly + "\n" +
  "Visitor Age: " + visitorAge + "\n" +
  "Can Visit: " + canVisit;

// 7. Print the summary using console.log()
console.log(zooSummary)

// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.
let creatureName1 = "Unicorn";
let creatureName2 = "Phoenix";
let creatureName3 = "Griffin";

let creatureDescription1 = "A white unicorn";
let creatureDescription2 = "A fiery phoenix";
let creatureDescription3 = "A brown griffin";

let isFriendly1 = true;
let isFriendly2 = true;
let isFriendly3 = false;

let zooSummary1 =
    "Creature Name: " + creatureName1 + "\n" +
    "Description: " + creatureDescription1 + "\n" +
    "Is Friendly: " + isFriendly1 + "\n" +
    "Visitor Age: " + visitorAge + "\n" +
    "Can Visit: " + canVisit;
let zooSummary2 = 
  "Creature Name: " + creatureName2 + "\n" +
  "Description: " + creatureDescription2 + "\n" +
  "Is Friendly: " + isFriendly2 + "\n" +
  "Visitor Age: " + visitorAge + "\n" +
  "Can Visit: " + canVisit;
let zooSummary3 = 
  "Creature Name: " + creatureName3 + "\n" +
  "Description: " + creatureDescription3 + "\n" +
  "Is Friendly: " + isFriendly3 + "\n" +
  "Visitor Age: " + visitorAge + "\n" +
  "Can Visit: " + canVisit;

let allZooSummaries = 
  "\nWelcome to the magical zoo!\n\n" + 
  zooSummary + "\n\n" + 
  zooSummary1 + "\n\n" + 
  zooSummary2 + "\n\n" + 
  zooSummary3;

console.log(allZooSummaries)