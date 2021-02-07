import React from "react"
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getNumber, getEmail} from '../../redux/contacts/contactActions';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

class ContactComponent extends React.Component {
  constructor(props){
    super(props)
  }
	render(){
		return (
			<div>
        <FormGroup>
          <Label for="exampleNumber">Phone Number</Label>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="Phone number"
            onChange={(e)=> this.props.getNumber(e.target.value)} 
            value={this.props.phoneNumber} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Your Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Your Email" 
            onChange={(e)=> this.props.getEmail(e.target.value)} 
            value={this.props.email} />        
        </FormGroup>
        <Row xs="6">
          <Col xs="1" sm={{ offset: 0 }}>
            <Link to='/'><Button color="primary" size="lg">Prev</Button></Link>
          </Col>
          <Col xs="1" sm={{ offset: 10 }}>
            {this.props.required
            ?<Link to='/page3/'><Button color="success" size="lg">Next</Button></Link>
            :<Button color="success" size="lg" onClick={()=>alert('Fill phone field')}>Next</Button>}
          </Col>
        </Row>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
  return {...state.contactReducer}
}

export default connect(mapStateToProps, {getNumber, getEmail})(ContactComponent);