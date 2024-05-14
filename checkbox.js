class CustomCheckbox {
  constructor(x, y, width, height, label, customClass) {
    // Creamos el box usando p5.js
    if(label != null) {
      this.box = createCheckbox(label);
    } else {
      this.box = createCheckbox();
    }

    // Establecemos la posición y el tamaño del box
    if (x != null && y != null) {
      this.box.position(x, y);
    } else {
      this.box.style('position', '');
      this.box.style('left', '');
      this.box.style('top', '');
    }
    if (width != null && height != null) {
      this.box.size(width, height);
    }

    // Aplicamos la clase personalizada
    this.box.addClass(customClass);

    this.box.changed(() => {
      this.box.checked() ? this.box.attribute('checked', 'checked') : this.box.removeAttribute('checked');
    });
  }
}
