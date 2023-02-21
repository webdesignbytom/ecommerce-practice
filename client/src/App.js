// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Store from './pages/Store';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
// Components
import NavbarComponent from './nav/Navbar';
// Bootstrap
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Store />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </NavbarComponent>
    </Container>
  );
}

export default App;
