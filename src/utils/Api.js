import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
    //   'X-RapidAPI-Key': '9bacc56042msh7457bda3bef4f2fp1332eejsnb8645611968d',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  const fetchDataFromApi = async url =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
  }