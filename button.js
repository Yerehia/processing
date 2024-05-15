class CustomButton {
  constructor(id, x, y, width, height, label, customClass) {
    // Creamos el botón usando p5.js
    this.btn = createButton('');
    this.btn.id(id);

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
