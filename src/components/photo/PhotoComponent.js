import React from "react"
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getPhoto} from '../../redux/photo/photoActions';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

class PhotoComponent extends React.Component {
  constructor(props){
    super(props)
    this.selectFile = this.selectFile.bind(this); 
    this.showPhot = this.showPhot.bind(this); 
  }

  selectFile(e){
    let arr = [];
    if(e.target.files.length > 0 && e.target.files.length < 5){
      for(let i=0; i< e.target.files.length; i++){
        arr.push(URL.createObjectURL(e.target.files[i]))
      }
    }
    this.props.getPhoto(arr)
  }
  showPhot(){
    return(
      this.props.photos.map( i => {
        return(
          <img key = {i} src = {i} ></img>
        )
      })

    )
  }
  
	render(){
    return (
      <div>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input 
            type="file" 
            onInput={(e)=>{this.selectFile(e)}} 
            multiple 
            accept=".jpg, .jpeg, .png" 
            name="file" 
            id="exampleFile" />
        </FormGroup>
        {this.props.show &&  this.showPhot()}
        <Row xs="6">
          <Col xs="1" sm={{ offset: 0 }}>
            <Link to='/page2/'><Button color="primary" size="lg">Prev</Button></Link>
          </Col>
          <Col xs="1" sm={{ offset: 10 }}>
            <Link to='/page4/'><Button color="success" size="lg">Next</Button></Link>
          </Col>
        </Row>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {...state.photoReducer}
}

export default connect(mapStateToProps, {getPhoto})(PhotoComponent);