const destinations = ["Sun", "Mercury", "Venus", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
const ships = ["Saturn V", "Space Shuttle", "Ariane 5", "Dragon 2", "Starship"];
const outcomes = ["Touchdown! Landed successfully.", "Crash Landed!", "Burned up on Re-Entry!", "Navigation Error! Unknown Location.", "Succesfully in Orbit!"];

const data = [destinations, ships, outcomes];

const getRandom = array => {
    return array[Math.floor(Math.random() * array.length)];
};

const generateMessage = array => {
    for (subArray of array) {
        const message = getRandom(subArray);
        switch(subArray) {
            case destinations:
                console.log(`Your Destination: ${message}`);
                break;
            case ships:
                console.log(`Your Ship: ${message}`);
                break;
            case outcomes:
                console.log(`Mission Result: ${message}`);
                break;
            default:
                console.log("Program Malfunction! Something is wrong...");
        
        }
    }
};

generateMessage(data);