import axios from 'axios';
import SearchBar from './components/SearchBar';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID cyFHYIaPtNB8SgEnofBAiRgR56hXXdRbdFQp5PQhl40'
        },
        params: {
            query: term,
            
        }
    })

    return response.data.results;
};

export default searchImages;