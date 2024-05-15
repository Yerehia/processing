class CustomDiv {
  constructor(id, x, y, width, height, customClass, parent) {
    // Creamos un div usando p5.js
    this.div = createDiv('');
    this.div.id(id);
    if(parent != null) {
        this.div.parent(parent);

        // Si tiene padre y se especifica solo ancho o alto, tomamos el otro valor heredado del padre
        if(height != null) {
            this.div.size(parent.width, height)
        }

        if(width != null) {
            this.div.size(width, parent.height)
        }

//        if(height == null && width == null) {
//            this.div.size(parent.width, parent.height)
//        }
    }

    if(width != null && height != null) {
        this.div.size(width, height);
    }

    if(customClass != null) {
        this.div.addClass(customClass);
    }

    if(x != null && y != null) {
        this.div.position(x, y);
    } else {
        this.div.style('position', '');
        this.div.style('left', '');
        this.div.style('top', '');
    }

  }

  // Método para agregar contenido al div (texto, HTML o elemento DOM)
  addContent(content) {
      this.div.child(content);
      content.parent(this.div)
  }
}
