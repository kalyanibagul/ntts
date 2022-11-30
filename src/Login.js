import React , {useState} from 'react'

export default function Login() {
    const styles = {
        width: "100px",
        fontSize: "20px",
        borderRadius: "40px",
        border: "1px solid black",
        color: "#fafafa",
        margin: "0.5em 1em",
        padding: "0.25em 1em",
        background: "#3f58c8",
      };
    
      // var re = "[A-Za-z]";
      const [User,setUser] = useState("")
      const [bgColour, setBgColour] = useState("#fafafa")
      const [Password,setPassword] = useState("")
      function handleLogin(e){
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
    
         var nameCheck =/ ^[A-Za-z.]{3,30}$/;
         var passwordCheck = / ^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
    
         if(nameCheck.test(name)){
             document.getElementById('nameError').innerHTML='';
         }else{
          document.getElementById('nameError').innerHTML='##Name is invalid';
          return false;
         }if(passwordCheck.test(password)){
          document.getElementById('passwordError').innerHTML='';
      }else{
       document.getElementById('passwordError').innerHTML='##Password is invalid';
       return false;
      }
        e.preventDefault();
       
      }
      const handler = (event) => {
        setUser(event.Key);
    };
      const appStyles={
        height:"100vh",
        background:`${bgColour}`
      }
    
      return (
        <div style={appStyles}>
          <h1>Login</h1> 
          <form onSubmit={handleLogin}>
          <label>Name:</label>
          <input type='text' placeholder='Enter User Name' id='name' required  onKeyPress={(e) => handler(e)} />
          <span id='nameError' className='text-danger font-weight-bold'></span>
          <br/><br/>
          <label>Password:</label>
          <input type='password' placeholder='Enter User Password' id='password' required/>
          <span id='passwordError' className='text-danger font-weight-bold'></span>
          <br/><br/>
          <button type='submit' className='btn-btn-primary' className="primary"
            style={styles}
            onMouseEnter={() => setBgColour("#3fc8b6")}
            onMouseLeave={() => setBgColour("#fafafa")}>Login</button>
          </form>
        </div>
      );
}

