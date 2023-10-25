import React from 'react'
import Layout from './routes/Layout';
import {store} from './Config/StoreConfig'
import {Provider} from 'react-redux'
import AuthContext from './Auth/AuthContext';


const App = () => {

  return (
    <Provider store={store}>
      <AuthContext>
      <Layout/>
      </AuthContext>
    </Provider>
  )
}

export default App