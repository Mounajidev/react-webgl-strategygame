import logo from './logo.svg';
import { Unity, useUnityContext } from "react-unity-webgl";

import './App.css';

function App() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "build/WebGL NoCompresion.loader.js",
    dataUrl: "build/WebGL NoCompresion.data",
    frameworkUrl: "build/WebGL NoCompresion.framework.js",
    codeUrl: "build/WebGL NoCompresion.wasm",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <t1 className="Text-tittle"> Turn Based Strategy Game Prototype </t1>
      </header>

      <div className='Unity-container'>

      <Unity unityProvider={unityProvider} style={{ width: 1280, height: 740 }} />
      </div>
    </div>
  );
}

export default App;
