
import { useForm } from "react-hook-form";


function InputWhatsapp(props){

const {register} = useForm();

    return(

        <div className="form-floating">
        <input
            type="tel"
            className="form-control shadow-sm"
            {...register("Whatsapp01", { required: true })}
          />
          <label className="fw-bold">Whatsapp 01:</label>
      </div>

    )
}
 export default InputWhatsapp;