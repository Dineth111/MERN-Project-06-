import { useState } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import EmployeeList from './components/EmployeeList';
import InsertEmployee from './components/InsertEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowEmployeeDetels from './components/showEmployeeDetels';
import Updateemploye from'./components/Updateemployee';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<EmployeeList />} />
          <Route path='/insert' element={<InsertEmployee />} />
          <Route path='/showdetels/:id' element={<ShowEmployeeDetels/>}/>
          <Route path='/updatadetels/:id' element={<Updateemploye/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;