let text=document.querySelector(".user-container input")
let password=document.querySelector(".pass-container input")
let messageerror=document.querySelector(".error")
let form=document.querySelector("form")
let icon=document.querySelector(".eye-icon i")
console.log(text)


function check (text,password){
    let errors=[];
     if(!text.value.includes("@") || !text.value.includes(".com")){
        errors.push("Invalid email")
    }
    if(text.value.trim()===""  ){
        errors.push("text is empty")
    }
     if(password.value.trim()===""){
        errors.push("password is empty")
    }

    return errors;

}
function togglepassword(){
    if(password.type==="password"){
        password.type="text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fe-eye");
    }else{
password.type="password";
 icon.classList.add("fa-eye-slash");
  icon.classList.remove("fa-eye");
    }
}



icon.addEventListener("click",()=>{
    togglepassword();
})


form.addEventListener("submit",(e)=>{
    let error=check(text,password);

    if(error.length>0){
    e.preventDefault();
    messageerror.innerHTML=error.join("/");
   
}else{
     localStorage.setItem("username",text.value);
localStorage.setItem("password",password.value);
window.open("website.html");
window.close("index.html");

    }
    }
);

