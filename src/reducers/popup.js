const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "popup/open":
      return Object.assign({}, state, { isOpen: true });
    case "popup/close":
      return Object.assign({}, state, { isOpen: false });

    default:
      return state;
  }
};

export const open = () => {
  return dispatch => {
    dispatch({
      type: "popup/open"
    });
  };
};

export const close = () => {
  return dispatch => {
    dispatch({
      type: "popup/close"
    });
  };
};
