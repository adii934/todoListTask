const userName=document.getElementById("gmail").value
const pass=document.getElementById("pass").value
const user=[
    {
        email:"adil@12345",
        pass:"12345"
    }  
]

function onSubmit(event){
    event.preventDefault()
    console.log(userName)
    console.log(document.getElementById("pass").value)
    if(userName==""){
        const emailError=document.getElementById('emailError')
        emailError.innerText="Please enter valid email"
        emailError.style.color="red"
    }
    else if(document.getElementById("pass").value==""){
        const passError=document.getElementById('passError')
        passError.innerText="Please enter valid pass"
        passError.style.color="red"
    }
    else if(userName!="" && document.getElementById("pass").value!=""){
        user.map((element)=>{
            if(element.email!=userName){
                const emailError=document.getElementById('emailError')
                emailError.innerText="User doesnot exist"
                emailError.style.color="red"
            }
            else if(element.email==userName){
                if(element.pass!=document.getElementById("pass").value){
                    const passError=document.getElementById('passError')
                    passError.innerText="Incorrect Password"
                    passError.style.color="red"
                }
                else{
                    alert("OK")
                    // user.push({
                    //     email:userName,
                    //     password:pass
                    // })
                }
            }
            
        })
    }
   
}
console.log("user",user)
