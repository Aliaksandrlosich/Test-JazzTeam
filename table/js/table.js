/*Create table*/
for (let i = 0; i < 7; i++) {
    let row = document.querySelector("table").insertRow(-1);
    for (let j = 0; j < 7; j++) {
        let letter = String.fromCharCode("b".charCodeAt(0)+j-1);
        row.insertCell(-1).innerHTML = i && j ? "<input class = input id='"+ letter+i +"'/>" : i || j;
    }
}

let DATA={}, INPUTS=[].slice.call(document.querySelectorAll("input"));
INPUTS.forEach(function(elm) {
    elm.onfocus = function(e) {
        e.target.value = localStorage[e.target.id] || "";
    };
    elm.onblur = function(e) {
        localStorage[e.target.id] = e.target.value;
        computeAll();
    };
    var getter = function() {
        let value = localStorage[elm.id] || "";
        

 return isNaN(parseFloat(value)) ? value : parseFloat(value); 
    };
    Object.defineProperty(DATA, elm.id, {get:getter});
    Object.defineProperty(DATA, elm.id.toLowerCase(), {get:getter});
});
(window.computeAll = function() {
    INPUTS.forEach(function(elm) { try { elm.value = DATA[elm.id]; } catch(e) {} });
})();