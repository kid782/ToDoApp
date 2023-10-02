class domCreator {
    static createElement({tagName, clsName, content, child, eventName, 
        eventCallback, attribute,attributeVal}) {
        const element = document.createElement(tagName);
        if (Array.isArray(clsName)) {
            clsName.forEach(cls => {
                element.classList.add(cls);
            })
        } else {
            element.classList.add(clsName);
        }
        if (content) {
            element.textContent = content;
        }
        if(child) {
            if(Array.isArray(child)) {
                child.forEach(childElement => {
                    if(childElement) {
                        element.appendChild(childElement);
                    }
                });
            } else {
                element.appendChild(child);
            }
        }
        if(eventName && eventCallback) {
            element.addEventListener(eventName, eventCallback);
        }
        if(attribute) {
            element.setAttribute(attribute, attributeVal);
        }
        return element;
    }
}

export default domCreator;