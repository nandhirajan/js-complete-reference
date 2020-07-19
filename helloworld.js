let employee = { name : "nandhi" };
// let admin = employee;
let admin = Object.assign({}, employee);

if ( employee == admin )
    alert("copy by reference");
else   
    alert("clone object");