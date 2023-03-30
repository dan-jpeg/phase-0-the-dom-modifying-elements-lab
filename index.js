const element = document.getElementById("main");
element.remove();
let newHeader = document.createElement("h1");
newHeader.setAttribute('id','victory');
newHeader.textContent = "dan is the champion."
document.body.append(newHeader);