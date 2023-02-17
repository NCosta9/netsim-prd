
import { useForm } from "react-hook-form";


function InputCPF(props){

const {register} = useForm();

    return(

        <div className="form-floating">
        <input type="cpf" className="form-control shadow-sm" {...register("CPF", { required: true })} />
        <label className="fw-bold">CPF:</label>
      </div>

    )
}
 export default InputCPF;