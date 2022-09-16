let action = prompt("Enter an action (new, list, delete or quit)");
let todo = [];
while (true) {
    switch (action) {
        case "new":
            let item = prompt("Add an item to the todo list");
            todo.push(item);
            console.log("A new item was added on the list");
            console.log("******");
            for (let [idx, todoitem] of todo.entries())
                console.log(idx, todoitem);
            console.log("******");

            break;
        case "list":
            console.log("To do list:")
            console.log("******");
            for (let [idx, todoitem] of todo.entries())
                console.log(idx, todoitem);
            console.log("******");
            break;
        case "delete":
            let deleteIndex = parseInt(prompt("Select the index of the list to delete"));
            while ((!deleteIndex&& deleteIndex!==0) || (deleteIndex > (todo.length - 1) || deleteIndex < 0))
                deleteIndex = parseInt(prompt("Select the index of the list to delete"));
            console.log(`Index ${deleteIndex} will be deleted`);
            todo.splice(deleteIndex, 1);
            console.log("******");
            for (let [idx, todoitem] of todo.entries())
                console.log(idx, todoitem);
            console.log("******");
            break;
        case "quit":
            break;
        default:
            break;

    }
    if (action === "quit") {
        console.log("Quitting");
        break;
    }
    else {
        action = prompt("Enter an action (new, list, delete or quit)");
    }
}