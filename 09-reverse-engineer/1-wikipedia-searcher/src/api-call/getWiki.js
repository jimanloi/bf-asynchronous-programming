import ORIGIN from '../config.js';

const getWiki = async (searchTerms = '') => {
    const URL = `${ORIGIN}${searchTerms}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    const res = await response.json();

    return res;
};

export default getWiki;
