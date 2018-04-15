/**
 * Copyright (c) 2017-present, blockcollider.org developers, All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
import React, { Component } from 'react'

import ConnectionState from './ConnectionState'

export default class Navbar extends Component<*> {
  render () {
    const styleBrand = {
      height: '35px',
      width: '35px',
      padding: 0
    }

    return (
      <nav className='navbar navbar-fixed-top navbar-light bg-light'>
        <div className='navbar-brand'>
          <img src='/img/bc-black.png' style={styleBrand} />
          <span style={{marginLeft: '10px'}}>Block Collider</span>
        </div>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <span className='nav-link'>Block Collider</span>
            </li>
          </ul>
        </div>
        <ConnectionState connected={this.props.connected} />
      </nav>
    )
  }
}
