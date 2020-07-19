let employee = { name : "nandhi" };
let admin = employee;

if ( employee == admin )
    alert("copy by reference");
else   
    alert("clone object");