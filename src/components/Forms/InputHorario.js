
import { useForm } from "react-hook-form";


function InputHorario(props){

const {register} = useForm();

    return(

        <div className="container">
        <label className="d-flex fw-bold mb-2">
        Horário da Mudança:
        </label>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input p-2"
            type="radio"
            id="inlineRadio1"
            value="Manhã"
            {...register("hora")}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Manhã
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input p-2"
            type="radio"
            id="inlineRadio2"
            value="Tarde"
            {...register("hora")}
            
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Tarde
          </label> 
        </div>
      </div>

    )
}
 export default InputHorario;