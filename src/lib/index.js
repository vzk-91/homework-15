export const createElement =function (element, attr, child = null) {
    const elem = document.createElement(element);
    const attibut = Object.entries(attr);
   attibut.forEach(elemen => {
       elem.setAttribute(elemen[0],elemen[1])
   });
    const childType = typeof child;
    // Object.keys(attr).forEach(attrName => {
    //   elem[attrName] = attr[attrName];
    // });
  
    if (childType === "function") {
      const childEval = child();
      elem.appendChild(childEval);
      return elem;
    }
  
    if (childType === "string") {
      elem.innerHTML = child;
      return elem;
    }
  
    if (childType === "object" && Array.isArray(child)) {
      child.forEach(childElem => {
        if (typeof childElem === "string") {
          elem.innerHTML = child;
        } else {
          elem.appendChild(childElem);
        }
      });
      return elem;
    }
  
    if (childType === "object" && child) {
      elem.appendChild(child);
      return elem;
    }
  
    return elem;
  }
  
export const render = function (destination, target) {
    if (typeof target === "function") {
      const app = target();
      destination.appendChild(app);
      return;
    }
    destination.appendChild(target);
  }
  
 