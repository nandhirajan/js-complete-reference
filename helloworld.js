const age  = (questions, agree, disAgree )  => {
    let age = prompt(questions);
    if(confirm(age)){
        agree();
    }
    else{
        disAgree();
    }
}

const showAgree = ()  => {
    alert("Age is verified");
}

const showDisagree = () => {
    alert("Age is not verified");
}

let questions ="How old are you?";
age(questions, showAgree, showDisagree);
