var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

function nodeToString(node) {

    if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object' || typeof node.nodeType === 'undefined') {
        throw new TypeError('In nodeToString: ' + node + ' is not a DOM node.');
    }

    //Try not to use clone if
    if (node.nodeType === Node.ELEMENT_NODE) {
        //Check for innerHTML because some nodes don't have it
        //Can innerHTML be used? Check to see if node is the only Node.
        if (node.parentNode && node.parentNode.childNodes.length === 1) {
            return String(node.parentNode.innerHTML);
        } else {
            return cloneToString(node);
        }
        //Check for children (elements) which some text nodes will have
    } else if (node.nodeType === Node.TEXT_NODE && !node.children) {
        return node.textContent;
    }

    return cloneToString(node);
}

function cloneToString(node) {
    var p = document.createElement('p');

    try {
        var clone = node.cloneNode(true);
        p.appendChild(clone);
    } catch (e) {
        throw new Error('In nodeToString:\n        Attemp at cloning ' + node + ' failed - with error ' + e);
    }

    return p.innerHTML;
}

export default nodeToString;
//# sourceMappingURL=bundle.es.js.map
