import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import premium1 from "../../../../img/iconApps/premium1.png";
import premium2 from "../../../../img/iconApps/premium2.png";
import premium3 from "../../../../img/iconApps/premium3.png";
import premium4 from "../../../../img/iconApps/premium4.png";
import standard1 from "../../../../img/iconApps/standard1.png";
import standard2 from "../../../../img/iconApps/standard2.png";
import standard3 from "../../../../img/iconApps/standard3.jpg";
import standard4 from "../../../../img/iconApps/standard4.png";
import standard5 from "../../../../img/iconApps/standard5.png";
import standard6 from "../../../../img/iconApps/standard6.jpg";
import standard7 from "../../../../img/iconApps/standard7.png";
import standard8 from "../../../../img/iconApps/standard8.png";
import standard9 from "../../../../img/iconApps/standard9.png";
import standard10 from "../../../../img/iconApps/standard10.png";
import standard11 from "../../../../img/iconApps/standard11.png";
import standard12 from "../../../../img/iconApps/standard12.png";
import standard13 from "../../../../img/iconApps/standard13.png";
import standard14 from "../../../../img/iconApps/standard14.png";
import standard15 from "../../../../img/iconApps/standard15.png";
import standard16 from "../../../../img/iconApps/standard16.png";

export default function Master() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// esta sentado as propriedade do MODAL  que esta no fim desse codigo

  const { register,handleSubmit, getValues} = useForm();

//Envia todos os dados do formulario por meio de uma url do whatsapp
function linkWhatsapp(e){
  e.preventDefault();
  let formValues = getValues();
  let url = "https://api.whatsapp.com/send?phone=556120993434&text=";
  let end_url =`
  ${url}Eu ${formValues.NOME} de CPF ${formValues.CPF} envio os dados para assinatura do ${formValues.PLANO} .Declaro que li e concordo com os termos e condições de serviços da contratada NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ 18.156.287/0001-09.%0A 
  %0ADados para o cadastro:%0A
  %0A
  Nome Completo: ${formValues.NOME},%0A
  CPF: ${formValues.CPF},%0A
  RG: ${formValues.RG},%0A
  Data de Nascimento: ${formValues.NASCIMENTO},%0A
  Cep: ${formValues.CEP},%0A
  Bairro: ${formValues.Bairro},%0A
  Endereço Completo: ${formValues.Endereco},%0A
  Moradia: ${formValues.Moradia},%0A
  Whatsapp01: ${formValues.Whatsapp01},%0A
  Whatsapp02: ${formValues.Whatsapp02},%0A
  Email: ${formValues.Email},%0A
  Plano Contratado: ${formValues.PLANO},%0A
  Telefone Fixo Netsim: ${formValues.Fixo},%0A
  Data de Vencimento: ${formValues.Vencimento},%0A
  Nome Completo da Indicação: ${formValues.Indicacao},%0A
  AppStandard: ${formValues.AppStandard},%0A
  AppPremium: ${formValues.AppPremium},%0A
  `; 
window.open(end_url)



};

//Envia todos os dados do fomulario no email da empresa suporte@netsimtelecom e uma copia do email na caixa de entrada do financeiro@netsimtelecom via emailjs.com.
//

function sendEmail(e) {
  e.preventDefault();
  const formValues = getValues();
  const title = "NOVA ASSINATURA DE INTERNET";
  const assunto = "DADOS RECEBIDOS PARA ASSINATURA";
  const cabecalho = "Ficamos Felizes ter você como nosso novo cliente! Ja recebemos o seus dados e dentro de alguns minutos informaremos sobre sua instalação. Verifique abaixo se as informações estão corretas: ";
  const nome_cliente = `${formValues.NOME}`;
  const cliente_mail = `${formValues.Email}`;
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
    assunto:assunto,
    cabecalho:cabecalho,
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
      "8Lm_V9EVCD5qu2Vqk"
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
      "8Lm_V9EVCD5qu2Vqk"
    )
    .then(
      (response) => {
        alert("DADOS ENVIADO COM SUCCESSO!", response.status, response.text);   
        
      },
      (error) => {
        alert("OPS!! NÃO FOI POSSIVEL RECEBER OS DADOS...", error);
        
      }
    );
  console.log(sendEmail);
  };
  
