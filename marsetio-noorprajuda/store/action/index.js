import axios from "axios";
import { REPOS_FETCH_SUCCESS } from "./actionType";
import { Octokit, App } from "octokit";

const baseUrl = "https://api.github.com/user/repos";

export const fetchReposSuccess = (payload) => {
  return {
    type: REPOS_FETCH_SUCCESS,
    payload,
  };
};

export const fetchRepos = () => {
  return async (dispatch) => {
    try {
      const octokit = new Octokit({
        auth: process.env.GITHUB_PAT,
      });
      await octokit.request("GET /orgs/{org}/repos", {
        org: "ORG",
      });
      const resp = await axios.get(`${baseUrl}`);
      dispatch(fetchReposSuccess(resp.data));
    } catch (error) {
      console.log(error);
    }
  };
};
