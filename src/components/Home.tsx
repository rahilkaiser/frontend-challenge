import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div className="flex h-screen font-inter">
            <div className="flex-1 bg-black text-white flex flex-col justify-center p-16 relative">
                <div className="absolute top-16 left-16">
                    <h1 className="text-8xl font-bold mb-4 font-inter">Buena</h1>

                </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-16 bg-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8 font-inter">Welcome to Buena</h2>
                    <p className="text-xl mb-8 font-inter">
                        Experience property management the way it should be. At Buena, we blend innovation and reliability to provide you with seamless and efficient management solutions.
                    </p>
                    <Link
                        to="/personal-details"
                        className="bg-black text-white px-8 py-4 rounded-full hover:bg-opacity-75 transition duration-300 font-inter font-semibold">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};
