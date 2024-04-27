function assignEvent(p5Element, eventType, newScript, customJS) {
    switch (eventType) {
        case 'MOUSE_CLICK':
        console.log("Entra al mouse click: " + newScript);
            p5Element.mouseClicked(() => { sendEvent(newScript, customJS); });
            break;
        case 'DOUBLE_CLICKED':
            p5Element.doubleClicked(() => { sendEvent(newScript, customJS); });
            break;
        case 'MOVED':
            p5Element.mouseMoved(() => { sendEvent(newScript, customJS); });
            break;
        case 'DRAGGED':
            p5Element.mouseDragged(() => { sendEvent(newScript, customJS); });
            break;
        case 'MOUSE_PRESSED':
            p5Element.mousePressed(() => { sendEvent(newScript, customJS); });
            break;
        case 'MOUSE_RELEASED':
            p5Element.mouseReleased(() => { sendEvent(newScript, customJS); });
            break;
        case 'SCROLLED':
            p5Element.mouseWheel(() => { sendEvent(newScript, customJS); });
            break;
        case 'KEY_PRESSED':
            p5Element.keyPressed(() => { sendEvent(newScript, customJS); });
            break;
        case 'KEY_RELEASED':
            p5Element.keyReleased(() => { sendEvent(newScript, customJS); });
            break;
        case 'KEY_TYPED':
            p5Element.keyTyped(() => { sendEvent(newScript, customJS); });
            break;
        default:
            console.error("Tipo de evento no reconocido");
            break;
    }
}

function sendEvent(newScript, customJS) {
    var xhr = new XMLHttpRequest();
    console.log("Entra al send: " + newScript);

    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            eval(xhr.responseText);
         } else {
             console.error('La solicitud falló con el código de estado: ' + xhr.status);
         }
    };

    xhr.onerror = function() {
        console.error('La solicitud falló');
    };
    xhr.send("newScriptContent=" + newScript);

    eval(customJS)
}
