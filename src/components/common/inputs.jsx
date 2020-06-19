import React from 'react';
const InputHandler = (props) => {
    const{name}=props

    return ( 
    
                        

                        <div className="form-group col-lg-4">
                            <label htmlFor={name}>{name}</label>
                            <input type={props.type}
                             className="form-control" id="username" 
                             defaultValue={props.value}
                             onChange={props.handleChange(name)}
                             id={name}
                             />
                            {props.error && <div className="alert alert-danger">
                                 {props.error}
                            </div>
                             }
                        
                        </div>
                    
    
    
    );
}
 
export default InputHandler;