let employee = {
    name: "nandhi", marks: {
        language: 50,
        maths: 80
    }
};
// let admin = employee;
// let admin = Object.assign({}, employee);
let admin = JSON.parse(JSON.stringify(employee));

if (employee.marks == admin.marks)
    alert("Shallow copy");
else
    alert("Deep clone");