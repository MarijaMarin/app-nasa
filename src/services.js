import axios from 'axios';

export const getDayFoto = () => {
	return axios.get('https://api.nasa.gov/planetary/apod?api_key=wPWbAFbrG24Kaccd8kZbxfMyGoq0ziB47zyy16pV ');
};

export const getPlanetNews = () => {
	return axios.get('https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/video/500');
};

export const getHubbleNews = () => {
	return axios.get('https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/image/200');
};

export const spaceNews = () => {
	return axios.get('https://api.spacexdata.com/v3/launches/latest');
};

export const astroGlossary = () => {
	return axios.get('https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/glossary');
};

export const getMarsPhoto = () => {
	return axios.get(
		'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=wPWbAFbrG24Kaccd8kZbxfMyGoq0ziB47zyy16pV'
	);
};
