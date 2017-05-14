
var name = prompt("What's your name comrade?");
if(name === "" || name === "null" || name === "undefined"){
  name = "Comrade";
}  
document.getElementById("comName").innerHTML = "Hello " + name.toUpperCase() + "!!!";


function banGya() {
    var x = document.getElementById("rd1").checked;
    var y = document.getElementById("rd2").checked;
    var z = document.getElementById("rd3").checked;
    var a = document.getElementById("rd4").checked;
    if(x===true && y===true && z===true && a===true) {
        aud.play();
         
    }
    else if(x===true && y===true && z===true && a===false){
        aud.play();
         
    }
    else if(x===true && y===true &&  z===false && a===true){
        aud.play();
         
    }
    else if(x===true && y===false && z===true && a===true){
        aud.play();
         
    }
    else if(x===false && y===true && z===true && a===true){
        aud.play();
         
    }
    else if(x===false && y===false && z===false && a==true){
        document.getElementById("result").innerHTML = "Hurray!! Girls" + 
        " do listen to you " + name;
        }
    else if(x===false && y===false && z===true && a===false){
    document.getElementById("result").innerHTML = "Hurray!!  Girls" + 
    " do listen to you " + name;
    }
    else if(x===false && y===false && z===true && a===true){
    document.getElementById("result").innerHTML = "Hurray!! Girls " +
    " do listen to you " + name;
    }
    else if(x===false && y===true && z===false && a===false){
    document.getElementById("result").innerHTML = "Hurray!! Girls " +
    " do listen to you " + name;
    }
    else if(x===false && y===true && z===false && a===true){
    document.getElementById("result").innerHTML = "Hurray!! Girls " +
    " do listen to you " + name;
    }
    else if(x===false && y===true && z===true && a===false){
    document.getElementById("result").innerHTML = "Hurray!! Girls" +
    " do listen to you " + name;
    }
    else if(x===true && y===false && z===false && a===false){
    document.getElementById("result").innerHTML = "Hurray!! Girls " +
    " do listen to you " + name;
    }
    else if(x===true && y===false && z===false && a===true){
    document.getElementById("result").innerHTML = "Hurray!! Girls" +
    " do listen to you " + name;
    }
    else if(x===true && y===false && z===true && a===false){
    document.getElementById("result").innerHTML = "Hurray!! Girls " +
    " do listen to you " + name;
    }
    else if(x===true && y===true && z===false && a===false){
    document.getElementById("result").innerHTML = "Hurray!! Girls " +
    " do listen to you " + name;
    }
    else {
        alert("Please select atleast one option to check");
    }

}

