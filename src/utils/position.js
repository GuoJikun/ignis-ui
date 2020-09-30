const offsetLeft = el => {
    let left = el.offsetLeft;
    let current = el.offsetParent;
    while (current !== null) {
        // eslint-disable-next-line no-irregular-whitespace
        left += current.offsetLeft;
        // eslint-disable-next-line no-irregular-whitespace
        current = current.offsetParent;
    }
    return left;
};
const offsetTop = el => {
    let top = el.offsetTop;
    let current = el.offsetParent;
    while (current !== null) {
        // eslint-disable-next-line no-irregular-whitespace
        top += current.offsetTop;
        // eslint-disable-next-line no-irregular-whitespace
        current = current.offsetParent;
    }
    return top;
};

export const position = opt => {
    const left = offsetLeft(opt);
    const top = offsetTop(opt);
    const width = opt.offsetWidth;
    const height = opt.offsetHeight;
    return {
        top: top,
        left: left,
        right: left + width,
        bottom: top + height,
    };
};
