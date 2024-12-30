import './LoginPopup.css'
import { useContext, useState } from 'react'
import cross from '../../assets/cross_icon.png'
import PropTypes from 'prop-types';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';


const LoginPopup = ({setShowLogin}) => {
  const {url,setToken} = useContext(StoreContext)
    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:"",
      confirmPassword: "",
      
      
      
      
    })
    const [passwordError, setPasswordError] = useState("");


   
  
    const onLogin = async (event)=>{
       event.preventDefault();
       let newUrl = url;
       if (currState === "Login"){
        newUrl += "/api/user/login"
       }
       else{
        newUrl +="/api/user/register"
       }

       const response = await axios.post(newUrl,data);
       if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)
       }
       else{
        alert(response.data.message)
       }


       if (data.password !== data.confirmPassword) {
        setPasswordError("Passwords do not match!");
      
      } else{
        setPasswordError("")
      }
       if (!passwordError) {
        // Proceed with form submission
        console.log("Form submitted", data);
      }

    }

    const onChangeHandler =(event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({
        ...data,[name]:value
      }))

    }
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} action="" className="login-popup-container">
         <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}src={cross} alt="" />
         </div>
         <div className="login-popup-inputs">
            {currState==="Login"
            ?<div>
              
            <input 
            className='input-style'
            name='email' 
            onChange={onChangeHandler} 
            value={data.email} type="text" 
            placeholder='Your Email' 
            required />
            

            <input 
            className='input-style'
            name='password' 
            onChange={onChangeHandler} 
            value={data.password} 
            type="password" 
            placeholder='Password' 
            required />
            </div>

            :<div> 

            <input 
            className='input-style'
            name ='name' 
            onChange={onChangeHandler} 
            value={data.name} 
            type="text" 
            placeholder='Your Name' 
            required />

            <input 
            className='input-style'
            name='email' 
            onChange={onChangeHandler} 
            value={data.email} 
            type="text" 
            placeholder='Your Email' 
            required />

           

            <input 
            className='input-style'
            name='password' 
            onChange={onChangeHandler} 
            value={data.password} 
            type="password" 
            placeholder='Password' 
            required />

            <input 
            className='input-style'
            name='confirmPassword'
            type="password" 
            placeholder='Re-type Password' 
            onChange={onChangeHandler}
            value={data.confirmPassword}
            required />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

          
            </div>}
            
           
         </div>
         <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
         <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing,I agree to the terms of use & privacy policy</p>

         </div>
         {currState==="Login"
         ?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span> </p>
         :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
         
         
      </form>
    </div>
  )
}
// Add PropTypes validation
LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // Validate as a required function
};

export default LoginPopup
