class CustomInput {
  constructor(id, x, y, width, height, placeholder, name, value, type, customClass) {
    // Creamos el inp usando p5.js
    this.inp = createInput();
    this.inp.id(id);

    // Establecemos la posición y el tamaño del inp
    if (x != null && y != null) {
      this.inp.position(x, y);
    } else {
      this.inp.style('position', '');
      this.inp.style('left', '');
      this.inp.style('top', '');
    }
    if(width != null && height != null) {
        this.inp.size(width, height);
    }

    // Establecemos el placeholder del inp
    if (placeholder != null) {
      this.inp.attribute('placeholder', placeholder);
    }

    // Establecemos el name del inp
    if (name != null) {
      this.inp.attribute('name', name);
    }

    // Establecemos el value del inp
    if (value != null) {
      this.inp.attribute('value', value);
    }

    // Establecemos un type al input. Por defecto es text.
    if (type != null) {
      this.inp.attribute('type', type);
    }

    // Aplicamos la clase personalizada
    this.inp.addClass(customClass);
  }

  // Método para establecer la clase personalizada
  setCustomClass(customClass) {
    this.inp.removeClass();
    this.inp.addClass(customClass);
  }

  // Método para establecer el valor del inp
  setValue(value) {
    this.inp.value(value);
  }

  // Método para obtener el valor del inp
  getValue() {
    return this.inp.value();
  }
}
