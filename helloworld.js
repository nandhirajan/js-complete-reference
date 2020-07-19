function age (questions, agree, disAgree ) {
    let age = prompt(questions);
    if(confirm(age)){
        agree();
    }
    else{
        disAgree();
    }
}

function showAgree() {
    alert("Age is verified");
}

function showDisagree() {
    alert("Age is not verified");
}

let questions ="How old are you?";
age(questions, showAgree, showDisagree);
