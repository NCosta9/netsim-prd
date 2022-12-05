import { Outlet, Link } from "react-router-dom"; import './Cobertura.css';
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function NavList() {

const { register, handleSubmit} = useForm();

  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };


  const onSubmit= (data) => {window.open(data)};

  return (
    <form>
      <select onSubmit={onSubmit}>
        <option>
          <NavLink to="/">
            Messages
          </NavLink>
        </option>
        <option>
          <NavLink to="/fibra"    >
            Tasks
          </NavLink>
        </option>
        <option>
          <NavLink to="/lite">
            Opa
          </NavLink>
        </option>
      </select>

      <button type="submit">enviar</button>

    </form>
  );
}