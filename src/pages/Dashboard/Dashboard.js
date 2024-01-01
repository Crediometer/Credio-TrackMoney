import "./Dashboard.css"
import { useState } from 'react';
import avatar1 from '../../assets/images/user/avatar-1.jpg'
import avatar2 from '../../assets/images/user/avatar-2.jpg'
import avatar3 from '../../assets/images/user/avatar-3.jpg'
import Calendar from "../../Component/Calendar/Calendar";
import { FaCalendar } from "react-icons/fa";
import { ca } from "date-fns/locale";
const Dashboard = () => {
    const [show, setShow] = useState(1);
    const [calender, setcalendar] = useState(false)
    const handletoggle = ()=>{
        setcalendar(!calender)
    }
    const handleSuccess = ()=>{
        setShow(1)
    }
    const handleUnsuccess = ()=>{
        setShow(2)
    }
    const handleAll = ()=>{
        setShow(3)
    }
    return ( 
        <div className="dashboard">
             {/* <div class="loader-bg">
                <div class="loader-track">
                    <div class="loader-fill"></div>
                </div>
            </div> */}
            {/* <!-- [ Pre-loader ] End -->
            <!-- [ navigation menu ] start --> */}
         
            {/* <!-- [ navigation menu ] end -->

            <!-- [ Header ] start --> */}
           
            {/* <!-- [ Header ] end -->

            <!-- [ Main Content ] start --> */}
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            {/* <!-- [ breadcrumb ] start -->

                            <!-- [ breadcrumb ] end --> */}
                            <div class="main-body">
                                <div class="page-wrapper">
                                    {/* <!-- [ Main Content ] start --> */}
                                    <div class="row">
                                        {/* <!--[ daily sales section ] start--> */}
                                        <div class="col-md-6 col-xl-4">
                                            <div class="card daily-sales">
                                                <div class="card-block">
                                                    <h6 class="mb-4">Daily Sales</h6>
                                                    <div class="row d-flex align-items-center">
                                                        <div class="col-9">
                                                            <h3 class="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 249.95</h3>
                                                        </div>

                                                        <div class="col-3 text-right">
                                                            <p class="m-b-0">67%</p>
                                                        </div>
                                                    </div>
                                                    <div class="progress m-t-30" style={{height: "7px"}}>
                                                        <div class="progress-bar progress-c-theme" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!--[ daily sales section ] end-->
                                        <!--[ Monthly  sales section ] starts--> */}
                                        <div class="col-md-6 col-xl-4">
                                            <div class="card Monthly-sales">
                                                <div class="card-block">
                                                    <h6 class="mb-4">Monthly Sales</h6>
                                                    <div class="row d-flex align-items-center">
                                                        <div class="col-9">
                                                            <h3 class="f-w-300 d-flex align-items-center  m-b-0"><i class="feather icon-arrow-down text-c-red f-30 m-r-10"></i>$ 2.942.32</h3>
                                                        </div>
                                                        <div class="col-3 text-right">
                                                            <p class="m-b-0">36%</p>
                                                        </div>
                                                    </div>
                                                    <div class="progress m-t-30" style={{height: "7px"}}>
                                                        <div class="progress-bar progress-c-theme2" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--[ Monthly  sales section ] end-->
                                        <!--[ year  sales section ] starts--> */}
                                        <div class="col-md-12 col-xl-4">
                                            <div class="card yearly-sales">
                                                <div class="card-block">
                                                    <h6 class="mb-4">Yearly Sales</h6>
                                                    <div class="row d-flex align-items-center">
                                                        <div class="col-9">
                                                            <h3 class="f-w-300 d-flex align-items-center  m-b-0"><i class="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 8.638.32</h3>
                                                        </div>
                                                        <div class="col-3 text-right">
                                                            <p class="m-b-0">80%</p>
                                                        </div>
                                                    </div>
                                                    <div class="progress m-t-30" style={{height: "7px"}}>
                                                        <div class="progress-bar progress-c-theme" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--[ year  sales section ] end-->
                                        <!--[ Recent Users ] start--> */}
                                        <div className="transaction-outer">
                                            <div class="trans-header">
                                                <h5>Transaction</h5>
                                            </div>
                                            <div className="trans-filter">
                                                <div className="trans-calendar">
                                                    <div onClick={handletoggle} className="trans-calender">
                                                        <p>Date Range <span><FaCalendar/></span></p>
                                                    </div>
                                                    {calender && <Calendar/>}
                                                </div>
                                                <div className="trans-download">
                                                    <select>
                                                        <option>Download Statement</option>
                                                        <option>Excel</option>
                                                        <option>PDF</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xl-16 col-md-12 m-b-30">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item" onClick={handleSuccess}>
                                                    <a className={show === 1 ? `nav-link active show`: 'nav-link'}  id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Successful</a>
                                                </li>
                                                <li class="nav-item" onClick={handleUnsuccess}>
                                                    <a  className={show === 2 ? `nav-link active show`: 'nav-link'}  id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Unsuccessful</a>
                                                </li>
                                                <li class="nav-item" onClick={handleAll}>
                                                    <a className={show === 3 ? `nav-link active show`: 'nav-link'}  id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Withdrawal</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div className={show === 1 ? `tab-pane fade active show`: 'tab-pane fade'} id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <table class="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Activity</th>
                                                                <th>Time</th>
                                                                <th>Status</th>
                                                                <th class="text-right"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle m-r-10" style={{width:"40px"}} src={avatar1} alt="activity-user"></img>Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">3:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar2} alt="activity-user"></img>Albert Andersen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">Jumps over the lazy</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">2:37 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-red">Missed</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar3} alt="activity-user"></img>Silje Larsen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">Dog the quick brown</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">10:23 AM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-purple">Delayed</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-purple f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar2} alt="activity-user"></img>Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">4:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className={show === 2 ? `tab-pane fade active show`: 'tab-pane fade'} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <table class="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Activity</th>
                                                                <th>Time</th>
                                                                <th>Status</th>
                                                                <th class="text-right"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar2} alt="activity-user"></img>Albert Andersen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">Jumps over the lazy</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">2:37 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-red">Missed</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle m-r-10" style={{width:"40px"}} src={avatar1} alt="activity-user"></img>Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">3:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar1} alt="activity-user"></img>Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">4:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar3} alt="activity-user"></img>Silje Larsen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">Dog the quick brown</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">10:23 AM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-purple">Delayed</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-purple f-10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className={show === 3 ? `tab-pane fade active show`: 'tab-pane fade'} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                    <table class="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Activity</th>
                                                                <th>Time</th>
                                                                <th>Status</th>
                                                                <th class="text-right"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar3} alt="activity-user"></img>Silje Larsen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">Dog the quick brown</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">10:23 AM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-purple">Delayed</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-purple f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle m-r-10" style={{width:"40px"}} src={avatar1} alt="activity-user"></img>Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">3:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar2} alt="activity-user"></img>Albert Andersen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">Jumps over the lazy</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">2:37 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-red">Missed</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar1} alt="activity-user"></img>Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0">4:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 class="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!--[ Recent Users ] end-->

                                       
                                       
                                        {/* <!-- [ rating list ] end--> */}
                                       

                                    </div>
                                    {/* <!-- [ Main Content ] end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;