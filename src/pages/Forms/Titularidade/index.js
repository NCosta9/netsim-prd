import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import SendDadosPlanos from "../../../utils/SendDadosPlanos";


export default function Titulariade() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// esta sentado as propriedade do MODAL  que esta no fim desse codigo

const { register,handleSubmit, getValues} = useForm();

//Dados dar envio via url Whatsapp
const formValues = getValues();
const nome=`${formValues.NOME}` 
const cpf=`${formValues.CPF}`        
const rg=`${formValues.RG}` 
const cep=`${formValues.CEP}`           
const bairro=`${formValues.BAIRRO}` 
const endereco=`${formValues.ENDERECO}`           
const moradia=`${formValues.MORADIA}` 
const whatsapp01=`${formValues.WHATASAPP01}` 
const whatsapp02=`${formValues.WHATASAPP02}` 
const email=`${formValues.EMAIL}`           
const plano=`${formValues.PLANOS}`          
const fixo=`${formValues.FIXO}`          
const vencimento=`${formValues.VENCIMENTO}`
const indicacao=`${formValues.INDICACAO}`         
const data=`${formValues.DATA}` 
const hora=`${formValues.HORA}`
const obs=`${formValues.OBS}`
//const premium =`${formValues.AppStandard}`
//const standard = `${formValues.AppPremium}`

//Dados para envio via Email
const termos = "(1) Declaro que li e concordo com os termos e condições.(2) Tenho total ciência do custo de R$ 49,90 para ser realizado esta mudança de endereço."
const assunto = "Mudança de Titularidade";
const cabecalho = "Ja recebemos a sua solicitação de mudança de endereço dos equipamentos de internet, dentro de alguns minutos informaremos sobre sua instalação. No dia da mudança nossos tecnicos entrara em contato para confirmar o horario exato da mudança de endereço.  Verifique abaixo se as informações estão corretas: ";


  return (
    <div className="container">
      <div class="bg-light p-5 mt-3 rounded">
        <h1>Bem Vindo a Página de Mudança de Endereço</h1>
        <p class="lead">A mudança de endereço tem um <b>CUSTO DE R$ 49,90.</b></p><p  class="lead 
        "> Para realizarmos sua mudança, preencha com os dados necessarios para solicitar a sua mudança de endereço. No final você recebera um email informando os detalhes da sua solicitação</p>
        <a class="btn btn-lg btn-primary" href="/cliente" role="button">Voltar a página anterior »</a>
      </div>
      <form
        className="row g-3 mt-5"
        name="formDados"
      >
        {/* ################### Etapa 01 ################################### */}

        <h4>Dados Atuais - 1 Etapa</h4>
        <span className="divider-orange mb-3" />

        <div className="mb-3 form-floating">
          <input type="text" className="form-control shadow-sm" {...register("NOME", { required: true })} />
          <label className="fw-bold">Nome completo:</label>
        </div>

        <div className="col-md-4 mb-3 form-floating">
          <input type="cpf" className="form-control shadow-sm" {...register("CPF", { required: true })} />
          <label className="fw-bold">CPF:</label>
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
            Nesse email você recebera uma mensagem com as informações da solicitação.{" "}
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
              --- Qual o novo bairro? ---
            </option>
            <option value="Nova Betânia" >Nova Betânia</option>
            <option value="Buritis 01" >Buritis 01</option>
            <option value="Buritis 02" >Buritis 02</option>
            <option value="Chácara Final Feliz" >Chácara Final Feliz</option>
            <option value="Chácara Rossio " >Chácara Rossio </option>
            <option value="Condomínio São José" >Condomínio São José</option>
            <option value="Dom Francisco" >Dom Francisco</option>
            <option value="Dom Pedro" >Dom Pedro</option>
            <option value="Salomão Elias" >Salomão Elias</option>
            <option value="São Francisco" >São Francisco</option>
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

        <h4> Informações da Mudança de Endereço - 3 Etapa</h4>
        <span className="divider-orange mb-3" />

        <div className="col mb-3 form-floating">
          <input
            type="date"
            id="date"
            className="form-control shadow-sm"
            {...register("data", { required: true })}
          />
          <label className="fw-bold">Data de Nascimento:</label>
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
          <input
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
          CONFIRMO está etapa de contratação do serviço de mudança de endereço e tenho total ciência do custo de R$ 49,90 para ser realizado.<br/><br/>
          No dia da mudança nossos técnicos entrarão em contato para confirmar o horário exato da mudança de endereço.<br/><br/>
          Você recebera no e-mail adicionado uma notificação com todos os dados enviados e uma explicação de como funciona as mudanças de Endereço da Netsim telecom!<br/><br/>
          Todos os dados estão protegidos e são de inteira responsabilidade da Netsim Telecom.
        </Modal.Body>
        <Modal.Footer>
        <SendDadosPlanos
           nome={nome} 
           cpf={cpf}        
           rg={rg} 
           cep={cep}           
           bairro={bairro} 
           endereco={endereco}           
           moradia={moradia} 
           whatsapp01={whatsapp01}
           whatsapp02={whatsapp02} 
           email={email}           
           plano={plano}          
           fixo={fixo}          
           vencimento={vencimento}
           indicacao={indicacao}         
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
