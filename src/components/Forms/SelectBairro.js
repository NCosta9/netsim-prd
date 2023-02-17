import { useForm } from "react-hook-form";


function SelectBairro(props){

const {register} = useForm();

    return(
      
      <div className="form-floating">
        <select className="form-select" {...register("Bairro", { required: true })}>

            <option value="" selected> --- Qual o bairro? --- </option>
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
    )
}

export default SelectBairro 