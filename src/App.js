import React from 'react'
import Layout from './routes/Layout';
import {store} from './Config/StoreConfig'
import {Provider} from 'react-redux'
import AuthContext from './Auth/AuthContext';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const clientQuery = new QueryClient();
const App = () => {

  return (
    <QueryClientProvider client={clientQuery}>
    <Provider store={store}>
      <ToastContainer
        autoClose={3000}
        style={{ width: 250 }}
        position="bottom-left"
        hideProgressBar={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <AuthContext>
      <Layout/>
      </AuthContext>
    </Provider>
    </QueryClientProvider>
  )
}

export default App