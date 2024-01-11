import Contato from './Contato';
import '../Clients/clients.css'

export default function FooterCliente(){
    return(
        <>
        <footer id="footer-cliente">
        <div className="footer-top">
        <Contato/>
          <div className="container">
            <div className="row">
    
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3 className='logo'><img src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/logos/logoBranca.png" alt="" className="logo-img"/></h3>
                  <p>QS 3 LTS 03, 05, 07 nº 9 sls 601 E 602 <br/>
                  CEP: 71953-000, Brasília-DF<br/><br/>
                    <strong>Telefone:</strong> (61) 2099-3434<br/>
                    <strong>Email:</strong> administrativo@netsimtelecom.com.br<br/></p>
                  <div className="social-links mt-3">
                    <a href="https://www.facebook.com/netsimtelecom" className=""><i ><svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></i></a>
                    <a href="https://www.instagram.com/netsimtelecom/" className="instagram"><i ><svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></i></a>
                  
                  </div>
                </div>
              </div>
    
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Acesso Rápido</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="/home">Home</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="/cobertura">Planos Fibra Otica</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="/cobertura">Planos Via Radio</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="mailto:administrativo@netsimtelecom.com.br">Trabalhe Conosco</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="termos">Termos de Serviço</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="politicas">Politica de Privacidade</a></li>
                </ul>
              </div>
    
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Serviços</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="https://netsimtelecom.com.br/mudanca">Mudança de Endereço</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="https://netsimtelecom.com.br/ponto">Mudança de Ponto</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="https://netsimtelecom.com.br/titularidade">Mudança de Titularidade</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="https://netsimtelecom.com.br/cobertura">Mudança de Plano</a></li>
                </ul>
              </div>
    
              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Netsim Telecom</h4>
                <p>A provedora de internet que possui o que há de melhor em planos de Internet Fibra e Via Radio, Telefonia, e aplicativos.</p>
                <div>
                  <h4>Baixe o nosso app:</h4>
                </div>
    
                  <a href="https://apps.apple.com/br/app/central-netsim/id6450905492"><img className='mb-1' height="40px" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/Lojas%20de%20Apps/loja-apple.png?t=2023-12-08T17%3A44%3A36.943Z"/></a>
                  <a href="https://play.google.com/store/apps/details?id=br.com.netsimtelecom.ixc"><img className='mb-1'   height="40px" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/Lojas%20de%20Apps/loja-google.png?t=2023-12-08T17%3A44%3A36.943Z"/></a>

              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
          &copy; Copyright <strong><span> Netsim Provedor de Sistema de Integração a Mídia LTDA- CNPJ: 18.156.287/0001-09.</span></strong>&reg; Todos os direitos reservados.
          </div>
          <div className="credits">
         
            {/* Criado por <a href="https://api.whatsapp.com/send?phone=5538988483981">PromovaOnline</a> */}
          </div>
        </div>
      </footer>
      
        </>
        
    );
}