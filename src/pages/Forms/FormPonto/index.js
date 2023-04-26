import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ButtonFinalizar from "../../../components/Forms/ButtonFinalizar";

import SendDadosService from "../../../utils/SendDadosService";



export default function FormPonto( props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// esta sentado as propriedade do MODAL  que esta no fim desse codigo

  const {register, handleSubmit, getValues} = useForm();

//Envia todos os dados do formulario por meio de uma url do whatsapp
const formValues = getValues();
const nome=`${formValues.NOME}` 
const cpf=`${formValues.CPF}`        
const cep=`${formValues.CEP}`           
const bairro=`${formValues.Bairro}` 
const endereco=`${formValues.Endereco}`           
const whatsapp01=`${formValues.Whatsapp01}` 
const email=`${formValues.Email}`           
const data=`${formValues.data}` 
const hora=`${formValues.hora}`
const obs=`${formValues.observacacao}`

//Dados para envio via Email
const assunto = "Mudança de Ponto";
const termos = "Declaro que li e concordo com os termos e condições descritos no site."
const conditions = "CONFIRMO esta etapa de contratação dos serviços da NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ 18.156.287/0001-09 e tenho total ciência do custo de 29,90 adicionado a proxima fatura em aberto e prazo máximo de até 48 horas para realização desse serviço."
const cabecalho = "Ja recebemos a informações para sua "+ assunto + " ,dentro de alguns instantes entraremos em contato com mais informações. Verifique abaixo se os dados estão corretos: ";



 
  
  return (
    <div className="container">
      <div class="bg-light p-5 mt-3 rounded">
        <h1>Mudança de Ponto dos equipamentos internet {props.title}</h1>
        <p class="lead">A mudança de Ponto do equipamentos tem um <b>CUSTO DE R$ 29,90.</b></p><p  class="lead"> 
        Para agilizar o seu pedido, preencha com os dados necessarios.
         Precisamos saber 📋 com precisão se o serviço 🛠️ vai ser feito na mesma casa, o dia que o cliente vai estar disponível para efetuarmos o serviço.
        
        </p>
        <a class="btn btn-lg btn-primary" href="/cliente" role="button">Voltar a página anterior »</a>
      </div>
      <form
        className="row g-3 mt-5"
        name="formDados"
      >
        {/* ################### Etapa 01 ################################### */}

        <h4>Dados pessoais - 1 Etapa</h4>
        <span className="divider-orange mb-3" />

        <div className="mb-3 form-floating">
          <input type="text" className="form-control shadow-sm" {...register("NOME", { required: true })} />
          <label className="fw-bold">Nome completo:</label>
        </div>

        <div className="col-md-4 mb-3 form-floating">
          <input type="cpf" className="form-control shadow-sm" {...register("CPF", { required: true })} />
          <label className="fw-bold">CPF:</label>
        </div>

        <div className="col-md-4 mb-3 form-floating">
          <input
            type="tel"
            className="form-control shadow-sm"
            {...register("Whatsapp01", { required: true })}
          />
          <label className="fw-bold">Whatsapp 01:</label>
        </div>


        <div className="col mb-3 form-floating">
          <input
            type="email"
            id="email"
            className="form-control shadow-sm"
            {...register("Email", { required: true })}
          />
          <label className="fw-bold">E-mail:</label>
          <div className="form-text">
            Nesse email você recebera uma mensagem com mais informações sobre o processo em andamento.
          </div>
        </div>

{/* ################### Etapa 02 ################################### */}
<h4>Dados do Novo Endereço - 2 Etapa</h4>
        <span className="divider-orange mb-3" />

      
        <div className="col-md-4 mb-3 form-floating">
          <input
            type="text"
            id="date"
            className="form-control shadow-sm"
            {...register("CEP", { required: true })}
          />
          <label className="fw-bold">Novo CEP:</label>
        </div>

        <div className="col-md-4 mb-3 form-floating">
          <select
            className="form-select shadow-sm"
            {...register("Bairro", { required: true })}
          >
            <option value="" selected>
              --- Qual o bairro? ---
            </option>
            <option value="Nova Betânia" >Nova Betânia</option>
            <option value="Buritis 01" >Buritis 01</option>
            <option value="Buritis 02" >Buritis 02</option>
            <option value="Chácara Final Feliz" >Chácara Final Feliz</option>
            <option value="Chácara São José" >Chácara São José</option>
            <option value="Chácara Rossio " >Chácara Rossio </option>
            <option value="Condomínio São José" >Condomínio São José</option>
            <option value="Dom Francisco" >Dom Francisco</option>
            <option value="Dom Pedro" >Dom Pedro</option>
            <option value="Salomão Elias" >Salomão Elias</option>
            <option value="São Francisco" >São Francisco</option>
            <option value="Guarapari" >Guarapari</option>
            <option value="Galileia" >Galileia</option>
            <option value="Zona Rural Aguas Quentes" >Zona Rural Aguas Quentes</option>
          </select>
        </div>

        <div className="col-md-4 mb-3 form-floating">
          <input
            type="text"
            className="form-control shadow-sm"
            {...register("Endereco", { required: true })}
          />
          <label className="fw-bold">Novo Endereço completo:</label>
        </div>



{/* ################### Etapa 03 ################################### */}
    

        <h4> Informações da Mudança - 3 Etapa</h4>
        <span className="divider-orange mb-3" />

        <div className="col mb-3 form-floating">
          <input
            type="date"
            id="date"
            className="form-control shadow-sm"
            {...register("data", { required: true })}
          />
          <label className="fw-bold">Data da Mudança:</label>
        </div>

        <div className="container">
          <label className="d-flex fw-bold mb-2">
          Horário da Mudança:
          </label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio1"
              value="Manhã"
              {...register("hora")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Manhã
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio2"
              value="Tarde"
              {...register("hora")}
              
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Tarde
            </label> 
          </div>
        </div>

      

        <div className="col mb-3 form-floating">
          <textarea
            type="textarea"
            id="date"
            className="form-control shadow-sm"
            {...register("observacao")}
          />
          <label className="fw-bold">Observação:</label>
        </div>

     
        
        <button type="button" className="btn btn-lg btn-success mb-4" onClick={handleSubmit(handleShow)}>
          Finalizar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-whatsapp ms-2"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </button>



        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title> 
            <h4 className="mt-2 fw-bold">Termos e condições</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 

              {conditions}

        </Modal.Body>
        <Modal.Footer>

        <SendDadosService
           text="Aceitar"
           nome={nome} 
           cpf={cpf}
           cep={cep}           
           bairro={bairro} 
           endereco={endereco}          
           whatsapp01={whatsapp01}
           email={email}           
           data={data} 
           hora={hora}
           obs={obs} 

          termos = {termos}
          assunto ={assunto}
          cabecalho={cabecalho}

           
    />
         
        </Modal.Footer>
      </Modal>
      </form>

    </div>
  );
}
