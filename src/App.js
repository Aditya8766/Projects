import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Main from './components/Main';
import Right from './components/Right';
import Hed from './components/Hed';
import './components/header.css';
import './components/hed.css';
import './components/footer.css';
import './components/main.css';
import './components/right.css';
function App() {
  return (
    <div className="maincontainer">
      <Hed></Hed>
      <Header></Header>
      <Main></Main>
      <Right></Right>
      <Footer></Footer>
    </div>
  );
};
export default App;
