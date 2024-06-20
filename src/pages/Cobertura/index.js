import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Cobertura.css";


export default function Cobertura() {
  const { register, getValues } = useForm();
  const navigate = useNavigate();

  return (
    <>

      <div className="bg-max">
        <div className="bg-home h-100">
          <div className="container justify-content-center">

            <div className="row row-cols-1 row-cols-lg-2 align-items-center pt-5">
            <div className="col col-sm-8 col-lg-6 p-5">
                <h1 className="display-4 fw-bold lh-1 mb-0">Bem Vindo a nossa área de cobertura Netsim</h1>
                <p className="lead mt-0 mb-0">
                  Precisamos identificar qual o bairro que você mora para conseguirmos te atender com a melhor tecnologia disponível de acordo com sua localidade.
                </p>
              </div>

              <div className="col-10 col-sm-8 col-lg-5 ms-4">
                <select className="form-select form-select-lg " aria-label=".form-select-lg example" {...register("cidade")} autofocus>
                  <option value="0" selected disabled> Escolha seu bairro aqui:</option>
                  <option value="1" >Nova Betânia</option>
                  <option value="1" >Buritis 01</option>
                  <option value="1" >Buritis 02</option>
                  <option value="1" >Chácara Final Feliz</option>
                  <option value="1" >Chácara São José</option>
                  <option value="1" >Chácara Rossio </option>
                  <option value="1" >Condomínio São José</option>
                  <option value="1" >Dom Francisco</option>
                  <option value="1" >Dom Pedro</option>
                  <option value="1" >Salomão Elias</option>
                  <option value="1" >São Francisco</option>
                  <option value="1" >Guarapari</option>
                  <option value="1" >Galiléia</option>
                  <option value="2" >Zona Rural de Aguas Quentes</option>
                </select>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">

                  <button
                    className="btn btn-primary btn-lg px-4 me-md-2 fw-bold "
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
                          window.open('https://api.whatsapp.com/send/?phone=556120993434&text=Ol%C3%A1+%2ANetsim%2A%21+Gostaria+de+saber+se+tem+possibilidade+de+instalação+na+minha+localização+%3F(site+área+de+cobertura)&type=phone_number&app_absent=0', '_blank');
                        }
                    }}> Ver Planos </button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4 mb-0" onClick={() => navigate("/")}>Voltar para Home</button>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div >



    </>
  );
}