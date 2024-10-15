import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div className="bg-color4 w-[400px] h-auto flex flex-col justify-center text-center p-6 text-white text-xl rounded-md">
      <p>Inicio de sesión</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          id="email"
          className="text-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />

        <Input
          id="password"
          type="password"
          value={password}
          className="text-md"
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Contraseña"
        />
        <Button
          type="submit"
          className="bg-accent text-accent-foreground hover:text-white transition-colors duration-1000 ease-in-out"
        >
          Iniciar sesión
        </Button>
      </form>
    </div>
  );
};

export default Login;
