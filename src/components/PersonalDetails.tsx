import {FormCard} from "./core/FormCard";
import {BackButton} from "./core/BackButton";
import {CustomInputField} from "./core/CustomInputField.tsx";
import useStore from "../store/userStore.tsx";

export const PersonalDetails = () => {
    const { userDetails, setUserDetails } = useStore();

    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/'}/>
            <FormCard href={'/salary-details'}>
                <h2 className="text-xl font-semibold text-center">Enter Your Personal Details</h2>
                <CustomInputField
                    label={"Forename"}
                    key={"forename"}
                    value={userDetails.forename}
                    onChange={(e) => {
                        setUserDetails({ forename: e.target.value });
                    }}
                ></CustomInputField>
                <CustomInputField label={"Surname"}
                                  key={"surname"}
                                  value={userDetails.surname}
                                  onChange={(e) => {
                                      setUserDetails({ surname: e.target.value });
                                  }}
                ></CustomInputField>
                <CustomInputField label={"E-Mail"}
                                  key={"mail"}
                                  value={userDetails.email}
                                  onChange={(e) => {
                                      setUserDetails({ email: e.target.value });
                                  }}
                ></CustomInputField>
                <CustomInputField label={"Phone number"}
                                  key={"phone"}
                                  value={userDetails.phoneNumber}
                                  onChange={(e) => {
                                      setUserDetails({ phoneNumber: e.target.value });
                                  }}
                ></CustomInputField>
            </FormCard>
        </div>
    );
};
