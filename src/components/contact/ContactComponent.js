import React from "react"
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getNumber, getEmail} from '../../redux/contacts/contactActions'

class ContactComponent extends React.Component {
  constructor(props){
    super(props)
  }
	render(){
		return (
			<div>
        <form>
          <input 
            onChange={(e)=> this.props.getNumber(e.target.value)} 
            value={this.props.phoneNumber} 
            type="text"/>
          <input 
            onChange={(e)=> this.props.getEmail(e.target.value)} 
            value={this.props.email} 
            type="text"/>
        </form>
        <Link to='/'>Prev</Link>
        <Link to='/page3/'>Next</Link>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
  return {...state.contactReducer}
}

export default connect(mapStateToProps, {getNumber, getEmail})(ContactComponent);