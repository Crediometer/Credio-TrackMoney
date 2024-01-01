import { Outlet } from "react-router-dom";
import './Layout.css';
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Modal from "../modal/Modal";
import { useState } from "react";

const Layout = () => {
    const [modal, setModal] = useState(false)

    const toggle = ()=>{
        setModal(!modal)
    }
    return ( 
        <div className="layout">
            <div className="layout-left">
                <Sidebar togglemodal={toggle}/>
            </div>
            <div className="layout-right">
                <Navbar/>
                <div className="layout-main">
                    <Outlet/>
                </div>
            </div>
            {modal && (<Modal togglemodal={toggle}/>)}
        </div>
    );
}
 
export default Layout;