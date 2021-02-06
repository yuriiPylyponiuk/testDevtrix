import React from "react"
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getPhoto} from '../../redux/photo/photoActions'

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
				<input type="file" onInput={(e)=>{this.selectFile(e)}} multiple/>
        {this.props.show &&  this.showPhot()}
        <Link to='/page2/'>Prev</Link>
        <Link to='/page4/'>Next</Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {...state.photoReducer}
}

export default connect(mapStateToProps, {getPhoto})(PhotoComponent);