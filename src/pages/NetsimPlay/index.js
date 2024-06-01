import CarouselFilmes from "../../components/Carousel/NetsimPlay/Filmes/CarouselFilmes";
import './netsimplay.css'
export default function NetsimPlay() {
    const imgStyle = {
        width: '9rem',
    };




    return (
        <>
            <div id="netsimplay">
                <CarouselFilmes />
                <div className='my-4 p-3 text-center'>
                    <p className="lead fs-3 text-light">
                        Clique nos botões abaixo para realizar o download.
                    </p>

                    <a href='https://apps.apple.com/br/app/sat-tv-go/id1611756814'> <img className='' src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/Lojas%20de%20Apps/loja-apple.png?t=2023-12-08T17%3A44%3A36.943Z' style={imgStyle} /> </a>
                    <a href='https://play.google.com/store/apps/details?id=com.sattvgo.android&hl=en_US'> <img className='' src='https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/Lojas%20de%20Apps/loja-google.png?t=2023-12-08T17%3A44%3A36.943Z' style={imgStyle} /> </a>
                </div>
                <p className="lead fs-3 text-light text-center">
                    Siga as etapas abaixo para conseguir configurar o app
                </p>
                <div className="scroll-container">
                    <div className="gridscroll  mx-auto fundo-lecupon rounded-top" >
                        <img className="image-response imglecupon" src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/mockups/img-sattv.png" />
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row gap-4 py-md-5 align-items-center justify-content-center">
                    <div class="list-group list-group-flush ">
                        <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent" aria-current="true">
                                <div class="d-flex gap-2 w-100 justify-content-between ">
                                    <div>
                                        <h2 class="mb-0 ">Etapa 01</h2>
                                        <p class="mb-0 opacity-75 text-light">Digite o código do provedor "317"</p>
                                    </div>
                                </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent" aria-current="true">
                                <div class="d-flex gap-2 w-100 justify-content-between ">
                                    <div>
                                        <h2 class="mb-0 ">Etapa 02</h2>
                                        <p class="mb-0 opacity-75 text-light">Realize o login com suas credenciais de acesso solicitadas. <br/> Login é o Email (Fornecido no cadastro do provedor) e SENHA (CPF Completo)</p>
                                    </div>
                                </div>
                        </a>
                       
                    </div>
                </div>


            </div>

        </>
    )
}