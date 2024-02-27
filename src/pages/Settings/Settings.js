import "./Settings.css"
import { FiCopy } from "react-icons/fi";
const Settings = () => {
    return ( 
        <div className="settings">
            <div className="settings-top">
                <div className="settings-nav">
                    <p>Keys</p>
                </div>
            </div>
            <div className="setting-body">
                <div className="settings-inner">
                    <h3>Bearer Token</h3>
                    <div className="settings-input">
                        <input
                            type="text"
                        >
                        </input>
                        <button>Copy<FiCopy/></button>
                    </div>
                </div>
                <div className="settings-inner">
                    <h3>Web Hook</h3>
                    <div className="settings-input">
                        <input
                            type="text"
                        >
                        </input>
                        <button>Copy<FiCopy/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Settings;