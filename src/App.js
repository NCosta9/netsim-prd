import RoutesApp from './routes';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-TCLL96Z'
}
TagManager.initialize(tagManagerArgs)


function App() {

  window.dataLayer.push({
    event: 'pageview',

  });
  return (


    <>
      <RoutesApp />

    </>

  );
}

export default App;