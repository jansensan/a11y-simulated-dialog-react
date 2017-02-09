import React, { Component } from 'react';

import ModalModel from '../components/modal/modal-model.js';
import VeilModel from '../components/veil/veil-model.js';

import Modal from '../components/modal/modal.jsx';
import Veil from '../components/veil/veil.jsx';

require('../styles/main.scss');

export default class IndexPage extends Component {
  constructor() {
    super();
  }

  // method definitions
  displayModal() {
    // add class to prevent scrolling
    document.body.classList.add('has-veil');

    VeilModel.requestDisplay();
    ModalModel.requestDisplay();
  }

  onButtonClicked() {
    ModalModel.triggerElement = this.modalButton;
    this.displayModal();
  }

  onDismissalRequested() {
    // remove class to allow scrolling
    document.body.classList.remove('has-veil');

    ModalModel.requestDismissal();
    VeilModel.requestDismissal();

    // return focus
    ModalModel.triggerElement.focus();
  }

  onInlineButtonClicked() {
    ModalModel.triggerElement = this.inlineModalButton;
    this.displayModal();
  }

  // react method definitions
  render() {
    return (
      <div className="index-page">
        <header className="header">
          <div className="centered-content">
            <h1>
              Simulated Dialog Demo<br/>
              <small>ES6</small>
            </h1>
          </div>
        </header>

        <section className="content">
          <div className="centered-content">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et nulla scelerisque, lacinia nulla non, tincidunt odio. Mauris orci mi, dignissim a ex nec, lobortis commodo sapien. Donec pharetra vehicula odio, ac feugiat erat ullamcorper vitae. Maecenas ex ipsum, vestibulum eu mollis a, venenatis pretium turpis. Vestibulum nec tristique dui, quis fringilla lorem. Maecenas suscipit euismod quam, eu congue sapien fringilla nec. <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/a">Link in the middle of copy</a>. Nullam sed faucibus libero. Sed aliquet, ligula ut dictum rhoncus, elit massa placerat diam, a sodales lacus lacus quis lorem. Nam feugiat mi eleifend sapien ullamcorper, a porttitor dolor varius. Fusce suscipit risus sem, sed pretium quam ultricies et.</p>
            <p>Aliquam posuere ante nec arcu dignissim fringilla. <button id="showModalInlineButton" className="btn-inline" type="button" aria-label="Opens a simulated dialog - Show modal">Show modal</button>. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut vehicula lorem. In eu auctor ligula. Quisque vitae elementum est. Proin id venenatis ipsum. Etiam sit amet dolor urna. Etiam a varius tortor. Fusce aliquam, mi a malesuada pulvinar, mauris purus dignissim dui, in malesuada mauris velit gravida.</p>
            <p>Nulla nec erat finibus, suscipit orci nec, varius nisi. Cras neque augue, egestas a auctor luctus, fermentum a nisl. Aenean rhoncus quis massa ac convallis. Quisque sed enim sed velit sodales pulvinar. Integer non elementum erat. Aenean vehicula, neque ut efficitur vulputate, lorem eros condimentum purus, nec fringilla quam orci sodales eros. Sed vehicula tellus vitae pulvinar imperdiet.</p>
            <button
              id="showModalButton"
              className="btn-primary"
              type="button"
              aria-label="Opens a simulated dialog - Show modal"
            >Show Modal</button>
          </div>
        </section>

        <footer className="footer">
          <div className="centered-content">
            <h1>
              Simulated Dialog Demo<br/>
              <small>ES6</small>
            </h1>
            <small>
              <h2>Sources and References</h2>
              <p>See all sources and references for this project and related ones on the <a href="https://github.com/jansensan/a11y-simulated-dialog-slides">presentation slides Github repo</a>.</p>
            </small>
          </div>
        </footer>

        <Veil/>
        <Modal/>
      </div>
    );
  }

  componentDidMount() {
    // dom elements
    this.inlineModalButton = document.getElementById('showModalInlineButton');
    this.modalButton = document.getElementById('showModalButton');

    // event/signals handlers
    this.inlineModalButton.addEventListener('click', this.onInlineButtonClicked.bind(this));
    this.modalButton.addEventListener('click', this.onButtonClicked.bind(this));
    ModalModel.dismissalRequested.add(this.onDismissalRequested, this);
    VeilModel.dismissalRequested.add(this.onDismissalRequested, this);
  }
}
