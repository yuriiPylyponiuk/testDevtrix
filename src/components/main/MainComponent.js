import React from "react"
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getName, getDescription, getStatus} from '../../redux/main/mainActions';

class MainInfoComponent extends React.Component {
  constructor(props){
    super(props)
    this.handleChanhge = this.handleChanhge.bind(this); 
  }

  handleChanhge(e){
    if(this.props.status == 'on'){
      this.props.getStatus(false)  
    }else{
      this.props.getStatus(e.target.value)
    }
  }

	render(){
		return (
			<div>
        <input 
          onChange={(e)=> this.props.getName(e.target.value)} 
          value={this.props.name} 
          type="text"/>
        <textarea 
          onChange={(e)=> this.props.getDescription(e.target.value)} 
          value={this.props.description}>
        </textarea>
        <label>
          On/Off:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.props.status}
            onChange={(e)=> {this.handleChanhge(e)}} />
        </label>
        <Link to='/page2/'>Next</Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {...state.mainReducer}
}

export default connect(mapStateToProps, {getName, getDescription, getStatus})(MainInfoComponent);