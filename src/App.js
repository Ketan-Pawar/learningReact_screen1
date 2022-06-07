import './App.css';
import React, { Component } from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";



class App extends Component {
  render() {
    return (
      <div className="App">
        <FiArrowLeft className='FiArrowLeft' size={30} /> 
        <AiOutlineEllipsis className='AiOutlineEllipsis' size={30} />
        {/* <h1>First React App</h1> */}
        <div className='Scroll'>
          <div>
            <Header bankName="HDFC" bankNumber="#######6734" rupees="₹77,630"/>
          </div>
          <div>
            <Header bankName="ICICI" bankNumber="#######8646" rupees="₹88,630"/>
          </div>
          <div>
            <Header bankName="SBI" bankNumber="#######8668" rupees="₹86,679"/>
          </div>
          <div>
            <Header bankName="PNB" bankNumber="#######8646" rupees="₹46,985"/>
          </div>
        </div>
        <hr className='solid'></hr>
        <div className='spending'>
            <p>Spending/Income</p>
            <p>₹14502/₹24999</p>
        </div>

        <div id='progressbar'>
            <div></div>
        </div>
        <hr className='solid'></hr>
        <Footer />
        <BsFillPlusCircleFill className="BsFillPlusCircleFill" size={50}/>
      </div>
    );
  }
  
}

export default App;
