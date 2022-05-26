import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GeneratorProvider } from './context/GeneratorContext';
import GlobalStyle from './styles/global';
import BorderGenerator from './components/BorderGenerator';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <GeneratorProvider>
        <BorderGenerator />
      </GeneratorProvider>
      <ToastContainer autoClose={2000} />
    </>
  );
}
