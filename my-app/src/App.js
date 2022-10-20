import { useState, useEffect } from 'react';
import todos from './apis/index';

// components
import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await todos.get('/todos');
      setTodoList(data);
    };

    fetchData();
  }, []);

  const addTodo = async (item) => {
    const { data } = await todos.post('/todos', item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const deleteTodo = async (id) => {
    if (!todoList || todoList.length <= 0) {
      return;
    }

    await todos.delete(`/todos/${id}`);

    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  return (
    <div className="ui container center aligned">
      <Section>
        <h1>To-Do App</h1>
      </Section>
      <Section>
        <Form add={addTodo} />
      </Section>

      <section>
        <List list={todoList} deleteTodo={deleteTodo} editTodo={editTodo} />
      </section>
    </div>
  );
}

export default App;
