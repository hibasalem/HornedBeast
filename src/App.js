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

      stateSelectedTitle: "",
      stateSelectedUrl: "",
      stateSelectedDescription: "",

      show: false,
    }
  }

  SelectedBeastData = (title, url, description) => {

    this.setState({
      stateSelectedTitle: title,
      stateSelectedUrl: url,
      stateSelectedDescription: description,
    })
  }

  handleShow = () => {
    this.setState({
      show: true,
    })
  }


  handleClose = () => {
    this.setState({
      show: false,
    })
  }


  // myFilter = (filteredItems) => {
  //   this.setState({
  //     dataArr: filteredItems,
  //   })
  // }

  // myFilterRest = (hornsData) => {
  //   this.setState({
  //     dataArr: hornsData,
  //   })
  // }


  render() {
    return (
      <div>
        <Header />

        <Main

          beastArr={this.state.dataArr}
          myFilter={this.myFilter}
          myFilterRest={this.myFilterRest}
          appFunctionApptoMain={this.SelectedBeastData}
          handleShowAppToMain={this.handleShow}

        />

        <SelectedBeast

          SelectedBeastTitle={this.state.stateSelectedTitle}
          SelectedBeastUrl={this.state.stateSelectedUrl}
          SelectedBeastDescription={this.state.stateSelectedDescription}
          showvalue={this.state.show}
          hideValue={this.handleClose}
        />

        <Footer />

      </div>
    )
  }
}
export default App;

