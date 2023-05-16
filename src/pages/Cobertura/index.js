import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Cobertura.css";

import coberturaImage from "../../img/cobertura-image.png"

export default function Cobertura() {
  const { register, getValues } = useForm();
  const navigate = useNavigate();

  return (
    <>


      <div className="container my-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-4 my-5 shadow-lg">
          <h1 className="display-4 fw-bold lh-1 mb-0">Bem Vindo a nossa área de cobertura Netsim</h1>
          <p className="lead mt-0 mb-0">
            Precisamos identificar qual o bairro que você mora para conseguirmos te atender com a melhor tecnologia disponível de acordo com sua localidade.
          </p>

          <div className="col-10 col-sm-8 col-lg-6 mt-1">
            <select className="form-select form-select-lg mb-3 " size="15" aria-label=".form-select-lg example" {...register("cidade")} autofocus>
              <option value="0" selected disabled>Escolha seu bairro:</option>
              <option value="1" >Nova Betânia</option>
              <option value="2" >Buritis 01</option>
              <option value="1" >Buritis 02</option>
              <option value="1" >Chácara Final Feliz</option>
              <option value="1" >Chácara São José</option>
              <option value="1" >Chácara Rossio </option>
              <option value="1" >Condomínio São José</option>
              <option value="2" >Dom Francisco</option>
              <option value="2" >Dom Pedro</option>
              <option value="1" >Salomão Elias</option>
              <option value="1" >São Francisco</option>
              <option value="1" >Guarapari</option>
              <option value="2" >Galiléia</option>
              <option value="2" >Zona Rural de Aguas Quentes</option>
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
                  } if (values.cidade === "0") {
                    navigate("/cobertura")
                  }
                  else
                    if (values.cidade === "2") {
                      navigate("/radio")
                    }
                }}> Ver Planos </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4 mb-0" onClick={() => navigate("/")}>Voltar para Home</button>
            </div>
          </div>

          <div className="col-10 col-sm-8 col-lg-6 mt-0">
            <img src={coberturaImage} class="d-block mx-lg-auto img-fluid" width="1080" height="1080" loading="lazy" />
          </div>
        </div>
      </div>

    </>
  );
}