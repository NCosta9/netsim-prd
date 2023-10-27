import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div class="position-absolute top-50 start-50 translate-middle">
      <div class="card d-block bg-body-secondary rounded-3 shadow p-2 w-100 ">
        <div class="card-body p-4 text-center">
          <h5 class="mb-3">Ooops!! Algo deu errado!</h5>
          <p class="mb-0">
            Por algum motivo, não recebemos suas informações, fale com um de nossos atendentes, por meio dos nossos canais de atendimento, Whatsapp, telefone, para dar continuidade no processo!.

          </p>
          <Link to="/cliente" className="btn btn-primary text-end mt-3 mb-3">Fechar</Link>

        </div>

      </div>

    </div>


  )
}


