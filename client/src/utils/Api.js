import axios from "axios";

const PATH_BASE = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const API_KEY = "?api-key=93e358e0bf6947fdbca7a0477aee66e4";
const PATH_SEARCH = "&q=";
const BEGIN_DATE = "&begin_date=";
const END_DATE = "&end_date=";
const url = `${PATH_BASE}${PATH_SEARCH}${BEGIN_DATE}0101${END_DATE}0101${API_KEY}`;

export default {
  searchArticles: function(query) {
    return axios.get(url);
  }
};