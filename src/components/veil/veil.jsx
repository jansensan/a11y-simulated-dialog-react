import React, { Component } from 'react';
import VeilModel from './veil-model.js';

require('./veil.scss');

export default class Veil extends Component {
  constructor() {
    super();
  }

  // method definitions
  dismiss() {
    VeilModel.requestDismissal();
  }

  onDismissalRequested() {
    this.element.classList.add('hidden');
  }

  onDisplayRequested() {
    this.element.classList.remove('hidden');
  }

  onKeyPressed(event) {
    // exit if veil not visible
    if (!VeilModel.isVisible) {
      return;
    }

    // exit if not esc
    if (event.keyCode !== 27) {
      return;
    }

    VeilModel.requestDismissal();
  }

  // react method definitions
  render() {
    return (
      <div
        id="veil"
        className="veil hidden"
        onClick={this.dismiss}
      ></div>
    );
  }

  componentDidMount() {
    // dom elements
    this.element = document.getElementById('veil');

    // event/signals handlers
    document.addEventListener('keydown', this.onKeyPressed.bind(this));
    VeilModel.dismissalRequested.add(this.onDismissalRequested, this);
    VeilModel.displayRequested.add(this.onDisplayRequested, this);
  }
}