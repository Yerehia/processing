function assignEvent(p5Element, eventType, customJS, ...newScriptActions) {
    switch (eventType) {
        case 'MOUSE_CLICK':
            p5Element.mouseClicked(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'DOUBLE_CLICKED':
            p5Element.doubleClicked(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'MOVED':
            p5Element.mouseMoved(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'DRAGGED':
            p5Element.mouseDragged(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'MOUSE_PRESSED':
            p5Element.mousePressed(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'MOUSE_RELEASED':
            p5Element.mouseReleased(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'SCROLLED':
            p5Element.mouseWheel(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'KEY_PRESSED':
            p5Element.keyPressed(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'KEY_RELEASED':
            p5Element.keyReleased(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        case 'KEY_TYPED':
            p5Element.keyTyped(() => { sendEvent(customJS, ...newScriptActions); });
            break;
        default:
            console.error("Tipo de evento no reconocido");
            break;
    }
}

function sendEvent(customJS, ...newScriptActions) {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var result = JSON.parse(xhr.responseText);
            result.forEach(action => eval(action));
         } else {
             console.error('La solicitud falló con el código de estado: ' + xhr.status);
         }
    };

    xhr.onerror = function() {
        console.error('La solicitud falló');
    };
    xhr.send("newScriptContent="+ encodeURIComponent(JSON.stringify(newScriptActions)));

    eval(customJS)
}
