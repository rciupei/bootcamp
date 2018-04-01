function getUserFromDatabase(callback) {
    // simulates getting data from db
    setTimeout(() => callback({ firstName: 'Jordan', lastName: 'Hayashi',varsta: 22}), 1000);
}

function greetUser() {
    getUserFromDatabase((user)=> console.log("hi ",user.firstName, user.varsta));
}

// greetUser();
function sayHi(obj){
    console.log("hi " + obj.firstName);
}
sayHi({firstName: "Razvan"})