import { useState } from "react";
import axios from "axios";

export function Create() {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post("https://ironrest.herokuapp.com/crud-intro", form);

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
      <button type="submit">Cadastrar!</button>
    </form>
  );
}
