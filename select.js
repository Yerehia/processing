class CustomSelect {
  constructor(x, y, width, options, customClass) {
    // Creamos el select usando p5.js
    this.select = createSelect();

    // Establecemos la posición y el tamaño del select
    if (x != null && y != null) {
      this.select.position(x, y);
    } else {
      this.select.style('position', '');
      this.select.style('left', '');
      this.select.style('top', '');
    }
    if (width != null) {
      this.select.size(width);
    }

    console.log(options);
    // Agregamos opciones al select
    for (let option of options) {
      this.select.option(option);
    }

    // Aplicamos la clase personalizada
    this.select.addClass(customClass);
  }

  // Método para establecer la clase personalizada
  setCustomClass(customClass) {
    this.select.removeClass();
    this.select.addClass(customClass);
  }

  // Método para establecer el valor seleccionado del select
  setSelected(value) {
    this.select.value(value);
  }

  // Método para obtener el valor seleccionado del select
  getSelected() {
    return this.select.value();
  }
}
