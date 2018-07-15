import axios from "axios";
require('dotenv').config();

const PATH_BASE = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const API_KEY = process.env.REACT_APP_NYT_KEY;
const PATH_SEARCH = "";
const BEGIN_YEAR = "begin_date=";
const END_YEAR = "end_date=";
const DAY_MONTH = "0101"
const url = `${PATH_BASE}&q=${PATH_SEARCH}&${BEGIN_YEAR}${DAY_MONTH}&${END_YEAR}${DAY_MONTH}?api-key=${API_KEY}&limit=5`;

export default {
  search: function(query1, query2, query3) {
    return axios.get(`${PATH_BASE}?q=${query1}&begin_date=${query2}${DAY_MONTH}&end_date=${query3}${DAY_MONTH}&api-key=${API_KEY}`);
  }
};