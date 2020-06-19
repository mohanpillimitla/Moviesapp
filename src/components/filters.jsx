import React, { Component } from 'react';
class Filter extends Component {
    state = {  }
    render() { 
        return ( 

            <ul className="list-group">
                {this.props.genres.map(genre=>
                    <li key={genre} 
                    className={ this.props.currentGenre===genre?"list-group-item active":"list-group-item"}
                        
                    
                    onClick={()=>this.props.changeGenre(genre)} style={{cursor:'pointer'}}
                    >
                        {genre}
                    
                    
                    </li>
                    
                    
                    )}
            
          </ul>



         );
    }
}
 
export default Filter;