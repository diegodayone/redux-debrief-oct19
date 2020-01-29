import React from 'react';
import {connect} from "react-redux"

const mapStateToProps = state => state;

class StudentData extends React.Component {
    state = {  }
    render() { 
        return ( <div>
            {JSON.stringify(this.props.student)}
        </div> );
    }

 
}
 
export default connect(mapStateToProps)(StudentData);