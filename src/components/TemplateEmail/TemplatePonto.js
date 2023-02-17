import emailjs from "@emailjs/browser";





function TemplatePonto(props){

  
    const title = `${props.title}`;
    const assunto = `${props.assunto}`;
    const cabecalho = "Ja recebemos a sua solicitação de mudança de endereço dos equipamentos de internet, dentro de alguns minutos informaremos sobre sua instalação. No dia da mudança nossos tecnicos entrara em contato para confirmar o horario exato da mudança de endereço.  Verifique abaixo se as informações estão corretas: ";
    const nome_cliente = `${props.nome}`
    const cliente_mail = `${props.email}`
    const userData = `
        Eu ${props.nome} de CPF/CNPJ ${props.cpf}, acabei de solicitar por meio do site uma nova mudança de endereço dos esquipamentos de internet. (1) Declaro que li e concordo com os termos e condições.(2) Tenho total ciência do custo de R$ 29,90 para ser realizado esta mudança de endereço.


        Segue abaixo a informações necessarias:

        Nome Completo: ${props.nome},
        CPF: ${props.cpf},
        Email: ${props.email},
        Novo Cep: ${props.cep},
        Novo Bairro: ${props.bairro},
        Novo Endereço Completo: ${props.endereco},
        Whatsapp01: ${props.whatsapp},
        Data da Mudança: ${props.data},
        Horario da Mudança: ${props.horario},
        Observação: ${props.obs},
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

}
export default TemplatePonto;