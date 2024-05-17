class CustomList {
  constructor(id, x, y, items, customClass) {
    // Creamos el elemento <ul> usando p5.js
    this.lst = createElement('ul');

    // Establecemos el id del elemento
    this.lst.id(id);

    // Establecemos la posición si se proporciona
    if (x != null && y != null) {
      this.lst.position(x, y);
    } else {
      this.lst.style('position', '');
      this.lst.style('left', '');
      this.lst.style('top', '');
    }

    // Establecemos la clase personalizada
    this.lst.addClass(customClass);

    // Añadimos los elementos de la lsta
    items.forEach(item => {
      addItem(item);
    });
  }

  addItem(item) {
    items.forEach(item => {
      let li = createElement('li', item);
      this.lst.child(li);
    });
  }
}
