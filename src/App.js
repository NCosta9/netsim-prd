import RoutesApp from './routes';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'G-F721L70WTZ'
}
TagManager.initialize(tagManagerArgs)


function App() {

  return (


    <>
      <RoutesApp />

    </>

  );
}

export default App;