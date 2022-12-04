import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Cobertura.css";
export default function Cobertura() {
    const { register, getValues } = useForm();
    const navigate = useNavigate();

  return (
    <>
      <select {...register("cidade")}>
        <option value="0">Teste</option>
              <option value="1" >Teste1</option>
          </select>
          
          <button type="submit" onClick={() => {
              const values = getValues()
              console.log(values)
              if (values.cidade === "1") {
                navigate("/lite")
              } else {
                  navigate("/fibra")
              }
        }}>Enviar</button>
    </>
  );
}
