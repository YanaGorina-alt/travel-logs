import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//import NewOrderPage from './pages/NewOrderPage/NewOrderPage.js';
import AuthPage from './pages/AuthPage/AuthPage.js';
//import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage.js';
//import NavBar from './components/NavBar/NavBar';
import {getUser} from './utilities/users-service';
//import { dividerClasses } from '@mui/material';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LogsPage from './pages/LogsPage/LogsPage';
import Add  from './pages/LogsPage/Add'
import Profile from './pages/Profile/Profile';
import PostUpdate from './pages/LogsPage/PostUpdate';
//import { useSelector } from 'react-redux';

function App() {
  const [user, setUser] = useState(getUser());
  //const isLoggedIn = useSelector(state=>state.isLoggedIn)
  console.log(setUser,"App")
  return (
    <main className="App">
      {user ? (
      <>
      <header>
        <Header user = {user} setUser={setUser}/>
      </header>

      <section>
        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route  path='/posts' element={<LogsPage  user={user}/>}/>
          <Route  path='/profile/:id' element={<Profile setUser={setUser} user={user} />}/>
          <Route  path='/add' element={<Add />}/>
          <Route  path='/post/:id' element={<PostUpdate />}/>
          {/* <Route  path='/auth' element={<AuthPage setUser={setUser}/>}/> */}
        </Routes>
      </section>
      </>
        ) : (
          <AuthPage  setUser={setUser}/>
        )}
    </main>
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
