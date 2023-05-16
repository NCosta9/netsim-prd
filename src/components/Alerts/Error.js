import React from "react";

export default function Error() {
    return (
      
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalChoice">
          <div class="modal-dialog" role="document">
            <div class="card rounded-3 shadow ">
              <div class="modal-body p-4 text-center">
                <h5 class="mb-3">Ooops!! Algo deu errado!</h5>
                <p class="mb-0">
                  Fale com um de nossos atendentes, por meio dos nossos canais de atendimento, Whatsapp, ou telefone, para verificar ou dar continuidade no processo. 

                </p>
              </div>
              <hr/>
             <a href="/cliente" className="icon-link text-end p-3">Fechar</a>
            </div>
          </div>
        </div>
    
      )
  }
  
  
  