
/*Create table*/
for (let i = 0; i < 5; i++) {
    let row = document.querySelector("table").insertRow(-1);
    console.log(row);
    for (let j = 0; j < 6; j++) {
        let letter = String.fromCharCode("b".charCodeAt(0)+j-1);
        row.insertCell(-1).innerHTML = "<input class = input id='"+ letter+i +"'/>";
    }
}


