import React, { useState } from "react";

import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const response = await api.post("/sessions", { email });
    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  return (
    <>
      {/* prettier-ignore */}
      <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
}
