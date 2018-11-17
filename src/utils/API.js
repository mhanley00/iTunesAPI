import axios from "axios";

const BASEURL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term="; //https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo
const ALBUM = "&entity=album"

export default {
  search: function(query) {
    // return axios.get(BASEURL + query);
    return axios.get(BASEURL + query + ALBUM);
  }
};
