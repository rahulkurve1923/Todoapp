import ""

function Singup (){
    
    
     
    return (
        <div>
             <p>Full Name</p>
             <input type="text" placeholder="John"></input>
             <p>Father Name</p>
             <input type="text" placeholder="doe"></input>
             <p>Email</p>
             <input type="text" placeholder="doe"></input>
             <p>Phone Number : </p>
             <input type="number"></input>
             <p>Password</p>
             <input type="password" placeholder="123123"></input>
             <button>Login</button>
             <p>Already a member? <a href="./Login.js" >Login</a></p>
        </div>
    )
}

export default Singup;