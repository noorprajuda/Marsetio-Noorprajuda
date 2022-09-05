import axios from "axios";
import { REPOS_FETCH_SUCCESS } from "./actionType";
import { Octokit, App } from "octokit";

const username = "noorprajuda";

const baseUrl = `https://api.github.com/users/${username}/repos`;

export const fetchReposSuccess = (payload) => {
  return {
    type: REPOS_FETCH_SUCCESS,
    payload,
  };
};

export const fetchRepos = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get(`${baseUrl}`);
      dispatch(fetchReposSuccess(resp.data));
    } catch (error) {
      console.log(error);
    }
  };
};
