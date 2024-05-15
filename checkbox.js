class CustomCheckbox {
  constructor(id, x, y, width, height, checked, customClass) {
    // Creamos el box usando p5.js
    if(checked) {
      this.box = createCheckbox(null, true);
    } else {
      this.box = createCheckbox();
    }
    this.box.id(id);

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


    // Aplicamos las clases personalizadas
    if(parentGroupClass != null) {
      this.box.addClass(parentGroupClass);
    }

    if(customClass != null) {
      this.box.child()[0].classList.add(customClass);
    }

    this.box.changed(() => {
      this.box.checked() ? this.box.attribute('checked', 'checked') : this.box.removeAttribute('checked');
    });
  }
}