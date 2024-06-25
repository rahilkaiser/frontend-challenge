import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen font-inter">
            <div className="flex-1 bg-black text-white flex flex-col justify-center p-8 md:p-16 relative">
                <div className="absolute top-8 md:top-16 left-8 md:left-16">
                    <h1 className="text-4xl md:text-8xl font-bold mb-4">Buena</h1>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-8 md:p-16 bg-white">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8">Welcome to Buena</h2>
                    <p className="text-lg md:text-xl mb-8">
                        Experience property management the way it should be. At Buena, we blend innovation and
                        reliability to provide you with seamless and efficient management solutions.
                    </p>
                    <Link
                        to="/personal-details"
                        className="bg-black text-white px-8 py-4 rounded-full hover:bg-opacity-75 transition duration-300 font-semibold">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};
