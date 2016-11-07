export function protectPlaceholders() {
  let document: any = window.document;
  var placeholderContainer = document.createElement("div");
  placeholderContainer.setAttribute('style','display:none');
  document.getElementsByTagName('body')[0].appendChild(placeholderContainer);
  let list = document.getElementsByTagName("placeholder");
  for (let ph of list) {
    let parent = ph.parentElement;
    let originalId = ph.id;
    let newId = `${parent.tagName.toLowerCase()}-${originalId}-${placeholderContainer.childElementCount}`;
    parent.setAttribute(`placeholder-${originalId}`, newId);
    ph.id = newId;
    placeholderContainer.appendChild(ph);
  }
}
