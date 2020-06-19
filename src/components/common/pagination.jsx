import React, { Component } from 'react';
import _  from 'lodash';

class Pagination extends Component {

    render() { 
        const {itemsPerPage,totalItems,pageClick,currentPage}=this.props;
        const pagesCount=Math.ceil(totalItems/itemsPerPage)
        const pages=_.range(1,pagesCount+1)

        if (pagesCount===1) return null;
        

        return ( 

            <nav>
                <ul className="pagination justify-content-center">

                    {pages.map(page=>

                      <li key={page} className={page===currentPage?'page-item active':'page-item'}>
                         <a className="page-link" style={{cursor:'pointer'}}
                         
                         onClick={()=>pageClick(page)}
                         
                         >{page}</a>
                      </li>

                     


                    
                        
                        
                        
                        
                        )}

                    
                </ul>



            </nav>
         );
    }
}
 
export default Pagination;