import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ButtonFinalizar from "../../../components/Forms/ButtonFinalizar";
import TemplatePonto from "../../../components/TemplateEmail/TemplatePonto";



export default function FormPonto( props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// esta sentado as propriedade do MODAL  que esta no fim desse codigo

  const {register, handleSubmit, getValues} = useForm();

  const formValues = getValues();
const nome= `${formValues.NOME}`;
const cpf = `${formValues.CPF}`;
const email = `${formValues.Email}`;
const cep = `${formValues.CEP}`;
const bairro = `${formValues.Bairro}`;
const endereco = `${formValues.Endereco}`;
const whatsapp= `${formValues.Whatsapp01}`;
const data = `${formValues.data}`;
const horario = ` ${formValues.hora}`;
const obs =  `${formValues.observacao}`;

//Envia todos os dados do formulario por meio de uma url do whatsapp
  function linkWhatsapp(e){
    e.preventDefault();
    let urlValues = getValues();
    let url = "https://api.whatsapp.com/send?phone=556120993434&text=";
    let end_url =`
    ${url}Eu ${urlValues.NOME} de CPF ${urlValues.CPF} acabei de solicitar através do site uma mudança de ponto dos meus equipamentos de internet. E tenho total ciência do custo de 29,90. 
    `; 
  window.open(end_url)
 
  };

//Envia todos os dados do fomulario no email da empresa suporte@netsimtelecom e uma copia do email na caixa de entrada do financeiro@netsimtelecom via emailjs.com.
//
function sendEmail(e) {
e.preventDefault();
        
<TemplatePonto 

title = 'mudança de ponto' 
assunto= 'SOLICITAÇÃO RECEBIDA' 
nome= {nome} 
cpf = {cpf} 
email = {email} 
cep = {cep}
bairro = {bairro}
endereco = {endereco}
whatsapp = {whatsapp}
data = {data}
horario = {horario}
obs = {obs}

/>

};


const termos =
 <p>
          O serviço de mudança de Ponto tem um custo de R$ 29,90, que virá junto com a próxima fatura em aberto, ou seja, no ato do serviço não precisa ser pago nada para nossos técnicos, será gerado e enviado o boleto para o contato que solicitou o serviço.<br/><br/>
          (1) No dia da mudança nossos técnicos entrarão em contato para confirmar o horário exato da mudança da.<br/><br/>
          (2) Você recebera no e-mail adicionado uma notificação com todos os dados enviados e uma explicação de como funcionará mudança de ponto da Netsim telecom!<br/><br/>
          (3) Todos os dados estão protegidos e são de inteira responsabilidade da Netsim Telecom.
 </p> 
;



 
  
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
            Nesse email você recebera uma mensagem com as informações da solicitação.{" "}
          </div>
        </div>
{/* ################### Etapa 02 ################################### */}
        <h4>Endereço - 2 Etapa</h4>
        <span className="divider-orange mb-3" />

      
        <div className="col-md-4 mb-3 form-floating">
          <input
            type="text"
            id="date"
            className="form-control shadow-sm"
            {...register("CEP", { required: true })}
          />
          <label className="fw-bold">CEP:</label>
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
            <option value="Chácara Final Feliz" >Chácara São José</option>
            <option value="Chácara Rossio " >Chácara Rossio </option>
            <option value="Condomínio São José" >Condomínio São José</option>
            <option value="Dom Francisco" >Dom Francisco</option>
            <option value="Dom Pedro" >Dom Pedro</option>
            <option value="Salomão Elias" >Salomão Elias</option>
            <option value="São Francisco" >São Francisco</option>
            <option value="São Francisco" >Guarapari</option>
            <option value="Zona Rural Aguas Quentes" >Zona Rural Aguas Quentes</option>
          </select>
        </div>

        <div className="col-md-4 mb-3 form-floating">
          <input
            type="text"
            className="form-control shadow-sm"
            {...register("Endereco", { required: true })}
          />
          <label className="fw-bold">Endereço completo:</label>
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

     
        
        <ButtonFinalizar event={handleSubmit(handleShow)} text='Finalizar'/>


        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title> 
            <h4 className="mt-2 fw-bold">Termos e condições</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 

              {termos}

        </Modal.Body>
        <Modal.Footer>

          <ButtonFinalizar event={linkWhatsapp} event01={sendEmail} text='Aceitar'/>
         
        </Modal.Footer>
      </Modal>
      </form>

    </div>
  );
}
