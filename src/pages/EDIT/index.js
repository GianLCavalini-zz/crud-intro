import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Edit() {
  const params = useParams();
  const [form, setForm] = useState({
    name: "",
    nickname: "",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/crud-intro/${params.userId}`
      );
      console.log(response.data);
      setForm({ ...response.data });
    }
    fetchData();
  }, [params.userId]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const editObject = { ...form };

    delete editObject._id;

    axios.put(
      `https://ironrest.herokuapp.com/crud-intro/${params.userId}`,
      editObject
    );

    setForm({
      name: "",
      nickname: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputName">Nome</label>
      <input
        id="inputName"
        value={form.name}
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="inputNickName">Nick</label>
      <input
        id="inputNickName"
        value={form.nickname}
        name="nickname"
        onChange={handleChange}
      />
      <button type="submit">Editar!</button>
    </form>
  );
}
