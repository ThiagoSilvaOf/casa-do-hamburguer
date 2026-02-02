import React from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [cep, setCep] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Nome:", name);
    console.log("E-mail:", email);
    console.log("Senha:", password);
    console.log("Confirmação de Senha:", confirmPassword);
    console.log("CEP:", cep);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="Logo" className="mb-4 cursor-pointer" />
        </Link>
        <Input
          placeholder="Nome Completo"
          type="text"
          value={name}
          autoComplete="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Input
          placeholder="Confirme sua senha"
          type="password"
          value={confirmPassword}
          autoComplete="current-password"
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          value={cep}
          autoComplete="postal-code"
          onChange={(e) => setCep(e.currentTarget.value)}
        />
        <Button title="Criar conta" />
        <Link to="/login" className="w-full">
          <Button title="Já tenho conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
