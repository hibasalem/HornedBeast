import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Footer extends React.Component{

    render(){
        const footerStyle = {
            marginLeft: "16%",
            marginRight: "16%",
            marginTop: "15px",
        };

        return(
            <div  style={footerStyle} >
                <hr/>
                <p>
                Author : Hiba Salem 
                </p>
            </div>
        )
    }
}
export default Footer;
