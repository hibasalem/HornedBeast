import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likesNumber: 0,
        }
    }

    likesNumberTracker = () => {
        this.setState({
            likesNumber: this.state.likesNumber + 1,
        })
    }


    lastFunctionPass = (title, image_url, description) => {
        this.props.appFunctionMainToHorned(title, image_url, description);
        this.props.handleShowpropsToHorned();

    }



    render() {

        const cardStyle = {
            marginLeft: "7%",
            marginRight: "7%", 
        };

        return (

            <>    
                <Card style={{cardStyle}, { width: '18rem' } }  onClick={this.lastFunctionPass} >
                    <Card.Img
                        variant="top"
                        src={this.props.image_url}
                        alt={this.props.alt}
                        title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            ❤️:{this.state.likesNumber}
                        </Card.Text>
                        <Button
                            onClick={this.likesNumberTracker}
                            variant="primary">like
                    
                       </Button>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
export default HornedBeasts;
