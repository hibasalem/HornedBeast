import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likesNumber: 0
        }
    }

    likesNumberTracker = () => {
        this.setState({
            likesNumber: this.state.likesNumber + 1,
        })
    }

    render() {
        return (
            <div>
                <CardColumns>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image_url} alt={this.props.alt} title={this.props.title} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Card.Text>
                                ❤️:{this.state.likesNumber}
                            </Card.Text>
                            <Button onClick={this.likesNumberTracker} variant="primary">like</Button>
                        </Card.Body>
                    </Card>

                </CardColumns>
            </div>
        );
    }
}
export default HornedBeasts;
