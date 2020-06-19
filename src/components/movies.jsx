import React, { Component } from 'react';
import Pagination from './common/pagination';
import Paginate from './utils/paginate';
import axios from 'axios';
import Filter from './filters';
import MovieItem from './movieitem';
class Movies extends Component {
  state={
  movies:[],
  perPage:3,
  currentPage:1,
  currentGenre:'AllGenres',
  genres:['AllGenres','Action','Comedy','Thriller']
  }
  componentDidMount(){
    axios.get('https://still-mesa-20147.herokuapp.com/api/movies').then(res=> this.setState({movies:res.data}));
    
    
  }
  markCompleted =(movieitem) =>{
      this.setState({movies: this.state.movies.map(movie =>{
     if(movie.id === movieitem.id){
           movie.iscompleted=!movie.iscompleted
        } 
      return movie; 
      })});
      axios.put(     
        `https://still-mesa-20147.herokuapp.com/api/todos/${movieitem.id}/`,movieitem      
        ).then(res=>console.log(res.data))
  }
  pageClick=(page)=>{
    this.setState({currentPage:page}) 
    
  }
  helperDeleteFilter()
  {
    const {movies,perPage,currentPage,currentGenre}=this.state;
    const movieGenres=this.state.currentGenre==='AllGenres'?movies:movies.filter(movie=>movie.genre===currentGenre);
    return movieGenres;

  }
  delMovie =(id)=> {
    axios.delete(  
      `https://still-mesa-20147.herokuapp.com/api/movies/${id}`  
      )
    .then(res=>this.setState({movies:[...this.state.movies.filter(movie=>movie.id!==id)]}))
    
   let movieGenres=this.helperDeleteFilter()
   let items=Paginate(movieGenres,this.state.currentPage,this.state.perPage);

   if(items.length===1 ) this.pageClick(1)

  }
  addMovie= (title)=>{
    axios.post('https://still-mesa-20147.herokuapp.com/api/movies/',{
    title:title,
    iscompleted:false
    }).
    then(res=> this.setState({todos:[...this.state.todos,res.data]})
    );
  }
  changeGenre=(genre)=>{
    this.setState({currentGenre:genre,currentPage:1}) 
  }
  render() {
    
    const {movies,perPage,currentPage,currentGenre}=this.state;
    const movieGenres=this.helperDeleteFilter()
    const items=Paginate(movieGenres,currentPage,perPage)
    


    return (

      <div className="App">
        
                 <div className="container">
                  
                            <div className="row">
                                <div className='col-lg-2' style={{marginBottom:40}} >       
                                     <Filter
                                     currentGenre={this.state.currentGenre}
                                     changeGenre={this.changeGenre}
                                     genres={this.state.genres}
                                      />
                                </div>
                                <div className='col-lg-10'>
                                      <div className="row ">
                                          

                                       {items.map((movie)=>(

                                        <div  className='col-lg-4' key={movie.id} style={{marginBottom:30}}>
                                        <div className="alert alert-secondary" style={{minHeight:250}}>
                                            <MovieItem key={movie.id} movieitem={movie}

                                            delMovie={this.delMovie}
                                                />
                                      </div>
                                        </div>
                                       ))}
                                    

                                        </div>
                                </div>
                            </div>
              </div>
              
               <Pagination
                pageClick={this.pageClick}
                currentPage={this.state.currentPage}
                itemsPerPage={this.state.perPage}
                totalItems={movieGenres.length}
                />
    
      </div>
    );
  }
}
export default Movies;