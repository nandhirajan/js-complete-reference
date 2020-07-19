let age = prompt("How old are you?", 50);
let isUserConfirmed = confirm(`Are you sure you reached ${age}`);

if (isUserConfirmed) {
    alert(`You are ${age} year old!`);
}
else {
    alert("You entered incorrect age!");
}