import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornsData from './hornsData.json';


class Main extends React.Component{

    render(){
        return(
            <>
            {hornsData.map(item=>{
                return(
                    <HornedBeasts
                    title={item.title}
                    image_url={item.image_url}
                    alt={item.alt}
                    description={item.description}        
                    />
                )
            })}
            </>
        )
    }
}
export default Main;
