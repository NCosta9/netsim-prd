import "../Clients/clients.css"
export default function TopBar() {
    return (
        <>
            <div id="topbar" class=" d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-center justify-content-md-between">
                    <div class="contact-info d-flex align-items-center">
                        <i class="bi bi-instagram"></i><a href="https://www.instagram.com/netsimtelecom/">@netsimtelecom</a>
                        <i class="bi bi-phone-fill phone-icon"></i> 61 2099-3434
                    </div>
                    <div class="cta d-none d-md-block">
                        <a href="https://ixc.netsimtelecom.com.br/central_assinante_web/login" class="scrollto">Autoatendimento</a>
                    </div>
                </div>
            </div>

        </>
    )
}