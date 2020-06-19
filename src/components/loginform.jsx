import React, { Component } from 'react';
import InputHandler from './common/inputs';
class LoginForm extends Component {
    state={
        accounts:{username:"",password:""},
        errors:{}
    }

    validate=()=>{
        const {accounts}=this.state;
        const errors={};
        if (accounts.username.trim()==="")
        
           errors.username='username is required'
    
        
        if (accounts.password.trim()==="")
        

           errors.password='password is required'
    
        
        return Object.keys(errors).length===0?null:errors;

    }

    handleSubmit=(e)=>
    {
        
        e.preventDefault();
        const errors=this.validate()
        
        this.setState({errors: errors|| {}})
        
        
    }
    handleChange=(input)=>(event)=>{
        const account={...this.state.accounts}
        account[input]=event.target.value

        this.setState({accounts:account})
        
        
        
    
      }
    render() { 
        return ( 
            <div className="container">
                <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <InputHandler
                            name='username'
                            handleChange={this.handleChange}
                            value={this.state.username}
                            type="text"
                            error={this.state.errors.username}                      
                            />
                            <InputHandler

                            name='password'
                            handleChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                            error={this.state.errors.password}

                                            
                            />
                       
                        <div className="col-lg-4">
                            <label htmlFor="submit">submit</label>
                            <button className="btn btn-primary form-control" id="submit">
                                submit

                            </button>


                        </div>
                        </div>
                        
                        </form>
                                                                            
                                    

                
            </div>
         );
    }
}
 
export default LoginForm;