import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Switch,Redirect} from 'react-router-dom';

//////
import Movies from './components/movies';
import Header from './components/layout/headers';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notfound';
import MovieForm from './components/movieform';
import LoginForm from './components/loginform';
class App extends Component {
  
  render() {
    
  
    return (
      <div className="App">
                <Header/>
                 <div className="container">
                   <Switch>
                       <Route path="/login" component={LoginForm}/>
                       <Route path="/movies/:id" component={MovieForm}/>
                       <Route path="/movies" component={Movies}/>
                       <Route path="/rentals" component={Rentals}/>
                       <Route path="/customers" component={Customers}/>
                       <Route path="/not-found" component={NotFound}/>
                       <Route path='/' exact component={Movies}/>
                       <Redirect to='/not-found' />



                       
                       
                   </Switch>
                </div>
     </div>                 
    );
  }
}
export default App;