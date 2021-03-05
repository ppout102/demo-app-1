import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';


function App1(props: any) {

  return (
    <Provider store={store}>
      <React.StrictMode>
        {props.children}
        <span>learn react</span>
      </React.StrictMode>
    </Provider>
  );
}


export default App1;