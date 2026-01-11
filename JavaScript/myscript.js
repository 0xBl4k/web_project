// just a page made of my own javascript code that will be only applied to techform page, yes it looks bad, but its me who made it so am proud of it :)
function nameValid(){
    document.getElementById("errName").innerHTML = ""
    let Fname = document.getElementById("Fname").value.trim()
    if(Fname == ""){
        document.getElementById("errName").innerHTML = "please enter your name!"
        return undefined
    } 
    else if(Fname.length < 2){
        document.getElementById("errName").innerHTML = "please enter more than 2 characters!"
        return undefined
    } 
    else if(Number(Fname) == Number(Fname)){
        document.getElementById("errName").innerHTML = "please start with a character!"
        return undefined
    } 
    return Fname;
}

function emailValid(){
    document.getElementById("errEmail").innerHTML = ""
    let Email = document.getElementById("Email").value.trim()
    if(Email == ""){
        document.getElementById("errEmail").innerHTML = "please enter your email!"
        return undefined
    } 
    else if(!Email.includes("@")){
        document.getElementById("errEmail").innerHTML = "please enter a valid email with a @ sign!"
        return undefined
    }
    else if(!Email.includes(".com")){ 
        document.getElementById("errEmail").innerHTML = "please enter an extention of your domain for email!"
        return undefined
    }
    else if(Email.charAt(Email.indexOf("@") + 1) == "."){ // checks if there is any letters after @ sign 
        document.getElementById("errEmail").innerHTML = "please enter a domain name!"
        return undefined
    }
    return Email;
}

function ageValid(){
    document.getElementById("errAge").innerHTML = ""
    let Age = document.getElementById("Age").value.trim()
    if(Age == "" || Age == 0){document.getElementById("errAge").innerHTML = "please enter your age!" 
    return undefined
    }
    else if(Age < 14){
        document.getElementById("errAge").innerHTML = "you are too small!"
        return undefined
    } 
    else if(Age > 100){
        document.getElementById("errAge").innerHTML = "how are you still alive?"
        return undefined
    } 
    return Age;
}

function goalValid(){
    document.getElementById("errGoal").innerHTML = ""
    let goals = document.getElementsByName("Goal")
    for(i = 0 ; i < goals.length; i++){
        if(goals[i].checked){
            document.getElementById("errGoal").innerHTML = ""
            return goals[i].value
        } 
    }
        document.getElementById("errGoal").innerHTML = "please select a goal!"
        return undefined
}

function skillValid(){
    document.getElementById("errSkills").innerHTML = ""
    let skills = document.getElementsByName("Skills")
    let choosenskills = []
    for(i = 0; i < skills.length ; i++){
        if(skills[i].checked){
            choosenskills.push(skills[i].value)
        }
    }
    if(choosenskills.length == 0){
        document.getElementById("errSkills").innerHTML = "please select atleast one skill!"
        return undefined
    }
    return choosenskills
}

function studyTimeValid(){
    document.getElementById("errTime").innerHTML = ""
    let time = document.getElementById("Time").value
    if(time <= 0){
        document.getElementById("errTime").innerHTML = "please enter a a weekly study time!"
        return undefined
    } 
    else if (time > 40){
        document.getElementById("errTime").innerHTML = "no way u study that much"
        return undefined
    } 
    return time;
}

function expValid(){
    document.getElementById("errExp").innerHTML = ""
    let exp = document.getElementById("exp").value
    if(exp == ""){
        document.getElementById("errExp").innerHTML = "please select an experience!"
        return undefined
    } 
    return exp
}

function GetRecommendation(){
    var NameV = nameValid()
    var EmailV = emailValid()
    var AgeV = ageValid()
    var goalV = goalValid()
    var skillV = skillValid()
    var StudyV = studyTimeValid()
    var expV = expValid()
    
    var arr = [NameV, EmailV, AgeV, goalV, skillV, StudyV, expV]
    document.getElementById("Report").value = ""
    for(i = 0; i < arr.length; i++){
        if(arr[i] == undefined){
            document.getElementById("Report").value = "there is an error in one of the above sections! please correct it and try again"
            break
        }
        else{
            var score = 0
            var rec = ""
            score = (skillV.length * 10) + (StudyV * 2) + (expV == "Advanced" ? 30 : (expV == "Intermediate") ? 20 : 10)
            if(score > 100){
                rec = "Choose specialization (Cyber / Web / Programming)"
            }
            else if (score < 100 && score > 71){
                rec = "Start projects & Git/Github"
            }
            else if (score < 70 && score > 41){
                rec = "Operating systems basics (Windows / Linux fundamentals)"
            }
            else{
                rec = "Start with basics of programming language you prefer & computer fundamentals"
            }
            
            document.getElementById("Report").value = 
`Report
 =====================================
 User Info...
 
 Name: ${NameV}
 Email: ${EmailV}
 Age: ${AgeV}
 
 ======================================
 
 User Status...
 User Learning goal is ${goalV}... 
 User knows ${skillV}...
 Times user spends studying ${StudyV} hours
 User Experience: ${expV}

 ======================================
 
 Recommendation:
 ${rec}
 
 ======================================
 `
        }
    }
    
}

