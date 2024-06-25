import {BackButton} from "./core/BackButton.tsx";
import {FormCard} from "./core/FormCard.tsx";


export const Summary = () => {

    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/salary-details'}/>
            <FormCard href={null}>
                <h2 className="text-xl font-semibold ">Summary of Your Details</h2>
                <div className="space-y-3 text-start mx-auto">
                    <p><strong className="text-gray-600">Forename:</strong> Rahil</p>
                    <p><strong className="text-gray-600">Surname:</strong> Kaiser</p>
                    <p><strong className="text-gray-600">Email:</strong> kaiser@example.com</p>
                    <p><strong className="text-gray-600">Phone:</strong> +49 178 577 4742</p>
                    <p><strong className="text-gray-600">Salary Range:</strong> 2000 - 3000</p>
                </div>
            </FormCard>
        </div>
    );
};
