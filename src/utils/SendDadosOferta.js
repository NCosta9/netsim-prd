import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


function SendDadosOferta (props){

  const navigate = useNavigate();

  function send(e){
    e.preventDefault();

    const userData = `
    Eu ${props.nome} de CPF/CNPJ ${props.cpf},CONFIRMO esta etapa de reativação dos serviços da contratada NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ 18.156.287/0001-09, e tenho total ciência:

    (1)Está contratando um plano internet de ${props.oferta} apenas nas ${props.periodo}. Suporte gratuito, equipamentos gratuito e instalação gratuita.
    (2)Esta assinando um contrato de fidelidade de 12 meses.
    (3)Ter feito todas as confirmações e envio dos dados necessários para realização do cadastro por meio eletrônico, ligação, whatsapp e outros.
    (4)A empresa tem um prazo máximo para instalação de até 48 horas.
    (5)E Que todos os dados fornecidos estão seguros e são de inteira responsabilidade da Netsim Telecom e serão usados apenas para assinatura do plano internet.

    Plano constratado: ${props.plano} 
    Oferta de: ${props.oferta} por ${props.periodo}

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
    ${url}Eu ${props.nome} de CPF/CNPJ ${props.cpf} confirmei pelo site uma ${props.assunto} do ${props.plano} de ${props.oferta} por ${props.periodo} ${props.termos}%0A%0A

    `; 
  window.open(end_url)
  }
           
    return(

    <button 
    type="button" 
    className="btn btn-lg btn-primary mt-3" 
    onClick={send} 
    disabled ={props.disabled}
    >
     {props.text}
    </button>

  )
}
export default SendDadosOferta;