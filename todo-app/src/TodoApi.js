class TodoApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl || 'http://localhost:3999';
  }

  sendJson(endpoint, json) {
    return fetch(`${this.apiUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    }).then(res => res.json());
  }

  getListData() {
    return fetch(`${this.apiUrl}/todo`).then(res => {
      return res.json();
    });
  }

  addListItem(item) {
    return this.sendJson('todo/add', item);
  }

  removeListItem(id) {
    return fetch(`http://localhost:3999/todo/remove/${id}`, {
      method: 'POST',
    }).then(res => {
      return res.json().then(json => {
        console.log(json); 
        return json.todoList;
      });
    });
  }
}

export default TodoApi;
