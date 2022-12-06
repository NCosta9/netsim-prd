import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Cobertura.css";

import coberturaImage from "../../img/cobertura-image.jpg"
export default function Cobertura() {
  const { register, getValues } = useForm();
  const navigate = useNavigate();

  return (
    <>


      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Bem Vindo a nossa área de cobertura Netsim</h1>
            <p className="lead">
              Precisamos identificar qual o bairro que você mora para conseguirmos te atender com a melhor tecnologia disponivél de acordo com sua localidade.
            </p>


            <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example" {...register("cidade")} autofocus>
            <option selected>-- Escolha aqui o bairro --</option>
              <option value="0" >Nova Betânia</option>
              <option value="1" >Buritis 01</option>
              <option value="1" >Buritis 02</option>
              <option value="1" >Chácara Final Feliz</option>
              <option value="1" >Chácara Rossio </option>
              <option value="1" >Condomínio São José</option>
              <option value="0" >Dom Francisco</option>
              <option value="0" >Dom Pedro</option>
              <option value="1" >Salomão Elias</option>
              <option value="1" >São Francisco</option>
              <option value="0" >Zona Rural Aguas Quentes</option>
            </select>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

              <button
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                type="submit"
                onClick={() => {
                  const values = getValues()
                  console.log(values)
                  if (values.cidade === "1") {
                    navigate("/fibra")
                  }
                   else {
                    navigate("/radio")
                  }
                }}> Ver Planos </button>


              <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={() => navigate("/")}>Voltar para Home</button>

            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={coberturaImage} alt="" width="300" />
          </div>
        </div>
      </div>

    </>
  );
}