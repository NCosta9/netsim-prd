
import { useForm } from "react-hook-form";


function InputNome(props){

const {register} = useForm();

    return(

        <div className="mb-3 form-floating">
            <input type="text" className="form-control shadow-sm" {...register("NOME", { required: true })} />
            <label className="fw-bold">Nome completo:</label>
        </div>

    )
}
 export default InputNome;