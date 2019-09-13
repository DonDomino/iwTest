import React from 'react';
import './App.css';
import Posts from './components/Posts';

function App() {
  return (    
    <React.Fragment>
      <div className="container">      
        <div className="main">
          <div className="imageContainer">
            <img src='http://ideaware.co/wp-content/uploads/2018/02/logolb.png' alt=""></img>
          </div>
          <Posts />
        </div>
      </div>
      <footer className="footer">
        <span>2019 &copy; Mandrake Devs Studio. </span>
        <span>Las marcas registradas y logotipos aquí mostrados son propiedad de sus respectivos dueños y son utilizadas únicamente con fines enunciativos</span>
      </footer>
    </React.Fragment>
  );
}

export default App;
