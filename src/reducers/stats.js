const initialState = {
  data: [],
  load: false,
  done: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "stats/load":
      return {
        ...state,
        load: true,
        done: false,
        error: false
      };
    case "stats/success":
      return {
        ...state,
        load: true,
        done: true,
        data: action.value
      };
    case "stats/error":
      return {
        ...state,
        load: false,
        done: false,
        error: action.value
      };
    case "stats/set":
      return {
        ...state,
        data: action.value
      };

    default:
      return state;
  }
};

export const set = value => {
  return dispatch => {
    dispatch({
      type: "stats/set",
      value: value
    });
  };
};

export const get = () => {
  return dispatch => {
    dispatch({
      type: "stats/load"
    });

    return fetch("/dist/data.json", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: "stats/success",
          value: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: "stats/error",
          value: err
        });
      });
  };
};
