import { FormattedNumber, IntlProvider } from "react-intl";
const Card = ({title, value}) => {
    return ( 
        <div class="col-md-6 col-xl-3">
            <div class="card yearly-sales">
                <div class="card-block">
                    <h6 class="mb-4">{title}</h6>
                    <div class="row d-flex align-items-center">
                        <div class="col-9">
                            <IntlProvider>
                            {" "}
                            <h3 class="f-w-300 d-flex align-items-center  m-b-0">{value}</h3>
                            </IntlProvider>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;