import {BackButton} from "./core/BackButton.tsx";
import {FormCard} from "./core/FormCard.tsx";


export const Summary = () => {

    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/salary-details'}/>
            <FormCard href={null}>
                Summary
            </FormCard>

        </div>
    );
};
