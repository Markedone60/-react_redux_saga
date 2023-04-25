import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage';
import ListDetails from './components/list/listDetails';

export default function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id/details" element={<ListDetails />} />
        </Routes>
      </Router>
    </div>
  );
}