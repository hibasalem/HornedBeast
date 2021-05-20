import React from 'react';
import HornedBeasts from './HornedBeasts';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import hornsData from './hornsData.json';




class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {


        }
    }

    SelectedBeastDataAppProps = (stateSelectedTitleData, stateSelectedUrlData, stateSelectedDescriptionData) => {

        this.props.appFunctionApptoMain(stateSelectedTitleData, stateSelectedUrlData, stateSelectedDescriptionData)

    }

    handleShowprops = (showpassed) => {
        this.props.handleShowAppToMain(showpassed)
    }



    renderOption = (event) => {

        if (this.props.beastArr==hornsData){

            this.props.myFilterRest(hornsData);
        }

        // console.log( this.props.beastArr);

        let hornsNum = event.target.value;

        let filteredBeasts = [];

        this.props.beastArr.filter((item) => {

            if (hornsNum == item.horns) {

                filteredBeasts.push(item)
                // console.log(filteredBeasts);
            }
        });
        this.props.myFilter(filteredBeasts);

    }


    render() {
        return (
            <>
                <Form >

                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Custom select Small</Form.Label>
                        <Form.Control onChange={this.renderOption} name="select" as="select" size="sm" custom>
                            <option >All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>wow</option>
                        </Form.Control>
                    </Form.Group>

                </Form>

                {
                    this.props.beastArr.map(item => {
                        return (
                            <>

                                <HornedBeasts

                                    title={item.title}
                                    image_url={item.image_url}
                                    alt={item.alt}
                                    description={item.description}
                                    appFunctionMainToHorned={() => this.SelectedBeastDataAppProps(item.title, item.image_url, item.description)}
                                    handleShowpropsToHorned={this.handleShowprops}

                                />

                            </>
                        )
                    })
                }

            </>
        )
    }
}

export default Main;
