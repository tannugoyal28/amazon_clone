import React , {useState} from 'react'
import './Login.css'
import { Link , useHistory } from 'react-router-dom'
import { auth } from './Firebase';

function Login() {
    const history = useHistory('');
    // const [name , setName] = useState('');
    // const [style,setStyle] = useState('cont');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }


  return (
    <div className='login'>
    <Link to='/'>
      <img className='login_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG1.png'/>
      </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='text'value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>

            <button onClick={signIn} type='submit'
            className='login_signInButton'>Sign In</button>
        </form>
        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button onClick={register} type='submit'
        className='login_registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
