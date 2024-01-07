import { FormattedNumber, IntlProvider } from "react-intl";
const Card = ({title, value}) => {
    return ( 
        <div className="col-md-6 col-xl-3">
            <div className="card yearly-sales">
                <div className="card-block">
                    <h6 className="mb-4">{title}</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <IntlProvider>
                            {" "}
                            <h3 className="f-w-300 d-flex align-items-center  m-b-0">{value}</h3>
                            </IntlProvider>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;