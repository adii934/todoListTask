const userName=document.getElementById("gmail").value
const pass=document.getElementById("pass").value
var users=[]
const userBaseUrl="http://localhost:3500/user"
async function getUsers(){
    let response=await fetch(userBaseUrl)
    let data=await response.json()
    console.log(data)
    data.forEach(element => {
        users.push(element)
    });
}
getUsers()
console.log("users",users)

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
        users.map((element)=>{
            console.log("ELEMENT", element)
            if(element.email!=userName){
                const emailError=document.getElementById('emailError')
                emailError.innerText="User doesnot exist"
                emailError.style.color="red"
            }
            else if(element.email==userName){
                if(element.password!=document.getElementById("pass").value){
                    const passError=document.getElementById('passError')
                    passError.innerText="Incorrect Password"
                    passError.style.color="red"
                }
                else{
                    window.location.replace("http://127.0.0.1:5500/todoapp.html");
                    window.localStorage.setItem('user',userName)
                    // user.push({
                    //     email:userName,
                    //     password:pass
                    // })
                }
            }
            
        })
    }
   
}

