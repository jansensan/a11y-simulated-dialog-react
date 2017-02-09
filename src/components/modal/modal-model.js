import signals from 'signals';

let ModalModel = {
  // properties
  isVisible: false,
  triggerElement: null,

  // signals
  // (should be used as read-only)
  dismissalRequested: new signals.Signal(),
  displayRequested: new signals.Signal(),

  // methods
  requestDismissal: requestDismissal,
  requestDisplay: requestDisplay,
};
export default ModalModel;

function requestDismissal() {
  if (!ModalModel.isVisible) {
    return;
  }

  ModalModel.isVisible = false;
  ModalModel.dismissalRequested.dispatch();
}

function requestDisplay() {
  if (ModalModel.isVisible) {
    return;
  }

  ModalModel.isVisible = true;
  ModalModel.displayRequested.dispatch();
}
