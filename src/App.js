import React from 'react';
import './App.css';

import {store} from "./redux/store";
import { Provider } from 'react-redux';
import DCandidates from './components/donation-candidate.component';
import {Container} from "@material-ui/core"
import { ToastProvider } from "react-toast-notifications";
import Header from "./pages/header.page";

function App() {
  return (
   <Provider store ={store}>     
    <Container maxWidth="lg">
      <Header/>
      <ToastProvider 
        autoDismiss
        autoDismissTimeout={6000}
        placement="top-center">
      <DCandidates/>
      </ToastProvider>
    </Container>
   </Provider>
  );
}

export default App;
