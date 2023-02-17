
import { useForm } from "react-hook-form";


function InputData(props){

const {register} = useForm();

    return(

        <div className="form-floating">
       <input
            type="date"
            className="form-control shadow-sm"
            {...register("data", { required: true })}
          />
          <label className="fw-bold">Data da Mudança:</label>
      </div>

    )
}
 export default InputData;