import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dif: 'hi',
        }
    }

    info = () => {
        this.setState({
            dif: 'aaa',
        })
    }

    render() {
        return (
            <>
                {this.props.beastArr.map(item => {
                    return (
                        <HornedBeasts
                            title={item.title}
                            image_url={item.image_url}
                            alt={item.alt}
                            description={item.description}
                        />
                    )
                })}

                {/* <h1> {this.state.dif} </h1> */}
            </>
        )


    }
}

export default Main;
