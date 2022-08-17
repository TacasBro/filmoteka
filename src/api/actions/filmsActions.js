import {
  GET_TOP_RATED,
  GET_TOP_RATED_ERROR,
  GET_DISCOVER,
  GET_DISCOVER_ERROR,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_ERROR,
  GET_BY_ID,
  GET_BY_ID_ERROR
} from "../types";
import axios from "axios";

const api = "https://api.themoviedb.org/3";
const api_key = "0d234bc8bab43cc11d65e9ca95d40143";

export const getTopRated = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/movie/top_rated?api_key=${api_key}&language=pl-PL`
    );
    dispatch({
      type: GET_TOP_RATED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_TOP_RATED_ERROR,
      payload: console.log(e),
    });
  }
};

export const getDiscover = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/discover/movie?api_key=${api_key}&language=pl-PL`
    );
    dispatch({
      type: GET_DISCOVER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_DISCOVER_ERROR,
      payload: console.log(e),
    });
  }
};

export const getSearch = (search) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/search/movie?query=${search}&api_key=${api_key}&language=pl-PL`
    );
    dispatch({
      type: GET_SEARCH_LIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SEARCH_LIST_ERROR,
      payload: console.log(e),
    });
  }
};

export const getByID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/movie/${id}?api_key=${api_key}&language=pl-PL`
    );
    dispatch({
      type: GET_BY_ID,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_BY_ID_ERROR,
      payload: console.log(e),
    });
  }
};
