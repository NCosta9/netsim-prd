import IconZap from './IconWp1.gif';

function ContatoWhatsapp(){

    return (
<>

<div class="position-relative">
  <div class=" bottom-0 end-0 mb-5 me-3 zindex-sticky fixed-bottom">
    <div class="float-end">
        <a href="https://api.whatsapp.com/send/?phone=556120993434&text=Ol%C3%A1+%2ANetsim%2A%21+Estou+com+algumas+duvidas+pode+me+ajudar%3F&type=phone_number&app_absent=0" ><img src={IconZap} width={60} height={60}/></a>
    </div>
  </div>
</div>
</>
    )
}
export default ContatoWhatsapp;