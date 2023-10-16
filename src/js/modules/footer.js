import domCreator from "../createDomEl";
import { faIcon, wrap } from "../reusableNodes";
class Footer {
    constructor(element) {
        this.footer = document.querySelector('.footer');
        this.createFooterDom();
    }
    createFooterDom() {
        const copyright = domCreator.createElement({
            tagName:'div',
            clsName: 'footer__copyright',
            content: '© Stefan Beljin, All Rights Reserved.'
        })
        const gitHubText = domCreator.createElement(
            {
                tagName:'a',
                attribute:'href',
                attributeVal: 'https://github.com/kid782',
                clsName: 'footer__github',
                content: 'View more of my projects',
                child: faIcon(['fa-brands','fa-github'])
            }
        )
        const footerHolder = domCreator.createElement({
            tagName: 'div',
            clsName: 'footer__holder',
            child: [copyright, gitHubText]
        })
        this.footer.appendChild(wrap(footerHolder));
    }
}

export default Footer;