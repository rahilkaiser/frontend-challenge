import {BackButton} from "./core/BackButton.tsx";
import {FormCard} from "./core/FormCard.tsx";
import useStore from "../store/userStore.tsx";


export const Summary = () => {
    const {
        userDetails,
        selectedSalaryRange
    } = useStore();


    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/salary-details'}/>
            <FormCard isFinalSubmissionButton={true} onSubmit={()=> {}}>
                <h2 className="text-xl font-semibold ">Summary of Your Details</h2>
                <div className="space-y-3 text-start mx-auto">
                    <p><strong className="text-gray-600">Forename:</strong> {userDetails.forename}</p>
                    <p><strong className="text-gray-600">Surname:</strong> {userDetails.surname}</p>
                    <p><strong className="text-gray-600">Email:</strong> {userDetails.email}</p>
                    <p><strong className="text-gray-600">Phone:</strong> {userDetails.phoneNumber}</p>
                    <p><strong className="text-gray-600">Salary Range:</strong> {selectedSalaryRange}</p>
                </div>
            </FormCard>
        </div>
    );
};
