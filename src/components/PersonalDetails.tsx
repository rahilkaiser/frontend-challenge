import {Link} from "react-router-dom";

export const PersonalDetails = () => {
    return (
        <div>
            <Link to="/">
                Go Back
            </Link>
            PersonalDetails
            <Link to={'/salary-details'}> Next</Link>
        </div>
    );
};
