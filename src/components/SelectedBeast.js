import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component {
  final = () => {
    this.props.changeInfo();
  }
  render() {
    return (
      <>
        {/* <Modal show={true} onHide={true} animation={false}>
<Modal.Header closeButton>
   <Modal.Title> {this.props.title}</Modal.Title>
 </Modal.Header>
 <Modal.Body>
 <Modal.Img src={this.props.imgUrl} alt={this.props.title}  />   
 {this.props.description}
     </Modal.Body>
 <Modal.Footer>
   <Button variant="secondary" onClick={true}>
     Close
  </Button>
 </Modal.Footer>
</Modal> */}
      </>
    );
  }
}
export default SelectedBeast;