function nodeToString(node){

    if(typeof node !== 'object' || typeof node.nodeType === 'undefined'){
        throw new TypeError('In nodeToString: ' + node + ' is not a DOM node.');
    }

    //Try not to use clone if
    if(node.nodeType === Node.ELEMENT_NODE){
        //Check for innerHTML because some nodes don't have it
        //Can innerHTML be used? Check to see if node is the only Node.
        if(node.parentNode && node.parentNode.childNodes.length === 1){
            return String(node.parentNode.innerHTML);
        }else{
            return cloneToString(node);
        }
        //Check for children (elements) which some text nodes will have
    }else if(node.nodeType === Node.TEXT_NODE && !node.children){
        return node.textContent;
    }

    return cloneToString(node);

}

function cloneToString(node){
    let p = document.createElement('p');

    try{
        let clone = node.cloneNode(true);
        p.appendChild(clone);
    }catch(e){
        throw new Error(`In nodeToString:
        Attemp at cloning ${node} failed - with error ${e}`);
    }

    return p.innerHTML;
}

export default nodeToString;

/*
git remote add origin https://github.com/hollowdoor/dom_node_tostring.git
git push -u origin master
*/
