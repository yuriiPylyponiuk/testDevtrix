import React from "react"
import {Link} from 'react-router-dom';


class LastComponent extends React.Component {
	render(){
		return (
			<div>
				<h1>Hello LastComponent</h1>
        <Link to='/page3/'>Prev</Link>
			</div>
		)
	}
}


export default LastComponent;