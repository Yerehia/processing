class CustomLabel {
  constructor(id, x, y, width, height, text, reference, customClass) {
    // Creamos el lbl usando p5.js
    this.lbl = createElement('label', text);
    this.lbl.id(id);

    // Establecemos la posición y el tamaño del lbl
    if (x != null && y != null) {
      this.lbl.position(x, y);
    } else {
      this.lbl.style('position', '');
      this.lbl.style('left', '');
      this.lbl.style('top', '');
    }
    if(width != null && height != null) {
        this.btn.size(width, height);
    }

    // Establecemos el placeholder del lbl
    if (reference != null) {
      this.lbl.attribute('for', reference);
    }

    // Aplicamos la clase personalizada
    this.lbl.addClass(customClass);
  }

  // Método para establecer la clase personalizada
  setCustomClass(customClass) {
    this.lbl.removeClass();
    this.lbl.addClass(customClass);
  }
}
