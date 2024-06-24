import {useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';

const steps = [
    {name: "Personal Details", path: "/personal-details"},
    {name: "Salary Details", path: "/salary-details"},
    {name: "Summary", path: "/summary"}
];

export const ProgressIndicator = () => {
    const location = useLocation();
    const currentStep = steps.findIndex(step => step.path === location.pathname);
    const lineWidth = `${((80 / (steps.length - 1)) * currentStep)}%`;

    return (
        <div className="flex justify-between items-center w-full max-w-2xl mx-auto px-4 mt-16 relative">
            <div className="absolute top-1/3 transform h-0.5 w-full mx-14">
                <motion.div
                    className="h-0.5 bg-black "
                    initial={{width: '0%'}}
                    animate={{width: lineWidth}}
                    transition={{duration: 0.8, ease: "easeInOut"}}
                />
            </div>
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-1000 
                                    ${index <= currentStep ? 'bg-black border-black text-white' : 'bg-white border-gray-300 text-gray-500'}`}>
                        {index + 1}
                    </div>
                    <div className="text-xs uppercase mt-2 text-gray-700">{step.name}</div>
                </div>
            ))}
        </div>
    );
};
