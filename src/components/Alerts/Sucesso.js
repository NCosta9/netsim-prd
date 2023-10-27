import { Link } from "react-router-dom";


export default function Sucesso() {

  return (
    <div class="position-absolute top-50 start-50 translate-middle">
      <div class="card d-block bg-body-secondary rounded-3 shadow p-2 w-100 ">
        <div class="card-body p-4 text-center">
          <h5 class="mb-3">Ihuul! Mensagem recebida com sucesso!</h5>
          <p class="mb-0">
            Agora aguarde que dentro de alguns instantes um de nossos atendentes entrará em contato!
            Também enviamos mais informações dentro da sua caixa de entrada do email!
          </p>
          <Link to="/cliente" className="btn btn-primary text-end mt-3 mb-3">Certo, entendi!</Link>
        </div>
      </div>
    </div>



  )
}


