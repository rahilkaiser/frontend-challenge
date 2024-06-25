import {FormCard} from "./core/FormCard";
import {BackButton} from "./core/BackButton";
import {CustomInputField} from "./core/CustomInputField.tsx";
import useStore from "../store/userStore.tsx";
import {validateEmail, validateForename, validatePhoneNumber, validateSurname} from "../utils/InputValidators.tsx";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

export const PersonalDetails = () => {
    const { userDetails, setUserDetails } = useStore();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        forename: '',
        surname: '',
        email: '',
        phoneNumber: '',
    });

    const handleSubmit = () => {
        const newErrors = {
            forename: validateForename(userDetails.forename),
            surname: validateSurname(userDetails.surname),
            email: validateEmail(userDetails.email),
            phoneNumber: validatePhoneNumber(userDetails.phoneNumber),
        };

        setErrors(newErrors);

        const isValid = Object.values(newErrors).every((error) => error === '');

        if (isValid) {

            navigate('/salary-details');
        }
    };

    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/'}/>
            <FormCard onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold text-center">Enter Your Personal Details</h2>
                <CustomInputField
                    label={"Forename"}
                    key={"forename"}
                    value={userDetails.forename}
                    onChange={(e) => {
                        setUserDetails({ forename: e.target.value });
                    }}
                    errorMessage={errors.forename}
                ></CustomInputField>
                <CustomInputField label={"Surname"}
                                  key={"surname"}
                                  value={userDetails.surname}
                                  onChange={(e) => {
                                      setUserDetails({ surname: e.target.value });
                                  }}
                                  errorMessage={errors.surname}
                ></CustomInputField>
                <CustomInputField label={"E-Mail"}
                                  key={"mail"}
                                  value={userDetails.email}
                                  onChange={(e) => {
                                      setUserDetails({ email: e.target.value });
                                  }}
                                  errorMessage={errors.email}
                ></CustomInputField>
                <CustomInputField label={"Phone number"}
                                  key={"phone"}
                                  value={userDetails.phoneNumber}
                                  onChange={(e) => {
                                      setUserDetails({ phoneNumber: e.target.value });
                                  }}
                                  errorMessage={errors.phoneNumber}
                ></CustomInputField>
            </FormCard>
        </div>
    );
};
