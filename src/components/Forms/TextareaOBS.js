
import { useForm } from "react-hook-form";


function TextareaOBS(props){

const {register} = useForm();

    return(

    <div className="form-floating">
       <textarea
            className="form-control shadow-sm"
            {...register("observacao")}
          />
          <label className="fw-bold">Observação:</label>
      </div>

    )
}
 export default TextareaOBS;