import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


function SendDadosPlanos (props){

  const navigate = useNavigate();

  function send(e){
    e.preventDefault();

    const userData = `
    Eu ${props.nome} de CPF/CNPJ ${props.cpf}, CONFIRMO esta etapa de contratação do plano ${props.plano} e dos serviços da contratada NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ 18.156.287/0001-09, tenho total ciência do contrato de fidelidade de 12 meses deixando a taxa de adesão de R$ 500,00 isenta mediante a fidelidade.(01)Estou ciente que a empresa tem um prazo para instalação de até 48 horas.(02)Meu CPF poderá passar por uma análise antes da aprovação do contrato. (03)Todos os dados fornecidos estão seguros e são de inteira responsabilidade da Netsim Telecom.(04)No prazo de até 24 horas ficará liberado o acesso aos aplicativos escolhidos com login, usuario:(Email) e Senha:(CPF).

    Nome: ${props.nome}
    CPF/CNPJ: ${props.cpf}
    RG: ${props.rg}
    Data Nascimento: ${props.nascimento}
    Cep: ${props.cep}
    Bairro: ${props.bairro}
    Endereço: ${props.endereco}
    Moradia: ${props.moradia}
    Whatsapp01: ${props.whatsapp01}
    Whatsapp02: ${props.whatsapp02}
    Email: ${props.email}
    Plano constratado: ${props.plano}
    Fixo: ${props.fixo}
    Vencimento: ${props.vencimento}
    AppsPremium: ${props.premium}
    AppsStandard: ${props.standard}
    Indicação: ${props.indicacao}
`;

console.log(userData);

const templateParams = {
  assunto:props.assunto,
  message: userData,
};
const templateParamsCliente = {
  assunto:props.assunto,
  cabecalho:props.cabecalho,
  message: userData,
  cliente:props.nome,
  cliente_mail:props.email,
};

console.log(templateParams);

emailjs
  .send(
    "service_au350rb",
    "template_oh38moq",
    templateParams,
    "8Lm_V9EVCD5qu2Vqk"
  ).then(
    (response) => {
     // console.log("DADOS ENVIADO COM SUCCESSO!", response.status, response.text);   
          navigate("/sucesso")

    },
    (error) => {
      //console.log("OPS!! NÃO FOI POSSIVEL RECEBER OS DADOS...", error);
      navigate("/error")
    }
  );
  
emailjs
  .send(
    "service_au350rb",
    "template_xqy15f2",
    templateParamsCliente,
    "8Lm_V9EVCD5qu2Vqk"
  );
 

    let url = "https://api.whatsapp.com/send?phone=556120993434&text=";
    let end_url =`
    ${url}Eu ${props.nome} de CPF ${props.cpf} solicitei pelo site uma ${props.assunto} ${props.plano}. ${props.termos}%0A%0A
Dados para Assinatura:%0A
Nome: ${props.nome}%0A
CPF/CNPJ: ${props.cpf}%0A
RG: ${props.rg}%0A
Data Nascimento: ${props.dia}/${props.mes}/${props.ano}%0A
Cep: ${props.cep}%0A
Bairro: ${props.bairro}%0A
Endereço: ${props.endereco}%0A
Moradia: ${props.moradia}%0A
Whatsapp01: ${props.whatsapp01}%0A
Whatsapp02: ${props.whatsapp02}%0A
Email: ${props.email}%0A
Plano Contratado: ${props.plano}%0A
Fixo: ${props.fixo}%0A
Vencimento: ${props.vencimento}%0A
Indicação: ${props.indicacao}%0A
    `; 
  window.open(end_url)
  }
           
    return(

    <button 
    type="button" 
    className="btn btn-lg btn-primary mb-4" 
    onClick={send} 
    disabled ={props.disabled}
    >
     {props.text}
    </button>

  )
}
export default SendDadosPlanos;