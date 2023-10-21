import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login (){
 
    const  Navigate = useNavigate; 
    
    const singin = () => { 
 
         Navigate('./SingUp.js')
    }
     
    return (
        <div className=" body">
            <div className=" main">
            <h2>Login</h2>
            <br></br>
             <p>Emai/Mobile</p>
             <input type="email" placeholder="John@gmail.com"></input>
             <p>Password</p>
             <input type="password" placeholder="123123"></input>
             <button >Login</button>
             <p> Not a member <span onClick={singin}>Singup</span></p>
             </div>
        </div>
    )
}

export default Login;