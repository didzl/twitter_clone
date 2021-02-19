import { React, useState } from "react";
import { Router } from 'react-router-dom';
import AppRouter from 'components/Router';
import { authService } from "Myfirebase";


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn = {isLoggedIn}/>
      <footer>&copy; TwitterClone{new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
