import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TextLayout extends Component {
    
    render() { 
        const {items}=this.props
        
        
        return ( 

            <div className='container'>
                <div className='row' style={{background:'white',marginBottom:20}}>
                        <div className='col-12'>     
                           <Link to={`movies/${items.id}`}>
                                  <h4>{items.title}</h4>
                           </Link>
                        </div>
                        <div className='col-4'>
                               Genre

                            <h6>{items.genre}</h6>
                        </div>
                        <div className='col-4'>
                                 Rate
                            <h6>{items.rate}</h6>
                        </div>
                        <div className='col-4'>
                                Stock
                            <h6>{items.stock}</h6>
                        </div>
                </div>
                
            </div>
         );
    }
}
 
export default TextLayout;