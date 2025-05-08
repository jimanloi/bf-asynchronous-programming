import dom from '../dom/dom.js';
import clickHandler from '../handlers/clickHandler.js';

const clickEvent = () => {
    dom.searchButton.addEventListener('click', clickHandler);
};

export default clickEvent;
