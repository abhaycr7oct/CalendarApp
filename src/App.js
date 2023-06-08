import './App.css';
import React from 'react';
import Calendar from './components/Calendar';
import './components/styles.css'


const App = () => {
  const someDate = new Date(2023, 5, 15); 
  return (
    
    
    <div className="container">
        <h1>Calendar App</h1>
      <Calendar date={someDate} />
    </div>
    
  );
};

export default App;