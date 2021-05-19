import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component {



  render() {
    return (
      <>

        <Modal show={this.props.showvalue} >
          <Modal.Header >
            <Modal.Title>{this.props.SelectedBeastTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideValue} variant="secondary" >
              Close
            </Button>

          </Modal.Footer>
        </Modal>

      </>
    );
  }
}

export default SelectedBeast;


// onHide={handleClose}
// onClick={handleClose}