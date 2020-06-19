import React ,{ Component } from 'react';
import TextLayout from './textlayout';
import propTypes from 'prop-types'




class MovieItem extends Component{

   
   

    render(){
        const { id}=this.props.movieitem;
    
      
        
        

      return (
          <div  className="row">
        <div className="col-12">

            <TextLayout

             items={this.props.movieitem}
            
            
            
            />
            

                

        
            </div>
            <div className="col-6" >


            <button type="button" onClick={()=>this.props.markCompleted(this.props.movieitem)}

              className="badge badge-info form-control">Check
              
              
              </button>
              </div>
            <div className="col-6">


            <button type="button" onClick={()=>this.props.delMovie(id)}

              className="badge badge-danger form-control"
              
              
              >
                  delete
              </button>
                    

            



             
              </div>
              
        
        
               
        
        </div>


        )


    }

              
    
  


}

MovieItem.propTypes={

    movieitem:propTypes.object.isRequired
}




export default MovieItem;