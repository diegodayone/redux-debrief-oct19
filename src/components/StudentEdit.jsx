import React from 'react';
import { connect } from "react-redux"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch =>({
    setName: newName => dispatch({
        type:"SET_NAME",
        payload: newName
    }),
    setLoading: () => dispatch({ type:"SET_LOADING"}),
    unsetLoading: () => dispatch({ type:"UNSET_LOADING"})

})

class StudentEdit extends React.Component {
    state = {  }
    render() { 
        return (
        <div>
            <h2>Change the name here:</h2>
            <input type="text" 
                    placeholder="name"
                    value={this.props.student.name}
                    onChange={(inputEvent) => this.props.setName(inputEvent.target.value)}
                    ></input>
        </div>  );
    }

    componentDidMount = async () => {
        this.props.setLoading();
        
        setTimeout(() => { //imagine this as a long time taking operation as a fetch
            this.props.unsetLoading();
        }, 3000)
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(StudentEdit);