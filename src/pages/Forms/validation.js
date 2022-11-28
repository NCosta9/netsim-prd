import * as yup from "yup" ;

const schema = yup.object().shape({

    nome: yup
    .string()
    .min(2,"Minimo 2 caractere")
    .required("Nome é obrigatório"),

    email: yup
    .string()
    .email("Digite um Email válido")
    .required("Email é obrigatório"),

   
    
  }).required();

  export default schema;