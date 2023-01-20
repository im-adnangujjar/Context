import './App.css';
import Navigation from './component/navigation/Navigation';
// import { ThemeProvider } from 'styled-components';
import { AppProvider } from './context/Context';

function App() {

  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

export default App;
