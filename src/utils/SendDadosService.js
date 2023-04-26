import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


function SendDadosService (props){

  const navigate = useNavigate();

  function sendWhatsapp(e){
    e.preventDefault();

    const userData = `
    Eu ${props.nome} de CPF/CNPJ ${props.cpf}, solicito uma ${props.assunto} e ${props.conditions}

    Cep: ${props.cep}
    Bairro: ${props.bairro}
    Endereço: ${props.endereco}
    Moradia: ${props.moradia}
    Data: ${props.data}
    Horario: ${props.hora}
    Observação: ${props.obs}

    Whatsapp01: ${props.whatsapp01}
    Whatsapp01: ${props.whatsapp02}
    Email: ${props.email}
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
          navigate("/cliente")

    },
    (error) => {
      console.log("OPS!! NÃO FOI POSSIVEL RECEBER OS DADOS...", error);
      
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
    ${url}Eu ${props.nome} de CPF ${props.cpf} solicitei pelo site uma ${props.assunto}. ${props.termos}
    `; 
  window.open(end_url)
  }
           
    return(

    <button 
    type="button" 
    className="btn btn-lg btn-primary mb-4" 
    onClick={sendWhatsapp} 
    disabled ={props.disabled}
    >
     {props.text}
    </button>

  )
}
export default SendDadosService;