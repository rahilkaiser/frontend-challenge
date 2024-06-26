import {BackButton} from "./core/BackButton.tsx";
import {FormCard} from "./core/FormCard.tsx";
import useStore from "../store/userStore.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


export const SalaryDetails = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const salaryOptions = [
        {label: '0 - 1,000', value: '0-1000'},
        {label: '1,000 - 2,000', value: '1000-2000'},
        {label: '2,000 - 3,000', value: '2000-3000'},
        {label: '3,000 - 4,000', value: '3000-4000'},
        {label: 'More than 4,000', value: 'more than 4000'}
    ];

    const { selectedSalaryRange, setSelectedSalaryRange } = useStore();
    const handleChange = (value: string) => {
        setSelectedSalaryRange(value);
        setError('');
    };

    const handleSubmit = () => {
        if (!selectedSalaryRange) {
            setError('At least one salary range must be selected');
            return;
        }
        navigate('/summary');
    };


    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/personal-details'}/>
            <FormCard onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold ">Choose Your Salary Range</h2>
                <div className="flex flex-col items-start  space-y-4 cursor-pointer">
                    {salaryOptions.map((option, index) => (
                        <label key={index} className="flex items-center space-x-2 justify-start cursor-pointer">
                            <input
                                type="radio"
                                name="salary"
                                value={option.value}
                                checked={selectedSalaryRange === option.value}
                                onChange={() => handleChange(option.value)}
                                className="appearance-none w-6 h-6 rounded-full  border-4 border-gray-300 checked:border-black transition duration-300 ease-in-out relative  after:absolute after:inset-0 after:rounded-full after:border-2 after:border-white after:scale-0 checked:after:scale-100 after:transition-transform after:duration-300 after:bg-black after:opacity-50"
                            />
                            <div className={`relative text-gray-700`}>
                                {option.label}
                                <span
                                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 ease-in-out ${selectedSalaryRange === option.value ? 'w-full' : 'w-0'}`}></span>
                            </div>
                        </label>
                    ))}
                    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>

            </FormCard>
        </div>
    );
};
