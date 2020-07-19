function User (name) {
    // let this = {};       Implicity declare the object
    this.name = name;
    this.isAdmin = true;
    // return this;         Implicity retury the object
}

let user1 = new User("nandhi");

alert(user1.name);
alert(user1.isAdmin);