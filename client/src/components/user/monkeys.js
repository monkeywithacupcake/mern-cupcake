import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class Monkeys extends Component {
    renderMonkeys() {
        if (this.props.monkeys != null) {
            {this.props.monkeys.map((monkey, i) => <li key={i}>{monkey.name}</li>)}
        }
    }
  render() {
    return (
        <ul>
        <li>SOMEDAY THIS WILL BE A MONKEY</li>
        {this.renderMonkeys}
        </ul>
    )
  }
}
 
Monkeys.propTypes = {
  monkeys: PropTypes.array
}

//{this.props.monkeys.map((monkey, i) => <li key={i}>{monkey.name}</li>)}

// <div class="card blue-grey darken-1">
//             <div class="card-content white-text">
//               <span class="card-title">Card Title</span>
//               <p>I am a very simple card. I am good at containing small bits of information.
//               I am convenient because I require little markup to use effectively.</p>
//             </div>
//             <div class="card-action">
//               <a href="#">This is a link</a>
//               <a href="#">This is a link</a>
//             </div>
//           </div>
//
//
//           <ul>
//             {this.props.monkeys.map((monkey, i) => <li key={i}>{monkey.name}</li>)}
//           </ul>
