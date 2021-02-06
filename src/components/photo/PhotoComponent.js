import React from "react"
import {Link} from 'react-router-dom';


class PhotoComponent extends React.Component {
	render(){
		return (
			<div>
				<h1>Hello PhotoComponent</h1>
        <Link to='/page2/'>Prev</Link>
        <Link to='/page4/'>Next</Link>
			</div>
		)
	}
}


export default PhotoComponent;