// A partir daqui verifica os aplicativos que estão marcados

    let CheckMaximoStandard = 2;
    let CheckMaximoPremium = 0;
    
  
  
  function verificaStandard(){
  
  let Marcados = 1;
  let objCheck = document.forms['formDados'].elements['AppStandard'];
  
  
  //Percorrendo os checks para ver quantos foram selecionados:
    for (let iLoop=0; iLoop < objCheck.length; iLoop++) {
  //Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
    if (objCheck[iLoop].checked) {  
  
        Marcados++;
    }
    
    if (Marcados <= CheckMaximoStandard) {
    //Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
      for (let i=0; i < objCheck.length; i++) {
        objCheck[i].disabled = false;
      }   
      
      //Caso contrário, desabilitar o checkbox;
      //Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
      
    } else {
      for (let i=0; i<objCheck.length; i++) {
        if(objCheck[i].checked === false) {
          objCheck[i].disabled = true;
        }       
        }
      }
  }
  
  
  };
  
  
  function verificaPremium(){
  
    let Marcados = 1;
    let objCheck = document.forms['formDados'].elements['AppPremium'];
    
    
    //Percorrendo os checks para ver quantos foram selecionados:
      for (let iLoop=0; iLoop < objCheck.length; iLoop++) {
    //Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
      if (objCheck[iLoop].checked) {  
    
        Marcados++;
      }
      
      if (Marcados <= CheckMaximoPremium) {
      //Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
      for (let i=0; i < objCheck.length; i++) {
        objCheck[i].disabled = false;
      }   
        
      //Caso contrário, desabilitar o checkbox;
      //Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
      
      } else {
        for (let i=0; i<objCheck.length; i++) {
          if(objCheck[i].checked === false) {
            objCheck[i].disabled = true;
          }       
        }
      }
    }
  
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
            value="Plano Master Digital R$ 129,,90"
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

        <div className="form-group mb-3">
          <h5 className="mb-0">Monte seu pacote de aplicativos:</h5>
          <div className="row">
            <labe>Escolha:</labe>
            <div className="col-sm-1 form-text">Standard: 2</div>
            <div className="col-sm-1 form-text mb-3">Premium: 0</div>
          </div>

          {/* ################### Aplicativos Premium ################################### */}
          <div className="container shadow p-3">
            <label className="form-label fw-bold ">Aplicativos Premium</label>
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4">
              <div className="col my-1">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value="Ritual fit"
                    role="switch"
                    id="CheckRitualfit"
                    {...register("AppPremium")}
                    name="AppPremium" 
                    onChange={verificaPremium}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="CheckRitualfit">
                    <img
                      src={premium1}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt="/"
                    />{" "}
                    Ritual Fit
                  </label>
                </div>
              </div>
              <div className="col my-1">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Doutor pass"
                    role="switch"
                    id="CheckDoutorPass"
                    {...register("AppPremium")}
                    name="AppPremium" 
                    onChange={verificaPremium}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="CheckDoutorPass">
                    <img
                      src={premium2}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt="/"
                    />{" "}
                    Doutor pass
                  </label>
                </div>
              </div>
              <div className="col my-1">
                <div className=" form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Sex Hot"
                    role="switch"
                    id="CheckSexHot"
                    {...register("AppPremium")}
                    name="AppPremium" 
                    onChange={verificaPremium}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="CheckSexHot">
                    <img
                      src={premium3}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />{" "}
                    Sex Hot
                  </label>
                </div>
              </div>
              <div className="col my-1">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="HBO Max"
                    role="switch"
                    id="CheckHboMax"
                    {...register("AppPremium")}
                    name="AppPremium" 
                    onChange={verificaPremium}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="CheckHboMax">
                    <img
                      src={premium4}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />{" "}
                    HBO Max
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* ################### Aplicativos Standarda ################################### */}

          <div className="container shadow p-3">
            <label className="form-label fw-bold ">Aplicativos Standard</label>
            <div className="row  row-cols-1 row-cols-sm-3 row-cols-md-4">
              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Estadio TNT"
                    role="switch"
                    id="CheckEstadioTnt"
                    {...register("AppStandard")}
                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckEstadioTnt"
                  >
                    <img
                      src={standard1}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Estádio TNT
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Hube"
                    role="switch"
                    id="CheckHube"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckHube"
                  >
                    <img
                      src={standard2}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Hube
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className=" form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="fluid"
                    role="switch"
                    id="CheckFluid"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckFluid"
                  >
                    <img
                      src={standard3}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    fluid
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Deezer"
                    role="switch"
                    id="CheckDeezer"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckDeezer"
                  >
                    <img
                      src={standard4}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Deezer
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Super Comics"
                    role="switch"
                    id="CheckSuperComics"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckSuperComics"
                  >
                    <img
                      src={standard5}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Super Comics
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Maia"
                    role="switch"
                    id="CheckMaia"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckMaia"
                  >
                    <img
                      src={standard6}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Maia
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Ubook"
                    role="switch"
                    id="CheckUbook"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckUbook"
                  >
                    <img
                      src={standard7}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Ubook
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Looke"
                    role="switch"
                    id="CheckLooke"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckLooke"
                  >
                    <img
                      src={standard8}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Looke
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Playkids"
                    role="switch"
                    id="CheckPlaykids"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckPlaykids"
                  >
                    <img
                      src={standard9}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Playkids
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Clube de Ciências"
                    role="switch"
                    id="CheckCluberDeCiencias"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}                  />

                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckCluberDeCiencias"
                  >
                    <img
                      src={standard10}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    Clube de Ciências
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Fuze Forge"
                    role="switch"
                    id="CheckFuzeForge"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard} 
                     />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckFuzeForge"
                  >
                    <img
                      src={standard11}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Fuze Forge
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Galinha Pintadinha"
                    role="switch"
                    id="CheckGalinhaPintadinha"
                    {...register("AppStandard")}

                    name="AppStandard" 
                    onChange={verificaStandard}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckGalinhaPintadinha"
                  >
                    <img
                      src={standard12}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Galinha Pintadinha
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Pocoyo"
                    role="switch"
                    id="CheckPocoyo"
                    {...register("AppStandard")}
                    name="AppStandard" 
                    onChange={verificaStandard}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckPocoyo"
                  >
                    <img
                      src={standard13}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Pocoyo
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Tap Lingo"
                    role="switch"
                    id="CheckTapLingo"
                    {...register("AppStandard")}
                    name="AppStandard" 
                    onChange={verificaStandard}
                  />
                  <label className="form-check-label" htmlFor="CheckTapLingo">
                    <img
                      src={standard14}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />{" "}
                    Tap Lingo
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Tô aqui"
                    role="switch"
                    id="CheckToAqui"
                    {...register("AppStandard")}
                    name="AppStandard" 
                    onChange={verificaStandard}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckToAqui"
                  >
                    <img
                      src={standard15}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />
                    {" "}
                    Tô aqui
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Reforça"
                    role="switch"
                    id="CheckRefoca"
                    {...register("AppStandard")}
                    name="AppStandard" 
                    onChange={verificaStandard}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckRefoca"
                  >
                    <img
                      src={standard16}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt="/"
                    />
                    {" "}
                    Reforça
                  </label>
                </div>
              </div>
            </div>
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
            a fidelidade. 
            <br/>(01)
            Estou ciente que a empresa tem um prazo para
            instalação de até 48 horas. 
            <br/>(02)
            Meu CPF poderá passar por uma análise antes
            da aprovação do contrato. 
            <br/>(03)
            Todos os dados fornecidos estão seguros
            e são de inteira responsabilidade da Netsim Telecom.
            <br/>(04)
            No prazo de até 24 horas esta liberado o acesso aos aplicativos escolhidos com longin o usuario:(Email) e Senha:(CPF).
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
