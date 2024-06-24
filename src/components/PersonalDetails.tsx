import {Link} from "react-router-dom";

export const PersonalDetails = () => {
    return (
        <div>
            <Link to="/" className="link-class">
                Go Back
            </Link>
            PersonalDetails
            <Link to={'/salary-details'}> Next</Link>
        </div>
    );
};
