
import { useForm } from "react-hook-form";


function InputEndereco(props){

const {register} = useForm();

    return(

        <div className="form-floating">
        <input
            type="text"
            className="form-control shadow-sm"
            {...register("Endereco", { required: true })}
          />
          <label className="fw-bold">Endereço completo:</label>
      </div>

    )
}
 export default InputEndereco;