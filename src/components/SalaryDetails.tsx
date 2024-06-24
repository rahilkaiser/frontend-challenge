import {Link} from "react-router-dom";


export const SalaryDetails = () => {
    return (
        <div>
            <Link to="/personal-details">
                Go Back
            </Link>
            SalaryDetails
            <Link to={'/summary'}> Next</Link>
        </div>
    );
};
