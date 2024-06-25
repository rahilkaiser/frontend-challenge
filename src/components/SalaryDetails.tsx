import {Link} from "react-router-dom";
import {BackButton} from "./core/BackButton.tsx";
import {FormCard} from "./core/FormCard.tsx";
import {useState} from "react";


export const SalaryDetails = () => {

    const salaryOptions = [
        {label: '0 - 1,000', value: '0-1000'},
        {label: '1,000 - 2,000', value: '1000-2000'},
        {label: '2,000 - 3,000', value: '2000-3000'},
        {label: '3,000 - 4,000', value: '3000-4000'},
        {label: 'More than 4,000', value: 'more-4000'}
    ];

    const [selected, setSelected] = useState('');

    const handleChange = (value: string) => {
        setSelected(value);
    };

    return (
        <div className="mx-14 mt-8">
            <BackButton href={'/personal-details'}/>
            <FormCard href={'/summary'}>
                <h2 className="text-xl font-semibold ">Choose Your Salary Range</h2>
                <div className="flex flex-col items-start  space-y-4 cursor-pointer">
                    {salaryOptions.map((option, index) => (
                        <label key={index} className="flex items-center space-x-2 justify-start cursor-pointer">
                            <input
                                type="radio"
                                name="salary"
                                value={option.value}
                                checked={selected === option.value}
                                onChange={() => handleChange(option.value)}
                                className="appearance-none w-6 h-6 rounded-full  border-4 border-gray-300 checked:border-black transition duration-300 ease-in-out relative  after:absolute after:inset-0 after:rounded-full after:border-2 after:border-white after:scale-0 checked:after:scale-100 after:transition-transform after:duration-300 after:bg-black after:opacity-50"
                            />
                            <div className={`relative text-gray-700`}>
                                {option.label}
                                <span
                                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 ease-in-out ${selected === option.value ? 'w-full' : 'w-0'}`}></span>
                            </div>
                        </label>
                    ))}</div>
            </FormCard>
        </div>
    );
};
