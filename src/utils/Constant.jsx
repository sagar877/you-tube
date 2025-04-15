
const GOOGLE_API_KEY = 'AIzaSyDuDLrY64Nn-EtdCZbo3QCtUlMPZAkvdLw';
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

export const YOU_TUBE_API = `${PROXY_URL}https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;