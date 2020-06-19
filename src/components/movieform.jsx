import React, { Component } from 'react';
const MovieForm = ({match,history}) => {
    return ( 

        <div>
            <h1>hello manikanta {match.params.id}</h1>
            <button className="btn btn-info" onClick={()=>history.replace('/movies')}>save</button>
    
     </div>
    )
}
 
export default MovieForm;