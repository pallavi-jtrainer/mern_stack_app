import axios from 'axios';

// const BASE_URL = "http://localhost:5000";
// eslint-disable-next-line import/no-anonymous-default-export
export default {

  getAllBooks: function() {
    return axios.get('/api/books');
  },
  getBook: function(id) {
    return axios.get('/api/books/' + id);
  },
  saveBook: function(bookData) {
    return axios.post('/api/books', bookData);
  }
  //   getAllBooks: function() {
  //       return axios.get(BASE_URL + '/books');
  //   },
  //   getBook: function(id) {
	// 	return axios.get(BASE_URL + '/books/' + id);
	// },
  //   saveBook: function(bookData) {
	// 	return axios.post(BASE_URL + '/books', bookData);
  //   }
};