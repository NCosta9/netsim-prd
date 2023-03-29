
export default function AlertSucess(){

    return(
        <>
            <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalChoice">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-3 shadow">
      <div class="modal-body p-4 text-center">
        <h5 class="mb-3">Mensagem recebida com sucesso!</h5>
        <p class="mb-0">
            Agora aguarde que dentro de alguns instantes um de nossos atendentes entrará em contato!
            Também enviamos mais informações dentro da sua caixa de entrada do email! 
        </p>
      </div>
      <div class="modal-footer flex-nowrap p-0">
        <a href="/cliente" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end fw-bold"> Certo, entendi! </a>
      </div>
    </div>
  </div>
</div>
        </>
    )
}


