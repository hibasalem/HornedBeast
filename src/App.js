import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornsData from './components/hornsData.json';
import SelectedBeast from './components/SelectedBeast.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      dataArr: hornsData,

      stateSelectedBeastDataTitle: "",
      stateSelectedBeastDataUrl: "",
      stateSelectedBeastDatadescription: "",

      show: false,

    }
  }


  SelectedBeastData = (stateSelectedBeastDataTitleData, stateSelectedBeastDataUrlData, stateSelectedBeastDataDescriptionData) => {

    this.setState({
      stateSelectedBeastDataTitle: stateSelectedBeastDataTitleData,
      stateSelectedBeastDataUrl: stateSelectedBeastDataUrlData,
      stateSelectedBeastDatadescription: stateSelectedBeastDataDescriptionData,
    })
  }

  handleShow = () => {
    this.setState({
      show: true,
    })
  }

  

  handleClose = () => {
    this.setState({
      show:false,
    })
  }


  render() {
    return (
      <div>
        <Header />
        <Main beastArr={this.state.dataArr} appFunctionApptoMain={this.SelectedBeastData} handleShowAppToMain={this.handleShow} />
        <SelectedBeast SelectedBeastTitle={this.state.stateSelectedBeastDataTitle} SelectedBeastUrl={this.state.stateSelectedBeastDataUrl} SelectedBeastDescription={this.state.stateSelectedBeastDataDescriptionData} showvalue={this.state.show} hideValue={this.handleClose}/>
        <Footer />
      </div>
    )
  }
}
export default App;

