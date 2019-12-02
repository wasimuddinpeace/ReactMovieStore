import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import Like from './Common/like'
import Pagination from './Common/pagination'
class Movies extends Component {
    state = {  
        movies:getMovies(),
        pageSize:10,
        currentPage:1
    
    }

  handlePageChange=page=>{
        this.setState({currentPage:page});
    }
    handleDelete(movie){
      const movies=this.state.movies.filter(m=>m._id !== movie._id)
      this.setState({movies : movies });
    }
    
    render(){ 
        if(this.state.movies.length===0)
        return <p>There are no movies in the database</p>;

        return ( 
            <React.Fragment> 
            <p>Showing {this.state.movies.length} movies from the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie =>(
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like/></td>
                        <td><button onClick={()=>this.handleDelete(movie)}type="button" className="btn btn-danger">Delete</button></td>
                        
                    </tr>
         ) ) }        
                 
                </tbody>
            </table>
            <Pagination  
            itemsCount={this.state.movies.length} 
            pageSize={this.state.pageSize} 
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
            />   
            </React.Fragment>
        );
        
    }
}
 
export default Movies;   