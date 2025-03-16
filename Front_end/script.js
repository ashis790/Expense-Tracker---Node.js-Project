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
    document.getElementById('login-btn').addEventListener('click',async (e)=>{
        e.preventDefault()
        //const username = document.getElementById("login-username").value
        const email = document.getElementById('login-email').value
        const password = document.getElementById('login-password').value
        console.log(email,password)
        const response = await fetch("http://localhost:3000/users/login",{
            method:'POST',
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify({email,password}),
        })
        const data = await response.json()
        console.log(data)
        if (data.message === 'Login successful!') {
            alert("Login successful!");
                localStorage.setItem('token', data.token); // Store token
                window.location.href = 'expense_tracker.html'
        } else {
            alert("Invalid credentials!");
        }

    })
    document.getElementById('signup-btn').addEventListener('click',async (e)=>{
        e.preventDefault()
        const username = document.getElementById("signup-username").value
        const name = document.getElementById('name').value
        const email = document.getElementById('signup-email').value
        const password = document.getElementById('signup-password').value

        const response = await fetch("http://localhost:3000/users/signup",{
            method:'POST',
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify({ name, username, email, password }),
        })
        const data = await response.json();
        alert(data.message)

    })



})