import React from 'react';

import GlobalStyle from './styles/global';
import SigIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SigIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
