class CustomCheckbox {
  constructor(id, x, y, width, height, label, checked, customClass, labelClass, parentGroupClass) {
    // Creamos el box usando p5.js
    if(checked && label != null) {
      this.box = createCheckbox(label, true);
    } else if (checked && label == null) {
      this.box = createCheckbox(null, true);
    } else if(!checked && label != null) {
      this.box = createCheckbox(label);
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

    if(parentGroupClass != null) {
      this.box.addClass(parentGroupClass);
    }
    
    if(labelClass != null && label != null) {
      this.box.child()[1].classList.add(labelClass);
    }
    
    if(customClass != null) {
      this.box.child()[0].classList.add(customClass);
    }

    this.box.changed(() => {
      this.box.checked() ? this.box.attribute('checked', 'checked') : this.box.removeAttribute('checked');
    });
  }
}
