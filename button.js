class CustomButton {
  constructor(x, y, width, height, label, customClass, clickAction) {
    // Creamos el botón usando p5.js
    this.btn = createButton('');

    if(x != null && y != null) {
        this.btn.position(x, y);
    } else {
        this.btn.style('position', '');
        this.btn.style('left', '');
        this.btn.style('top', '');
    }
    if(width != null && height != null) {
        this.btn.size(width, height);
    }

    this.btn.addClass(customClass);

    // Asignamos el manejador de eventos de click al botón
    this.btn.mousePressed(() => {
      if (clickAction) {
        clickAction(); // Ejecutamos la función personalizada
      }
    });

    // Establecemos el contenido del botón (texto o HTML)
    this.setContent(label);
  }

  // Método para establecer el contenido del botón (texto o HTML)
  setContent(content) {
    // Si el contenido es una cadena de texto, lo establecemos como texto del botón
    if (typeof content === 'string') {
      this.btn.html(content);
    } else {
      // Si el contenido es HTML, lo establecemos como HTML del botón
      this.btn.html('');
      this.btn.child(content);
    }
  }
}
