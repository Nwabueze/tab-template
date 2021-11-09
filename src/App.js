import './App.css';
import PermanentDrawerLeft from './pages/dashboard';
import { StoreProvider } from './utils/Store';

function App() {
  return (
    <StoreProvider>
      <PermanentDrawerLeft />
    </StoreProvider>
  );
}

export default App;
