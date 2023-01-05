import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Inter() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { register,handleSubmit, getValues} = useForm();


  function linkWhatsapp(e){
    e.preventDefault();
    let urlValues = getValues();
    let url = "https://api.whatsapp.com/send?phone=556120993434&text=";
    let end_url =`
    ${url}Eu ${urlValues.NOME} de CPF ${urlValues.CPF} já enviei os dados para assinatura do ${urlValues.PLANO} .Declaro que li e concordo com os termos e condições de serviços da contratada NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ 18.156.287/0001-09. %0A 
    `; 
  window.open(end_url)
 
  };


  function sendEmail(e) {
        
    e.preventDefault();
      const formValues = getValues();
      const title = "NOVA ASSINATURA DE INTERNET"
      const nome_cliente = `${formValues.NOME}`
      const cliente_mail = `${formValues.Email}`
      const userData = `
          Eu ${formValues.NOME} de CPF/CNPJ ${formValues.CPF},contrato o ${formValues.PLANO} e CONFIRMO esta etapa de contratação dos serviços da contratada NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ 18.156.287/0001-09 e tenho total ciência do contrato de fidelidade de 12 meses deixando a taxa de adesão de R$ 500,00 isenta que não será cobrada mediante a fidelidade, e estou ciente que a empresa tem um prazo para instalação de até 48H. Meu CPF poderá passar por uma análise antes da aprovação do contrato. Todos os dados fornecidos estão seguros e são de inteira responsabilidade da Netsim Telecom.
  
          Dados para o cadastro:
  
          Nome Completo: ${formValues.NOME},
          CPF: ${formValues.CPF},
          RG: ${formValues.RG},
          Data de Nascimento: ${formValues.NASCIMENTO},
          Cep: ${formValues.CEP},
          Bairro: ${formValues.Bairro},
          Endereço Completo: ${formValues.Endereco},
          Moradia: ${formValues.Moradia},
          Whatsapp01: ${formValues.Whatsapp01},
          Whatsapp02: ${formValues.Whatsapp02},
          Email: ${formValues.Email},
          Plano Contratado: ${formValues.PLANO},
          Telefone Fixo Netsim: ${formValues.Fixo},
          Data de Vencimento: ${formValues.Vencimento},
          Nome Completo da Indicação: ${formValues.Indicacao},
          AppStandard: ${formValues.AppStandard},
          AppPremium: ${formValues.AppPremium},
      `;
  
      console.log(userData);
  
      const templateParams = {
        message: userData,
        title_mail:title,
      };
      const templateParamsCliente = {
        message: userData,
        cliente:nome_cliente,
        cliente_mail: cliente_mail,
      };
  
      console.log(templateParams);
  
      emailjs
        .send(
          "service_au350rb",
          "template_oh38moq",
          templateParams,
          "lTUpdEC1irtwxkpEq"
        )
        .then(
          (response) => {
            console.log("DADOS ENVIADO COM SUCCESSO!", response.status, response.text);   
            
          },
          (error) => {
            console.log("NÃO FOI POSSIVEL ENVIAR RECEBER OS DADOS...", error);
            
          }
        );
        
        emailjs
        .send(
          "service_au350rb",
          "template_xqy15f2",
          templateParamsCliente,
          "lTUpdEC1irtwxkpEq"
        )
        .then(
          (response) => {
            console.log("DADOS ENVIADO COM SUCCESSO!", response.status, response.text);   
            
          },
          (error) => {
            console.log("NÃO FOI POSSIVEL ENVIAR RECEBER OS DADOS...", error);
            
          }
        );
  console.log(sendEmail);
  };
  



  return (
    <div className="container">
      <div class="bg-light p-5 mt-3 rounded">
        <h1>Bem Vindo a Página de Cadastro</h1>
        <p class="lead">Preencha com os dados necessarios para finalização da sua assinatura de internet</p>
        <a class="btn btn-lg btn-primary" href="/fibra" role="button">Voltar a página anterior »</a>
      </div>
      <form
        className="row g-3 mt-5"
        id="formDados"
        onSubmit={handleSubmit(sendEmail)}
        onSubmitCapture={handleSubmit(linkWhatsapp)}

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
          <input type="RG" className="form-control shadow-sm" {...register("RG", { required: true })} />
          <label className="fw-bold">RG:</label>
        </div>
        <div className="col-md-4 mb-3 form-floating">
          <input
            type="date"
            id="date"
            className="form-control shadow-sm"
            {...register("NASCIMENTO", { required: true })}
          />
          <label className="fw-bold">Data de Nascimento:</label>
        </div>
        <div className="col-md-4 mb-3 form-floating">
          <input
            type="text"
            id="date"
            className="form-control shadow-sm"
            {...register("CEP", { required: true })}
          />
          <label className="fw-bold">CEP:</label>
        </div>
        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            {...register("Bairro", { required: true })}
          >
            <option value="" selected>
              Escolha seu bairro...
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
            id="date"
            className="form-control shadow-sm"
            {...register("Endereco", { required: true })}
          />
          <label className="fw-bold">Endereço completo:</label>
        </div>

        <div className="container my-3">
          <label className="d-flex fw-bold mb-2">Moradia:</label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio1"
              value="Casa Própria"
              {...register("Moradia")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Casa Própria
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio2"
              value="Casa Alugada"
              {...register("Moradia", { required: true })}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Casa Alugada
            </label>
          </div>
        </div>

        <div className="col-md-6 mb-3 form-floating">
          <input
            type="tel"
            id="zap02"
            className="form-control shadow-sm"
            {...register("Whatsapp01", { required: true })}
          />
          <label className="fw-bold">Whatsapp 01:</label>
        </div>
        <div className="col-md-6 mb-3 form-floating">
          <input
            type="tel"
            id="zap01"
            className="form-control shadow-sm"
            min="11"
            max="11"
            {...register("Whatsapp02")}
          />
          <label className="fw-bold">Whatsapp 02:</label>
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
            Esse email será utilizado para acessar todos os paineis do cliente e
            acessar os aplicativos escolhidos.{" "}
          </div>
        </div>

        {/* ################### Etapa 02 ################################### */}

        <h4>Dados do Plano - 2 Etapa</h4>
        <span className="divider-orange mb-3" />

        <div className="mb-3">
          <label className="form-label fw-bold">Plano Contratado:</label>
          <input
            type="text"
            className="form-control shadow-sm"
            value="Plano Inter Digital R$ 99,90"
            {...register("PLANO")}
            readOnly
          />
        </div>

        <div className="container">
          <label className="d-flex fw-bold mb-2">
            Telefone Fixo Netsim (Opcional):
          </label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio1"
              value="Sim"
              {...register("Fixo")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Sim
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio2"
              value="Não"
              {...register("Fixo")}
              checked
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Não
            </label>
          </div>
        </div>

        <div className="container">
          <label className="d-flex fw-bold mb-2">Data de Vencimento:</label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio1"
              value="Dia 10"
              {...register("Vencimento")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Dia 10
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio2"
              value="Dia 15"
              {...register("Vencimento")}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Dia 15
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio3"
              value="Dia 25"
              {...register("Vencimento")}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Dia 25
            </label>
          </div>
        </div>

        <div className="col mb-3 form-floating">
          <input
            type="text"
            id="date"
            className="form-control shadow-sm"
            {...register("Indicacao")}
          />
          <label className="fw-bold">Nome completo da Indicação:</label>
          <div className="form-text">
            O cliente que fez a indicação ganhará na sua próxima fatura de
            internet um desconto de R$ 50 reais.
          </div>
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
            CONFIRMO esta etapa de contratação dos serviços da contratada
            NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ
            18.156.287/0001-09 e tenho total ciência do contrato de fidelidade
            de 12 meses deixando a taxa de adesão de R$ 500,00 isenta mediante
            a fidelidade. Estou ciente que a empresa tem um prazo para
            instalação de até 48H. Meu CPF poderá passar por uma análise antes
            da aprovação do contrato. Todos os dados fornecidos estão seguros
            e são de inteira responsabilidade da Netsim Telecom.
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="primary" onClick={linkWhatsapp} onClickCapture={sendEmail}>
            Aceitar
          </Button>
        </Modal.Footer>
      </Modal>
      </form>


      
    </div>
  );
}
