import dom from '../dom/dom.js';
import getWiki from '../api-call/getWiki.js';
import createCard from '../components/createCard.js';

const clickHandler = async () => {
    dom.errorContainer.innerHTML = '';
    dom.outputContainer.innerHTML = '';
    const searchTerm = dom.input.value;

    try {
        const data = await getWiki(searchTerm);

        dom.outputContainer.append(createCard(data.query));
    } catch (error) {
        dom.errorContainer.innerHTML = error;
    }
};

export default clickHandler;
