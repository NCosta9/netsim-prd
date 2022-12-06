import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cobertura from './pages/Cobertura';
import Fibra from './pages/Fibra';
import AreaCliente from './pages/AreaCliente';
import Lite from './pages/Forms/FormsFibra/Lite';
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
                <Route path="/lite" element={ <Lite/> } />

            </Routes>
        
        </BrowserRouter>

    )                         

}

export default RoutesApp;