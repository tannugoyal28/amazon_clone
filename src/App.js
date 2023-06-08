import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51MMtEdSEIHx8risWRuVKycoNPzGPufH9teogl9kiutktgq7ct755LfcHGcUBQcVHMtfgfsyAk3ydxAXCF3ZWc3mm00Vg0gEY5t');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will ony run once when the app component loads... 
    auth.onAuthStateChanged( (authUser) => {
      console.log('USER' , authUser);
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/orders'>
          <Header/>
          <Orders/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/checkout'>
          <Header/>
          <Checkout/>
        </Route>
        <Route exact path='/payment'>
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>
        <Route exact path='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
