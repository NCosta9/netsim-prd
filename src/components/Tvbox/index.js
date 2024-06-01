import "./tvbox.css"
export default function Tvbox() {
    return (
        <>
            <div id="tvbox" class="container  px-2 py-5">
                <div class="row flex-lg-row-reverse align-items-center  py-5">
                   
                    <div class="col-lg-6">
                        <h1 class="display-4 fw-bold lh-1 mb-3">Box <span>Netsim Play TV</span></h1>
                        <p class="lead">Receba em sua casa um aparelho que você mesmo instala e transforma sua TV em Smart. E mais, com acesso aos melhores aplicativos ja instalado, Netflix, MAX, Globoplay, Youtube, Spotify e outros.</p>
                    </div>
                    <div class="col-12 col-sm-8 col-lg-6">
                        <img src="https://hdflgabrcqndyvcnyjtn.supabase.co/storage/v1/object/public/imagens/mockups/tvbox-netsim-play-site-15.png?t=2024-04-26T13%3A57%3A42.821Z" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>
        </>
    )
}