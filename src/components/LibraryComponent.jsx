import React from 'react';
import { connect} from "react-redux";
import { LoadBooks } from "../actions/libraryActions"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    loadBooksThunk: (search) => dispatch(LoadBooks(search))
})


class LibraryComponent extends React.Component {
    state = { 
        search:""
     }
   
    render() { 
        return ( <h2>
          {/* <input type="text" placeholder="Category..." value={this.state.search} onChange={(e)=> this.setState({ search: e.target.value})} />
          <input type="button" onClick={()=> this.props.loadBooksThunk(this.state.search)} value="Search"></input> */}
          <input type="button" onClick={()=> this.props.loadBooksThunk("horror")} value="Horror"></input>
          <input type="button" onClick={()=> this.props.loadBooksThunk("fantasy")} value="Fantasy"></input>
          <input type="button" onClick={()=> this.props.loadBooksThunk("scifi")} value="Scifi"></input>
          <input type="button" onClick={()=> this.props.loadBooksThunk("romance")} value="Romance"></input>
       
          
          {this.props.books && this.props.books.map((book, i) => 
          <div key={i}>
              <img src={book.image} style={{ width:"200px", height:"200px"}} alt={book.title} ></img>
              <h4>{book.title}</h4>
          </div>)}
        </h2> );
    }

    componentDidMount = async () => {
        this.props.loadBooksThunk()
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LibraryComponent);