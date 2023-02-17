
import { useForm } from "react-hook-form";


function InputEmail(props){

const {register} = useForm();

    return(

        <div className="form-floating">
         <input
            type="email"
            id="email"
            className="form-control shadow-sm"
            {...register("Email", { required: true })}
          />
          <label className="fw-bold">E-mail:</label>
          <div className="form-text">
            Nesse email você recebera uma mensagem com as informações da solicitação.{" "}
          </div>
      </div>

    )
}
 export default InputEmail;