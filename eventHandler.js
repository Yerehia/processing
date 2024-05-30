function assignEvent(p5Element, eventType, eventFunction) {
    switch (eventType) {
        case 'MOUSE_CLICK':
            p5Element.mouseClicked(() => { eventFunction(); });
            break;
        case 'DOUBLE_CLICKED':
            p5Element.doubleClicked(() => { eventFunction(); });
            break;
        case 'MOVED':
            p5Element.mouseMoved(() => { eventFunction(); });
            break;
        case 'DRAGGED':
            p5Element.mouseDragged(() => { eventFunction(); });
            break;
        case 'MOUSE_PRESSED':
            p5Element.mousePressed(() => { eventFunction(); });
            break;
        case 'MOUSE_RELEASED':
            p5Element.mouseReleased(() => { eventFunction(); });
            break;
        case 'MOUSE_OVER':
            p5Element.mouseOver(() => { eventFunction(); });
            break;
        case 'MOUSE_OUT':
            p5Element.mouseOut(() => { eventFunction(); });
            break;
        case 'SCROLLED':
            p5Element.mouseWheel(() => { eventFunction(); });
            break;
        case 'KEY_PRESSED':
            p5Element.keyPressed(() => { eventFunction(); });
            break;
        case 'KEY_RELEASED':
            p5Element.keyReleased(() => { eventFunction(); });
            break;
        case 'KEY_TYPED':
            p5Element.keyTyped(() => { eventFunction(); });
            break;
        default:
            console.error("Tipo de evento no reconocido");
            break;
    }
}
