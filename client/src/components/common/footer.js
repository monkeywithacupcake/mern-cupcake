import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-pop">
                <div className="container section">
                    <div className="row">
                        Everything is fine. You found the footer.
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
