import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
    render() {

        const mystyle = {
            backgroundColor: "#e1e5ea",
            padding: "70px",
            fontFamily: "Arial",
            height:"200px",
        };

        return (
            <div style={mystyle}>
                <h1>
                    Horned Beasts
                </h1>
            </div>
        )
    }
}
export default Header;
