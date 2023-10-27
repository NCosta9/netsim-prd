import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Cobertura.css";


export default function Cobertura() {
  const { register, getValues } = useForm();
  const navigate = useNavigate();

  return (
    <>


      <div className="container my-5">
      <h1 className="display-4 fw-bold lh-1 mb-0">Bem Vindo a nossa área de cobertura Netsim</h1>
          <p className="lead mt-0 mb-0">
            Precisamos identificar qual o bairro que você mora para conseguirmos te atender com a melhor tecnologia disponível de acordo com sua localidade.
          </p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-5 align-items-center">
         

          <div className="col-10 col-sm-8 col-lg-6 ">
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

          <div className="col col-sm-8 col-lg-6 ">
            <img src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/posts/mobile-03.png" class="img-fluid p-5 d-none d-sm-block" width="750" height="750"/>
          </div>
        </div>
      </div>

    </>
  );
}