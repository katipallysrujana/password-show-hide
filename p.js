let icon=document.getElementById("icon")
let password=document.getElementById("password")
icon.onclick=function(){
    if(password.type==="password"){
        password.type="text"
        icon.classname="fa-solid fa-eye"
    }else{
        password.type="password"
        icon.classname="fa-solid fa-eye-slash"
    }
}