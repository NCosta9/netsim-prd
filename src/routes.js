import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cobertura from './pages/Cobertura';
import Fibra from './pages/Fibra';
import AreaCliente from './pages/AreaCliente';
import ContrateEmpresa from './pages/Forms/FormsGeralEmpresa';
import ContrateFibra from './pages/Forms/FormsGeralFibra';
import ContrateRadio from './pages/Forms/FormsGeralRadio';



import Radio from './pages/Radio';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/cobertura" element={ <Cobertura/> } />
                <Route path="/fibra" element={ <Fibra/> } />
                <Route path='/radio' element={ <Radio/>}/>
                <Route path="/cliente" element={ <AreaCliente/> } />
                <Route path="/contrate-radio" element={ <ContrateRadio/> } />
                <Route path="/contrate-fibra" element={ <ContrateFibra/> } />
                <Route path="/contrate-empresa" element={ <ContrateEmpresa/> } />


            </Routes>
        
        </BrowserRouter>

    )                         

}

export default RoutesApp;