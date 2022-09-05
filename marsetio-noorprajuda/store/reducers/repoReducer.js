import { REPOS_FETCH_SUCCESS } from "../action/actionType";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = { repos: [] };

function repoReducer(state = initialState, action) {
  switch (action.type) {
    case REPOS_FETCH_SUCCESS:
      return { ...state, repos: action.payload };

    default:
      return state;
  }
}

let store = createStore(repoReducer, applyMiddleware(thunk));

export default store;
