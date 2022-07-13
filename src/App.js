import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactImageZoom from 'react-image-zoom';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import GridLayout from 'react-grid-layout';
import tiger from "./images/painting1.png"
import { Routez } from './Routez';
import { Profile } from './pages/Profile';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
import Store from './redux/store';
// import persistor from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// const theme = createMuiTheme({
//   // typography: {
//   //   fontFamily: [
//   //     'Chilanka',
//   //     'cursive',
//   //   ].join(','),
//   // },
//   a: {
//       fontFamily: [
//           'Blanka',
//         ].join(','),
//   }
// });
const props = {
  width: 400, height: 250, zoomWidth: 500,
  img: `${tiger}`, zoomLensStyle: "opacity: 0.4;background-color: gray", zoomPosition: "top"
};

const style = {
  border: "1px solid black"
}



let language = navigator.language.split(/[-_]/)[0]

function App() {
  const {store, persistor} = Store();

  return (
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>

        <div className="App">
          <Routez />
        </div>

        {/* </ChakraProvider> */}
      </PersistGate >
    </Provider>

    //       {/* <div className="container__zoomed_image" style={{marginTop: "200px",
    //     display: "flex",
    //     alignItems: "center"}}>
    //         <div className="container__zoomed_image_content">

    //         <ReactImageZoom {...props} />
    //         </div>
    //       </div> */}
    // {/*   
    //       <TransformWrapper
    //       initialScale={1}
    //       initialPositionX={0}
    //       initialPositionY={0}
    //       >

    //         {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
    //           <div></div>
    //             <div className="tools">
    //             <button onClick={() => zoomIn()}>+</button>
    //                 <button onClick={() => zoomOut()}>-</button>
    //                 <button onClick={() => resetTransform()}>x</button>
    //               </div>
    //             <TransformComponent>
    //               <img src={tiger} alt="test" />
    //             </TransformComponent>
    //           </div>
    //         )}
    //       </TransformWrapper> */}
    //         {/* <GridLayout className="layout" layout={layout} cols={12} width={1200}>
    //           <div key="b" ><img src={tiger}   style={{ userDrag: "none", userSelect: "none", pointerEvents: "none", userDrag: "none"}}  alt="" /></div>
    //           <div key="c" ><img src={tiger} alt="" style={{ userDrag: "none", userSelect: "none", pointerEvents: "none", userDrag: "none"}}  /></div>
    //         </GridLayout> */}

  );
}



export default App;
