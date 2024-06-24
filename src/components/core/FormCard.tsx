import {Link} from "react-router-dom";

interface FormCardProps {
    href: string|null;
}

export const FormCard:React.FC<FormCardProps>  = ({ children, href }) => {
    return (
        <div className="max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-lg bg-white flex flex-col">
            {children}
            {href ? <Link to={href} className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-75 transition duration-300">
                Continue
            </Link> : <span className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-75 transition duration-300">
                Submit
            </span>}

        </div>
    );
};
