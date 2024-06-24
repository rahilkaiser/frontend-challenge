import {Link} from "react-router-dom";
import {FormCard} from "./core/FormCard.tsx";

import {BackButton} from "./core/BackButton.tsx";

export const PersonalDetails = () => {
    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/'}/>
            <div>
                <FormCard href={'/salary-details'}>
                    Personal Details
                </FormCard>
            </div>
        </div>
    );
};
