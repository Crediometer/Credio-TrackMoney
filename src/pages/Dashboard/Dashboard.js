import "./Dashboard.css"
import { useEffect, useState } from 'react';
import avatar1 from '../../assets/images/user/avatar-1.jpg'
import avatar2 from '../../assets/images/user/avatar-2.jpg'
import avatar3 from '../../assets/images/user/avatar-3.jpg'
import Calendar from "../../Component/Calendar/Calendar";
import { FaCalendar } from "react-icons/fa";
import { ca } from "date-fns/locale";
import Card from "../../Component/Card/Card";
import { fetchoverview, fetchtransaction } from "../../Redux/Transaction/TransactionAction";
import { connect } from "react-redux";
import { fetchstatement } from "../../Redux/Statement/StatementAction";
import LottieAnimation from "../../Lotties";
import Loader from "../../assets/loading.json";
import { FormattedNumber, IntlProvider } from "react-intl";
import Errormodal from "../../Component/modal/Errormodal";
const Dashboard = ({fetchtransaction, fetchstatement,fetchoverview,transaction, loading, error,overview}) => {
    const [show, setShow] = useState(1);
    const [calender, setcalendar] = useState(false)
    const [loader, setLoader] = useState(false)
    const [dropdown, setDropdown] = useState(false)
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
    const handleDropdown = () =>{
        setDropdown(!dropdown)
    }
    const handlepdf = () =>{
        fetchstatement('pdf',()=>{
            setLoader(false)
        })
        setLoader(true)
    }
    const handleexcel = () =>{
        fetchstatement('excel', ()=>{
            setLoader(false)
        })
        setLoader(true)
    }
    useEffect(()=>{
        fetchtransaction();
        fetchoverview();
    },[])
    return ( 
        <>
            {loading ?(
                <div className="modal-background">
                    <div className="preloader">
                        <LottieAnimation data={loader} />
                    </div>
                </div>
                
            ):(
                <>
                    {error ? (
                        <div className="err">
                            <Errormodal error={error} link='/'/>
                        </div>
                    ): (
                        <div className="dashboard">
                            <div class="pcoded-main-container">
                                <div class="pcoded-wrapper">
                                    <div class="pcoded-content">
                                        <div class="pcoded-inner-content">
                                            <div class="main-body">
                                                <div class="page-wrapper">
                                                    {/* <!-- [ Main Content ] start --> */}
                                                    <div class="row">
                                                        <Card title="Account Balance" value={
                                                            <FormattedNumber
                                                            value={
                                                                overview.accountBalance
                                                            }
                                                            style="currency"
                                                            currency="NGN"
                                                        />
                                                        }/>
                                                        <Card title="Daily Transaction" value={
                                                            <FormattedNumber
                                                            value={
                                                                overview.today
                                                            }
                                                            style={`currency`}
                                                            currency="NGN"
                                                        />
                                                        }/>
                                                        <Card title="Total Transactions" value={
                                                            <FormattedNumber
                                                            value={
                                                                overview.totalTransaction
                                                            }
                                                            style={`currency`}
                                                            currency="NGN"
                                                        />
                                                        }/>
                                                        <Card title="Account Number" value={overview.accountNumber}/>
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
                                                                    {calender && <Calendar close={handletoggle}/>}
                                                                </div>
                                                                <div className="trans-download">
                                                                    <button  onClick={handleDropdown}>Download Statement</button>
                                                                    {dropdown && (
                                                                        <div className="download-dropdown">
                                                                            {(!loader) ? (
                                                                                <div>
                                                                                    <div className="file-type" onClick={handlepdf}>
                                                                                    
                                                                                        <p>PDF</p>
                                                                                    </div>
                                                                                    <div className="file-type" onClick={handleexcel}>
                                                                                    
                                                                                        <p>Excel</p>
                                                                                    </div>
                                                                                </div>
                                                                            ): (
                                                                            <LottieAnimation />
                                                                            )}
                                                                        
                                                                        </div>
                                                                    )}
                                                                    {/* <select>
                                                                        <option>Download Statement</option>
                                                                        <option onClick={handleexcel}>Excel</option>
                                                                        <option onClick={handleexcel}>PDF</option>
                                                                    </select> */}
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
                                                                                <th>From</th>
                                                                                <th>To</th>
                                                                                <th>Amount</th>
                                                                                <th>balance</th>
                                                                                <th class="text-right"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {transaction.map((transaction)=>{
                                                                                return(
                                                                                    <tr>
                                                                                        <td>
                                                                                            <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar2} alt="activity-user"></img>{transaction.from}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0">{transaction.referenceData.creditAccountName}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0">{transaction.amount}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0 text-c-green">{transaction.balance}</h6>
                                                                                        </td>
                                                                                        <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                                                    </tr>
                                                                                )
                                                                            })}
                                                                            
                                                                            
                                                                        </tbody>
                                                                    </table>

                                                                </div>
                                                                <div className={show === 2 ? `tab-pane fade active show`: 'tab-pane fade'} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                                <table class="table table-hover">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>From</th>
                                                                                <th>To</th>
                                                                                <th>Amount</th>
                                                                                <th>balance</th>
                                                                                <th class="text-right"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {transaction.map((transaction)=>{
                                                                                return(
                                                                                    <tr>
                                                                                        <td>
                                                                                            <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar2} alt="activity-user"></img>{transaction.from}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0">{transaction.referenceData.creditAccountName}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0">{transaction.amount}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0 text-c-green">{transaction.balance}</h6>
                                                                                        </td>
                                                                                        <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                                                    </tr>
                                                                                )
                                                                            })}
                                                                            
                                                                            
                                                                        </tbody>
                                                                    </table>

                                                                </div>
                                                                <div className={show === 3 ? `tab-pane fade active show`: 'tab-pane fade'} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                                <table class="table table-hover">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>From</th>
                                                                                <th>To</th>
                                                                                <th>Amount</th>
                                                                                <th>balance</th>
                                                                                <th class="text-right"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {transaction.map((transaction)=>{
                                                                                return(
                                                                                    <tr>
                                                                                        <td>
                                                                                            <h6 class="m-0"><img class="rounded-circle  m-r-10" style={{width:"40px"}} src={avatar2} alt="activity-user"></img>{transaction.from}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0">{transaction.referenceData.creditAccountName}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0">{transaction.amount}</h6>
                                                                                        </td>
                                                                                        <td>
                                                                                            <h6 class="m-0 text-c-green">{transaction.balance}</h6>
                                                                                        </td>
                                                                                        <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>
                                                                                    </tr>
                                                                                )
                                                                            })}
                                                                            
                                                                            
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}


const mapStoreToProps = (state) => {
    console.log(state)
    return {
        loading: state.transaction.loading,
        error: state.transaction.error,
        statement: state.statement,
        transaction: state.transaction.data,
        overview:state.overview.data
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchtransaction: () => dispatch(fetchtransaction()),
        fetchoverview: () => dispatch(fetchoverview()),
        fetchstatement: (type, loader) => dispatch(fetchstatement(type,loader)),
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Dashboard);