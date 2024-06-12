import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import MyList from './components/todolist';
import { useState, createContext } from 'react';

export const ThemeContext = createContext();

function App() {

  const [IsDark, setIsDark] = useState(true);
  const [Bgclass, setBgclass] = useState('bg-dark');
  return (
    <>
      <ThemeContext.Provider value={{IsDark , setIsDark, Bgclass, setBgclass}}>
        <Header />
        <MyList />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
