import domCreator from "./createDomEl";

export const wrap = (item) => {
    return domCreator.createElement({tagName:'div', clsName:'wrapper', child: item});
}

export const faIcon = (icon) => {
    return domCreator.createElement({tagName:'i', clsName:icon});
}