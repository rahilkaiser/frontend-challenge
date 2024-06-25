import { FormCard } from "./core/FormCard";
import { BackButton } from "./core/BackButton";
import {CustomInputField} from "./core/CustomInputField.tsx";

export const PersonalDetails = () => {
    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/'}/>
            <FormCard href={'/salary-details'}>
                <h2 className="text-xl font-semibold text-center">Enter Your Personal Details</h2>
                <CustomInputField label={"Forename"} key={"forename"}></CustomInputField>
                <CustomInputField label={"Surname"} key={"surname"}></CustomInputField>
                <CustomInputField label={"E-Mail"} key={"mail"}></CustomInputField>
                <CustomInputField label={"Phone number"} key={"phone"}></CustomInputField>
            </FormCard>
        </div>
    );
};
