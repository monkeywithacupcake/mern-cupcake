import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';

class BakerDashboard extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        if (this.props.baker != undefined) {
            const bakerid = this.props.baker.id;
        } else {
            try {
                await this.props.findBaker();
                const bakerid = this.props.baker.id;
            } catch (error) {
                console.log(error);
            }
        }
    }

    renderName() {
        if (this.props.baker != undefined) {
            const name = this.props.baker.name;
            return <h1>Hi, {name[0].toUpperCase() + name.substr(1)}</h1>;
        } else {
            console.log('trying to render Name but baker is undefined');
        }
    }

    renderBakery() {
        if (this.props.baker != undefined) {
            const bakery = this.props.baker.bakery;
            return <h4>{bakery}</h4>;
        } else {
            console.log('trying to render Bakery but baker is undefined');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="row valign-wrapper">
                        <div className="col m6 s12 center">
                            {this.renderName()}
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="row">{this.renderBakery()}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.baker.authenticated,
        baker: state.baker.baker
    };
}

export default connect(mapStateToProps, actions)(BakerDashboard);
