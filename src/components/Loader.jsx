import React from 'react';
import { connect } from "react-redux"
import logo from '../logo.svg';

const mapStateToProps = state => state

class Loader extends React.Component {
    state = {  }
    render() { 
        return ( <>
            {this.props.isLoading && <>
            <img src={logo} className="App-logo" alt="logo" />
            Application is loading...
            </>}
        </> );
    }
}
 
export default connect(mapStateToProps)(Loader);