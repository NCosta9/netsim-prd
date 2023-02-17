
import { useForm } from "react-hook-form";


function InputCEP(props){

const {register} = useForm();

    return(

        <div className="form-floating">
        <input
            type="text"
            id="date"
            className="form-control shadow-sm"
            {...register("CEP", { required: true })}
          />
          <label className="fw-bold">CEP:</label>
      </div>

    )
}
 export default InputCEP;