class CustomSelect {
  constructor(x, y, width, heigh, options, customClass) {
    // Creamos el stc usando p5.js
    this.stc = createSelect();

    // Establecemos la posición y el tamaño del stc
    if (x != null && y != null) {
      this.stc.position(x, y);
    } else {
      this.stc.style('position', '');
      this.stc.style('left', '');
      this.stc.style('top', '');
    }
    
    if(width != null && height != null) {
        this.btn.size(width, height);
    }

    // Agregamos opciones al stc
    for (let option of options) {
      this.stc.option(option);
    }

    // Aplicamos la clase personalizada
    this.stc.addClass(customClass);
  }

  // Método para establecer la clase personalizada
  setCustomClass(customClass) {
    this.stc.removeClass();
    this.stc.addClass(customClass);
  }

  // Método para establecer el valor seleccionado del stc
  setSelected(value) {
    this.stc.value(value);
  }

  // Método para obtener el valor seleccionado del stc
  getSelected() {
    return this.stc.value();
  }
}