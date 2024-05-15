function validation() {
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    console.log(typeof(age));
    if(age>=18){
        alert("You can vote👍")
    }
    else{
        alert("Do your homework 👍");
    }
}