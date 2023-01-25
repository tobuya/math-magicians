import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
