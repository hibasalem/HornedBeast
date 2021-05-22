import React from 'react';
import HornedBeasts from './HornedBeasts';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import hornsData from './hornsData.json';
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            filteredBeasts: hornsData,
        }
    }

    SelectedBeastDataAppProps = (stateSelectedTitleData, stateSelectedUrlData, stateSelectedDescriptionData) => {
        this.props.appFunctionApptoMain(stateSelectedTitleData, stateSelectedUrlData, stateSelectedDescriptionData)
    }

    handleShowprops = (showpassed) => {
        this.props.handleShowAppToMain(showpassed)
    }



    // renderOption = (event) => {


    //     if (this.props.beastArr == hornsData) {
    //         this.props.myFilterRest(hornsData);
    //     }
    //     // console.log( this.props.beastArr);

    //     let hornsNum = event.target.value;

    //     let filteredBeasts = [];

    //     this.props.beastArr.filter((item) => {
    //         if (hornsNum == item.horns) {
    //             filteredBeasts.push(item)
    //         }
    //     });

    //     this.props.myFilter(filteredBeasts);
    // }


    renderOption = (event) => {

        let filteredBeastsarr = [];
        let hornsNum = event.target.value;
        if (hornsNum == 'All') {
            this.setState({
                filteredBeasts: this.props.beastArr,
            })
        }
        else {
            this.props.beastArr.filter((item) => {
                if (item.horns == hornsNum) {
                    filteredBeastsarr.push(item);
                }
            });
            this.setState({
                filteredBeasts: filteredBeastsarr,
            })
        }
    }

    render() {
        const bodyStyle = {
            marginLeft: "16%",
            marginRight: "16%",
            marginTop: "15px",
        };

        const cardStyle = {
            marginLeft: "7%",
            marginRight: "7%",
        };


        return (
            <div style={bodyStyle} >

                <Form >
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>choose horns number</Form.Label>
                        <Form.Control onChange={this.renderOption} name="select" as="select" size="sm" custom>
                            <option value='All'>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>wow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <hr />

                <div style={cardStyle} >
                    <CardColumns  >
                        {this.state.filteredBeasts.map((item, index) => {

                            return (
                                <>

                                    <HornedBeasts
                                        title={item.title}
                                        image_url={item.image_url}
                                        alt={item.alt}
                                        description={item.description}
                                        appFunctionMainToHorned={() => this.SelectedBeastDataAppProps(item.title, item.image_url, item.description)}
                                        handleShowpropsToHorned={this.handleShowprops}
                                        key={index}
                                    />
                                </>

                            )
                        })
                        }
                    </CardColumns>
                </div>

            </div>
        )
    }
}

export default Main;
