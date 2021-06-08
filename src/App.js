import './App.css';
import React,{Fragment,useEffect} from 'react';
import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing" 
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
// import Login from './components/auth/Login';
// import Register from "./components/auth/Register";
 import Categories from "./components/category/Categories";

// import{loadUser}from './actions/auth';
import {Provider} from 'react-redux';
import store from './store';

import AddCategory from './components/category/AddCategory';

import AddBook from './components/category/AddBook';
import AddSub from './components/category/AddSub';

// import SetToken from './helper/authToken';


// if(localStorage.token){

//   SetToken(localStorage.token);
// }

const App=()=> {


  // useEffect(()=>{

    //accessthe store =>call dispatch
  //   store.dispatch(loadUser());

  // },[]) // [] only run once 

  return(

    <Provider store={store}>

  <Router>
<Fragment>
<Navbar/>
{/* <Landing/> */}

{/* <Route exact path="/" component={Landing}/> */}
<Route exact path="/" component={Categories}/>
<Route exact path="/addbook" component={AddBook}/>

<Route exact path="/addCategory" component={AddCategory}/>
<Route exact path="/AddSub/:cate_id" component={AddSub}/>



<section className="container">
  <Switch>
{/* <Route  exact path="/register" component ={Register}/> */}


{/* <Route  exact path="/login" component ={Login}/> */}



  </Switch>
</section>
</Fragment>
  
  </Router>

  </Provider>
  )

  
}



export default App;
