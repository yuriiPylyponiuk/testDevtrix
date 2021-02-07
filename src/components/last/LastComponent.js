import React from "react"
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {action1, action2, action3, action4, action5} from '../../redux/last/lastActions';
import { Button, Form, FormGroup, Label, Input, Badge, FormText, Container, Row, Col } from 'reactstrap';

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
    if(this.props.finalReducer.actionData1 == 'on'){
      this.props.action1(false)  
    }else{
      this.props.action1(e.target.value)
    }
  }
  handleChanhge2(e){
    if(this.props.finalReducer.actionData2 == 'on'){
      this.props.action2(false)  
    }else{
      this.props.action2(e.target.value)
    }
  }
  handleChanhge3(e){
    if(this.props.finalReducer.actionData3 == 'on'){
      this.props.action3(false)  
    }else{
      this.props.action3(e.target.value)
    }
  }
  handleChanhge4(e){
    if(this.props.finalReducer.actionData4 == 'on'){
      this.props.action4(false)  
    }else{
      this.props.action4(e.target.value)
    }
  }
  handleChanhge5(e){
    if(this.props.finalReducer.actionData5 == 'on'){
      this.props.action5(false)  
    }else{
      this.props.action5(e.target.value)
    }
  }

	render(){
		return (
			<div>
        <FormGroup check>
         <h1>Select <Badge color="secondary">Options</Badge></h1>
          <Row>
            <Label check>
              <Input 
                type="checkbox" 
                checked={this.props.finalReducer.actionData1}
                onChange={(e)=> {this.handleChanhge1(e)}} />
              Check me out
            </Label>
          </Row>
          <Row>
            <Label check>
              <Input 
                type="checkbox" 
                checked={this.props.finalReducer.actionData2}
                onChange={(e)=> {this.handleChanhge2(e)}} />
              Check me out
            </Label>
          </Row>
          <Row>
            <Label check>
              <Input 
                type="checkbox" 
                checked={this.props.finalReducer.actionData3}
                onChange={(e)=> {this.handleChanhge3(e)}} />
              Check me out
            </Label>
          </Row>
          <Row>
            <Label check>
              <Input 
                type="checkbox" 
                checked={this.props.finalReducer.actionData4}
                onChange={(e)=> {this.handleChanhge4(e)}} />
              Check me out
            </Label>
          </Row>
          <Row>
            <Label check>
              <Input 
                type="checkbox" 
                checked={this.props.finalReducer.actionData5}
                onChange={(e)=> {this.handleChanhge5(e)}} />
              Check me out
            </Label>
          </Row>
        </FormGroup>
        <Row xs="12">
          <Col  xs='0'>
            <Link to='/page3/'><Button color="primary" size="lg">Prev</Button></Link>
          </Col>
          <Col  xs='0'  sm={{ offset: 10 }}>
            <Button size="lg">Save</Button>
          </Col>
        </Row>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {...state}
}

export default connect(mapStateToProps, {action1, action2, action3, action4, action5})(LastComponent);