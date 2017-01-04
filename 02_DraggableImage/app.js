function startDrag(e) {
    console.log("startDrag");

    var targ = e.target;

    if (targ.className != 'dragme') {return};
    
    // calculate event X, Y coordinates
    window.offsetX = e.clientX;
    window.offsetY = e.clientY;

    // assign default values for top and left properties
    if (!targ.style.left) { targ.style.left='0px'};
    if (!targ.style.top) { targ.style.top='0px'};

    // calculate integer values for top and left 
    // properties
    window.coordX = parseInt(targ.style.left);
    window.coordY = parseInt(targ.style.top);
    window.drag = true;

}

function dragDiv(e) {
    if (!window.drag) {
        console.log("dragDiv early return");
        return
    };

    console.log("dragDiv");
    var targ = e.target;
    // move div element
    targ.style.left = window.coordX + e.clientX - window.offsetX + 'px';
    targ.style.top = window.coordY + e.clientY - window.offsetY + 'px';
    return false;
}

function stopDrag() {
    console.log("stopDrag");
    window.drag = false;
}

window.onload = function() {
    console.log("window.onload");
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
    document.onmousemove = dragDiv;
}

