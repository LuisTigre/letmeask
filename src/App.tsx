
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';


import { AuthContextProvider } from './contexts/AuthContext'

console.log(AuthContextProvider)


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />     
      </AuthContextProvider>             
    </BrowserRouter>
  );
}

export default App;
