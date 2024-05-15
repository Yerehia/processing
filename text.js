class CustomText {
  constructor(id, x, y, text, href, target, customClass) {
    // Si href no está definido, creamos un txto de texto simple en lugar de un enlace <a>
    if (typeof href == null) {
      this.txt = createP(text);
    } else {
      // Creamos el txto <a> usando p5.js
      this.txt = createA(href, text);

      // Si se proporciona el atributo target, lo establecemos
      if (typeof target != null) {
        this.txt.attribute('target', target);
      }
    }

    // Establecemos el id del txto
    this.txt.id(id);

    // Establecemos la posición si se proporciona
    if (x != null && y != null) {
      this.txt.position(x, y);
    } else {
      this.txt.style('position', '');
      this.txt.style('left', '');
      this.txt.style('top', '');
    }

    // Establecemos la clase personalizada
    this.txt.addClass(customClass);
  }

  // Método para establecer el contenido del txto (texto o HTML)
  setContent(content) {
    // Si el contenido es una cadena de texto, lo establecemos como texto del txto
    if (typeof content === 'string') {
      this.txt.html(content);
    } else {
      // Si el contenido es HTML, lo establecemos como HTML del txto
      this.txt.html('');
      this.txt.child(content);
    }
  }
}
