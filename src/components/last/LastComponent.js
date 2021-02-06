import React from "react"
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {action1, action2, action3, action4, action5} from '../../redux/last/lastActions'

class LastComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleChanhge1 = this.handleChanhge1.bind(this); 
    this.handleChanhge2 = this.handleChanhge2.bind(this); 
    this.handleChanhge3 = this.handleChanhge3.bind(this); 
    this.handleChanhge4 = this.handleChanhge4.bind(this); 
    this.handleChanhge5 = this.handleChanhge5.bind(this); 
  }

  handleChanhge1(e){
    if(this.props.actionData1 == 'on'){
      this.props.action1(false)  
    }else{
      this.props.action1(e.target.value)
    }
  }
  handleChanhge2(e){
    if(this.props.actionData2 == 'on'){
      this.props.action2(false)  
    }else{
      this.props.action2(e.target.value)
    }
  }
  handleChanhge3(e){
    if(this.props.actionData3 == 'on'){
      this.props.action3(false)  
    }else{
      this.props.action3(e.target.value)
    }
  }
  handleChanhge4(e){
    if(this.props.actionData4 == 'on'){
      this.props.action4(false)  
    }else{
      this.props.action4(e.target.value)
    }
  }
  handleChanhge5(e){
    if(this.props.actionData5 == 'on'){
      this.props.action5(false)  
    }else{
      this.props.action5(e.target.value)
    }
  }

	render(){
		return (
			<div>
				<form>
          <label>
            On/Off:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.props.actionData1}
              onChange={(e)=> {this.handleChanhge1(e)}} />
          </label>
          <label>
            On/Off:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.props.actionData2}
              onChange={(e)=> {this.handleChanhge2(e)}} />
          </label>
          <label>
            On/Off:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.props.actionData3}
              onChange={(e)=> {this.handleChanhge3(e)}} />
          </label>
          <label>
            On/Off:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.props.actionData4}
              onChange={(e)=> {this.handleChanhge4(e)}} />
          </label>
          <label>
            On/Off:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.props.actionData5}
              onChange={(e)=> {this.handleChanhge5(e)}} />
          </label>
        </form>
        <Link to='/page3/'>Prev</Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {...state.finalReducer}
}

export default connect(mapStateToProps, {action1, action2, action3, action4, action5})(LastComponent);