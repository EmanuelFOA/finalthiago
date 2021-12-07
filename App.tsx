import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from  './styles/global'


function App() {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
