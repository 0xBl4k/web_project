// just a page made of my own javascript code that will be only applied to profile page
function nameValid(){
    document.getElementById("errName").innerHTML = ""
    let Fname = document.getElementById("Fname").value.trim()
    if(Fname == "") document.getElementById("errName").innerHTML = "please enter your name!"
    else if(Fname.length < 2) document.getElementById("errName").innerHTML = "please enter more than 2 characters!"
    else if(Number(Fname) == Number(Fname)) document.getElementById("errName").innerHTML = "please start with a character!"
    return Fname;
}

function emailValid(){
    document.getElementById("errEmail").innerHTML = ""
    let Email = document.getElementById("Email").value.trim()
    if(Email == "") document.getElementById("errEmail").innerHTML = "please enter your email!"
    return Email;
}

function ageValid(){
    document.getElementById("errAge").innerHTML = ""
    let Age = document.getElementById("Age").value.trim()
    if(Age == "" || Age == 0) document.getElementById("errAge").innerHTML = "please enter your age!"
    else if(Age < 14) document.getElementById("errAge").innerHTML = "you are too small!"
    else if(Age > 100) document.getElementById("errAge").innerHTML = "how are you still alive?"
    return Age;
}

function goalValid(){
    document.getElementById("errGoal").innerHTML = ""
    let goals = document.getElementsByName("Goal")
    console.log(goals)
    for(i = 0 ; i < goals.length; i++){
        if(goals[i].checked){
            break 
        } 
        else{
            document.getElementById("errGoal").innerHTML = "please select a goal!"
            break
        }// continye pls
    }
    return 
}

function skillValid(){

}

function GetRecommendation(){
    nameValid()
    emailValid()
    ageValid()
    goalValid()
    skillValid()
}
