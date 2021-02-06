import React from "react"
import {Link} from 'react-router-dom';


class ContactComponent extends React.Component {
	render(){
		return (
			<div>
        <form>
          <input 
            onChange={(e)=> this.props.getName(e.target.value)} 
            value={this.props.name} 
            type="text"/>
          <input 
            onChange={(e)=> this.props.getName(e.target.value)} 
            value={this.props.name} 
            type="text"/>
        </form>
        <Link to='/'>Prev</Link>
        <Link to='/page3/'>Next</Link>
			</div>
		)
	}
}


export default ContactComponent;