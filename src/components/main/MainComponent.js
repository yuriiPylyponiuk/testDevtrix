import React from "react"
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getName, getDescription, getStatus} from '../../redux/main/mainActions';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

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
			<Form>
        <FormGroup>
          <Label for="name">Your name</Label>
          <Input 
            onChange={(e)=> this.props.getName(e.target.value)} 
            value={this.props.name} 
            type="text" 
            id='name' 
            bsSize="lg" />          
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input 
            type="textarea" 
            onChange={(e)=> this.props.getDescription(e.target.value)} 
            value={this.props.description} 
            name="text" 
            id="exampleText" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input 
              type="checkbox" 
              checked={this.props.status}
              onChange={(e)=> {this.handleChanhge(e)}}/> On/Off
          </Label>
        </FormGroup>
        <Col sm={{ size: 'auto', offset: 11 }}>
          {this.props.required
          ?<Link to='/page2/'><Button color="success" size="lg">Next</Button></Link>
          :<Button color="success" size="lg" onClick={()=>alert('Fill name field')}>Next</Button>}
        </Col>
			</Form>
		)
	}
}

const mapStateToProps = (state) => {
  return {...state.mainReducer}
}

export default connect(mapStateToProps, {getName, getDescription, getStatus})(MainInfoComponent);