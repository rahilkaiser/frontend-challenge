import {Link} from "react-router-dom";
import {BackButton} from "./core/BackButton.tsx";
import {FormCard} from "./core/FormCard.tsx";


export const SalaryDetails = () => {
    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/personal-details'}/>
            <FormCard href={'/summary'}>
                SalaryDetails
            </FormCard>
        </div>
    );
};
