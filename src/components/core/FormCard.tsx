import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {motion} from "framer-motion";

interface FormCardProps {
    onSubmit: () => void;
    isFinalSubmissionButton?: boolean
}

export const FormCard: React.FC<FormCardProps> = ({children, onSubmit, isFinalSubmissionButton}) => {

    const handleClick = () => {
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, ease: "easeInOut"}}
            className="max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-lg bg-white flex flex-col space-y-12 text-center font-inter">
            {children}
            {
                <button
                    onClick={handleClick}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-75 transition duration-300">
                    {isFinalSubmissionButton ? 'Submit' : 'Continue'}
                    {isFinalSubmissionButton ? '' : <FontAwesomeIcon className={"px-2"} icon={faArrowRight}/>}
                </button>

            }

        </motion.div>
    );
};
