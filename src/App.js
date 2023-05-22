import './App.css';
//import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//import NewOrderPage from './pages/NewOrderPage/NewOrderPage.js';
import AuthPage from './pages/AuthPage/AuthPage.js';
//import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage.js';
//import NavBar from './components/NavBar/NavBar';
//import {getUser} from './utilities/users-service';
//import { dividerClasses } from '@mui/material';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LogsPage from './pages/LogsPage/LogsPage';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>

      <section>
        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route  path='/posts' element={<LogsPage />}/>
          <Route  path='/auth' element={<AuthPage />}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;

//  {
//   const [user, setUser] = useState(getUser());
//   return (
//     <main className="App">
//       {user ? (
//         <>
//         <NavBar  user = {user} setUser={setUser}/> 
//         <Routes>
//           <Route path="/orders/new" element={<NewOrderPage />} />
//           <Route path="/orders" element={<OrderHistoryPage />} />
//         </Routes>
//         </>
//        ) : (
//         <AuthPage  setUser={setUser}/>
//       )} 
//     </main>
//   );
// }
