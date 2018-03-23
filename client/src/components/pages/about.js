import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row center ">
                    <h1>About us</h1>
                    <h4>
                        Cupcakes are awesome
                    </h4>
                </div>
                <div className="row section default-primary-color">
                    A PLACEHOLDER FOR A ROW/COLLAGE OF IMAGES OR A SINGLE IMAGE
                </div>
                <div className="row section">
                    <h4 className="center">Our Short Story</h4>
                    <p>
                        We like cupcakes
                    </p>
                </div>
                
            </div>
        );
    }
}

export default About;
