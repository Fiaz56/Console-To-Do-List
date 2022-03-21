let userInput = prompt("Enter what do you want to do!");
let list = ["Sunday", "Monday"];

while (userInput !== "quit" && userInput !== "q") {

    if (userInput === "list") {
        for (let i = 0; i < list.length; i++) {
            console.log(`Index ${i}: ${list[i]}`);
        }
    }

    else if (userInput === "add") {
        let newItem = prompt("Enter the Item you want to add")
        if (newItem === "") {
            newItem = prompt("Enter the Item you want to add")
        }
        else {
            list.push(newItem);
            console.log(`${newItem} has been added to the list!`)
        }
    }

    else if(userInput === "delete"){
        let deletePrompt = parseInt(prompt("Enter the Index position number of item to delete!"));
        if(!Number.isNaN(deletePrompt)){
            let deletedItem = list.splice(deletePrompt, 1);
            console.log(`${deletedItem} has been removed from the list!`);
        }
        else{
            deletePrompt = parseInt(prompt("Enter the Index position number of item to delete!"));
        }
    }

    userInput = prompt("Enter what do you want to do!");
};

console.log("Okay, You Quit!!!");