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
    for(i = 0 ; i < goals.length; i++){
        if(goals[i].checked){
            document.getElementById("errGoal").innerHTML = ""
            return goals[i]
             
        } 
        else{
            document.getElementById("errGoal").innerHTML = "please select a goal!"
        }
    }
}

function skillValid(){
    document.getElementById("errSkills").innerHTML = ""
    let skills = document.getElementsByName("Skills")
    let choosenskills = []
    for(i = 0; i < skills.length ; i++){
        if(skills[i].checked){
            choosenskills.push(skills[i])
        }
    }
    if(choosenskills.length == 0) document.getElementById("errSkills").innerHTML = "please select atleast one skill!"
    return choosenskills
}

function studyTimeValid(){
    document.getElementById("errTime").innerHTML = ""
    let time = document.getElementById("Time").value
    if(time <= 0) return document.getElementById("errTime").innerHTML = "please enter a a weekly study time!"
    else if (time > 40) return document.getElementById("errTime").innerHTML = "no way u study that much"
    return time;
}

function expValid(){
    document.getElementById("errExp").innerHTML = ""
    let exp = document.getElementById("exp").value
    if(exp == "") document.getElementById("errExp").innerHTML = "please select an experience!"
}

function GetRecommendation(){
    nameValid()
    emailValid()
    ageValid()
    goalValid()
    skillValid()
    studyTimeValid()
    expValid()
   
}
