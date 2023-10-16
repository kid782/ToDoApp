import Logo from '../../assets/images/logo.jpg';
import domCreator from '../createDomEl';
import { wrap } from '../reusableNodes';

class Header {
    constructor(element) {
        this.header = document.querySelector('.header');
        this.createHeaderDom();
    }
    createHeaderDom() {
        const headerTitle = domCreator.createElement({tagName:'h2',clsName:'header__title', content:'To Do'});
        const headerText = domCreator.createElement({
            tagName: 'div', 
            clsName:'header__text',
            content: 'Make your responsibilites easy'
        });
        const headerHolder = domCreator.createElement({
            tagName:'div', 
            clsName:'header__holder',
            child: [headerTitle, headerText]
        });
        this.header.appendChild(wrap(headerHolder));
    }
}

export default Header;