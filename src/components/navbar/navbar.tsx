"use client";
import Link from "next/link";
import { FC } from "react";
import { Input } from "../ui/input";

const Navbar: FC = () => {
  return (
    <nav className="bg-color3 h-14 text-white flex items-center justify-between w-full px-10">
      <div>
        <p>Electronica cellphone</p>
      </div>

      <div>
        <ul className="flex gap-10">
          <Link href={"/"}>
            <li>Inicio</li>
          </Link>
          <Link href={"/login"}>
            <li>Iniciar sesión</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
