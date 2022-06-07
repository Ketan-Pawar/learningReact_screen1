// import React, { Component } from 'react';
// // import { Tabs, Tab } from 'react-tab-view';
// // import Footer from './footer/inside-footer';
// import './footer.css';

// class Footer extends Component {
//     render() {
//         return (
//             <div className="footer">
//                <p className="inline">All</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                <p className="inline">HDFC</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                <p className="inline">ICICI</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                <p className="inline">SBI</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
//                <insideFooter />
//                {/* <div className="insideFooter">
//                    <p>HDFC</p>
//                    <p>xxxxxxx6734</p>
//                </div> */}
//             </div>
//         );
//     }
    
// };

// import { Tabs, Tab } from 'react-tab-view'
// import ReactDOM from 'react-dom'
// import React, { Component } from 'react'
 
// class Footer extends Component {
//   handleChange(e) {
//     this.setState({ value: e })
//     console.log(e)
//   }
 
//   render() {
//     const footers = ['All', 'HDFC', 'ICICI', 'SBI']
 
//     return (
//       <div>
//         <Tabs footers={footers}>
//           <Tab>
//             <div>
//             <p>HDFC</p>
//             <p>xxxxxxx6734</p>
//             </div>
//           </Tab>
//           <Tab>
//             <p>ICICI</p>
//             <p>xxxxxxx6734</p>
//           </Tab>
//           <Tab>
//             <p>SBI</p>
//             <p>xxxxxxx6734</p>
//           </Tab>
//         </Tabs>
//       </div>
//     )
//   }
// }
 
// ReactDOM.render(<Footer />, document.getElementById('root'))

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './footer.css';
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Footer = () => (
    <Tabs>
      <TabList>
        <Tab>All</Tab>
        <Tab>HDFC</Tab>
        <Tab>ICICI</Tab>
        <Tab>SBI</Tab>
      </TabList>
  
      <TabPanel>
          <div className='content-1'>
            <div className='content-1-2'>
                <p>HDFC</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4 className='rsfont'>₹11030</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>HDFC</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogOut />
                </div>
                <div className='content-3'>
                    <h4>₹425.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4>₹425.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>SBI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4>₹425.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogOut />
                </div>
                <div className='content-3'>
                    <h4>₹425.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
          </div>
      </TabPanel>

      <TabPanel>
          <div className='content-1'>
            <div className='content-1-2'>
                <p>SBI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4 className='rsfont'>₹11030</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogOut />
                </div>
                <div className='content-3'>
                    <h4>₹234.43</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>HDFC</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4>₹425.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>HDFC</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4>₹3453.34</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogOut />
                </div>
                <div className='content-3'>
                    <h4>₹7545.64</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
          </div>
      </TabPanel>

      <TabPanel>
          <div className='content-1'>
            <div className='content-1-2'>
                <p>HDFC</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4 className='rsfont'>₹11030</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>HDFC</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogOut />
                </div>
                <div className='content-3'>
                    <h4>₹6756.34</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>SBI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4>₹234.67</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4>₹4567.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogOut />
                </div>
                <div className='content-3'>
                    <h4>₹4567.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
          </div>
      </TabPanel>

      <TabPanel>
          <div className='content-1'>
            <div className='content-1-2'>
                <p>HDFC</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4 className='rsfont'>₹22133</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>SBI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogOut />
                </div>
                <div className='content-3'>
                    <h4>₹425.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4>₹9778.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogIn />
                </div>
                <div className='content-3'>
                    <h4>₹9765.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
            <div className='content-1-2'>
                <p>ICICI</p>
                <p>xxxxxxx6734</p>
                <div className='login1 '>
                    <FiLogOut />
                </div>
                <div className='content-3'>
                    <h4>₹425.24</h4>
                    <h5>ABC Store</h5>
                    <h6>June 1, 2021</h6>
                </div>
            </div>
          </div>
      </TabPanel>



    </Tabs>
  );
    

export default Footer;