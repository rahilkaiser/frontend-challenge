import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";

interface BackButtonProps {
    href: string;
}
export const BackButton:React.FC<BackButtonProps> = ({href}) => {
    return (
        <>
            <div className="text-start">
                <Link to={href}>
                    <FontAwesomeIcon icon={faArrowLeft} size="1x" className="text-sm text-primary"/>
                    <span className="px-2">Zurück</span>
                </Link>
            </div>
        </>
    );
};
