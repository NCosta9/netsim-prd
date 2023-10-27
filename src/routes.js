import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';

//imports para rotas dos planos de internet 
import Cobertura from './pages/Cobertura';
import Radio from './pages/Radio';
import Fibra from './pages/Fibra';

import Sucesso from './components/Alerts/Sucesso.js';
import Error from './components/Alerts/Error.js';



//import para rota da area do cliente
import AreaCliente from './pages/AreaCliente';


//imports para rotas de formularios
import ContrateEmpresa from './pages/Forms/FormsGeralEmpresa';
import Basic from './pages/Forms/FormsFibra/Basic';
import Plus from './pages/Forms/FormsFibra/Plus';
import Ultra from './pages/Forms/FormsFibra/Ultra';
import Lite from './pages/Forms/FormsFibra/Lite';
import Master from './pages/Forms/FormsRadio/Master';
import Digital from './pages/Forms/FormsRadio/Digital';
import Inter from './pages/Forms/FormsRadio/Inter';

//imports para rotas de solicitação de serviços
import Mudanca from './pages/Forms/FormMudanca';
import Ponto from './pages/Forms/FormPonto';
import Titularidade from './pages/Forms/Titularidade';
import OfertaExClientes from './pages/Ofertas/OfertaExClientes';
import OfertaLite from './pages/Ofertas/OfertaExClientes/dadosOferta/OfertaLite';
import OfertaBasic from './pages/Ofertas/OfertaExClientes/dadosOferta/OfertaBasic';
import OfertaPlus from './pages/Ofertas/OfertaExClientes/dadosOferta/OfertaPlus';
import OfertaUltra from './pages/Ofertas/OfertaExClientes/dadosOferta/OfertaUltra';




function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={ <Home/> } />
                <Route path="/cobertura" element={ <Cobertura/> } />
                <Route path="/fibra" element={ <Fibra/> } />
                <Route path='/radio' element={ <Radio/>}/>
                <Route path="/cliente" element={ <AreaCliente/> } />
                <Route path="/sucesso" element={ <Sucesso/> } />
                <Route path="/error" element={ <Error/> } />


                <Route path="/contrate-empresa" element={ <ContrateEmpresa/> } />
                <Route path="/lite" element={ <Lite/> } />
                <Route path="/basic" element={ <Basic/> } />
                <Route path="/plus" element={ <Plus/> } />
                <Route path="/ultra" element={ <Ultra/> } />
                <Route path="/master" element={ <Master/> } />
                <Route path="/digital" element={ <Digital/> } />
                <Route path="/inter" element={ <Inter/> } />
                <Route path="/mudanca" element={ <Mudanca/> } />
                <Route path="/ponto" element={ <Ponto/> } />
                <Route path="/titularidade" element={ <Titularidade/> } />
                <Route path='/aceite' element={ <OfertaExClientes/>} />


                <Route path='/oferta-lite' element={<OfertaLite/>} />
                <Route path='/oferta-basic' element={<OfertaBasic/>} />
                <Route path='/oferta-plus' element={<OfertaPlus/>} />
                <Route path='/oferta-ultra' element={<OfertaUltra/>} />



            </Routes>
        
        </BrowserRouter>

    )                         

}

export default RoutesApp;