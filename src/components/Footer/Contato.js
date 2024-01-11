import Localization from "../Localization";




export default function Contato() {

  return (
    <>
      <section id="contact" className="contact">
      <div class="section-title">
          <h2>Contate-nos</h2>
        </div>
        <div className="container">

          {/* <div className="section-title">
            <span>Contato</span>
            <h3>Contato</h3>
            <p>Fale conosco em um dos canais de atendimento ao cliente abaixo para solicitar seu orçamento</p>
          </div> */}

          <div className="row" data-aos="fade-up">
            <div className="col-lg-6">
              <div className="info-box">
                <i className="bi bi-map">
                </i>
                <h3>Endereço</h3>
                <p>Área Comercial, Residencial São Francisco, Águas Quentes, Brasília - DF</p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#E4641C" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z" /></svg>
                </i>
                <h3>Email</h3>
                <p>adminits.com.br</p>
              </div>
            </div> */}

            <div className="col-lg-6 col-md-6">
              <div className="info-box  ">
              <i class="bi bi-telephone"></i>
                <h3>Telefone</h3>
                <p>(61) 2099-3434</p>
              </div>
            </div>

          </div>
          </div>
          <div className="row" data-aos="fade-up">

            <div className="col-lg-12 ">
              <Localization />
            </div>


          </div>

        
      </section>



    </>
  )
}