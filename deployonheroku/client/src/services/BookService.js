import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllBooks: function() {
        return axios.get('/books');
    },
    getBook: function(id) {
		return axios.get('/books/' + id);
	},
    saveBook: function(bookData) {
		return axios.post('/books/create', bookData);
    }
};