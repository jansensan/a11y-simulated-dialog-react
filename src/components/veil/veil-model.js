import signals from 'signals';

let VeilModel = {
  // properties
  isVisible: false,

  // signals
  // (should be used as read-only)
  dismissalRequested: new signals.Signal(),
  displayRequested: new signals.Signal(),

  // methods
  requestDismissal: requestDismissal,
  requestDisplay: requestDisplay,
};
export default VeilModel;

function requestDismissal() {
  if (!VeilModel.isVisible) {
    return;
  }

  VeilModel.isVisible = false;
  VeilModel.dismissalRequested.dispatch();
}

function requestDisplay() {
  if (VeilModel.isVisible) {
    return;
  }

  VeilModel.isVisible = true;
  VeilModel.displayRequested.dispatch();
}
