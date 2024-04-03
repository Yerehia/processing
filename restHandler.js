class RestHandler {
  static handleRequest(operation, url, data, callback) {
    switch (operation) {
      case 'GET':
        RestHandler.getRequest(url, callback);
        break;
      case 'POST':
        RestHandler.postRequest(url, data, callback);
        break;
      case 'PUT':
        RestHandler.putRequest(url, data, callback);
        break;
      case 'DELETE':
        RestHandler.deleteRequest(url, callback);
        break;
      default:
        callback(new Error('Operación no válida'), null);
        break;
    }
  }

  static getRequest(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(null, data));
  }

  static postRequest(url, data, callback) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
  }

  static putRequest(url, data, callback) {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
  }

  static deleteRequest(url, callback) {
    fetch(url, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
  }
}
