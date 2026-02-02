import React from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("E-mail:", email);
    console.log("Senha:", password);
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
        <Button title="Login"/>
        <Link className="w-full" to="/register">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
