import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornsData from './components/hornsData.json';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArr: hornsData,
    }
  }


  render() {
    return (
      <div>
        <Header />
        <Main beastArr={this.state.dataArr}/>
        <Footer />
      </div>
    )
  }
}
export default App;

