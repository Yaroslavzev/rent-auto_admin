import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../../store/actions/login';
import {Redirect} from 'react-router-dom'; 

class Logout extends Component {
    componentDidMount(){
        this.props.onLogout()
    }
    render() {
        return <Redirect to="/sign_in" />
    }
}

const mapDispatchToProps = dispatch=> {
    return {
        onLogout:()=> dispatch(action.logout())
    }
}

export default  connect(null, mapDispatchToProps)(Logout);