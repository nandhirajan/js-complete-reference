let user = {
    name : "nandhi"
};

const sayHello = () => {
    alert("Hello");
}

user.sayHello = sayHello;

user.sayHello();

