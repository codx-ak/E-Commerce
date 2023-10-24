
export function RegisterAccount(value,navigate,setAuthCheck){
    localStorage.setItem('user',JSON.stringify({status:true,...value}))
    alert("Account Created")
    setAuthCheck(false)
    navigate('/home')
}

export function DeleteAccount(navigate,setAuthCheck){
    localStorage.clear()
    alert("Account Deleted")
    setAuthCheck(true)
    navigate('/login')
}

export function UpdateAccount(value){
    localStorage.setItem('user',JSON.stringify({status:true,...value}))
    alert("Account Updated")
}


export function LoginAccount(value,navigate,setAuthCheck){
    let User=localStorage.getItem('user')
    User=JSON.parse(User)
    if(localStorage.length){

        if(User.Email==value.Email){
            if(User.Psw==value.Psw){
                localStorage.setItem('user',JSON.stringify({...User,status:true}))
                alert("Login Successfully")
                setAuthCheck(false)
                navigate('/home')
            }
            else{
                alert("Password Error")
            }
        }
        else{
            alert("Account Not Found")
        }
    }
    else{
        navigate('/register')
    }
    
}
export function LogoutAccount(navigate,setAuthCheck){
    let User=localStorage.getItem('user')
    User=JSON.parse(User)
    localStorage.setItem('user',JSON.stringify({...User,status:false}))
    alert("Logout Successfully")
    setAuthCheck(true)
    navigate('/login')
}