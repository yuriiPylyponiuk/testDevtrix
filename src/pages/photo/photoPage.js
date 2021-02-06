import React from 'react';
import PhotoComponent from '../../components/photo/PhotoComponent'

class PhotoPage extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello Photo</h1>
        <PhotoComponent />
      </div>
    )
  }
}

export default PhotoPage