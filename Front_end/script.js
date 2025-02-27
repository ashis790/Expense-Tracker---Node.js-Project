document.addEventListener('DOMContentLoaded',function(){
    const loginBox = document.getElementById('login-box')
    const signupBox = document.getElementById('signup-box')

    const showSignup = document.getElementById("show-signup")
    const showlogin = document.getElementById('show-login')
    signupBox.style.display = "none"

    showSignup.addEventListener("click",(event)=>{
        event.preventDefault()
        loginBox.style.display = "none"
        signupBox.style.display= "block"
    })

    showlogin.addEventListener("click",(event)=>{
        event.preventDefault()
        loginBox.style.display = "block"
        signupBox.style.display = "none"
    })


})