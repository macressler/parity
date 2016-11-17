// Copyright 2015, 2016 Ethcore (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component, PropTypes } from 'react';

import styles from './busy.css';

export default class Busy extends Component {
  static propTypes = {
    title: PropTypes.string,
    state: PropTypes.string,
    children: PropTypes.node
  }

  render () {
    const { children, title, state } = this.props;

    return (
      <div className={ styles.center }>
        <div className={ styles.title }>{ title }</div>
        <div className={ styles.state }>{ state }</div>
        { children }
      </div>
    );
  }
}