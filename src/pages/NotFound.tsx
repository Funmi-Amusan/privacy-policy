import { Link } from "react-router-dom";
import MainHeader from "../components/header";

const NotFoundPage = () => {
    return (
        <>
            <MainHeader />
            <div className="lg:pt-24 pt-10 w-full flex items-center justify-center h-auto">
                <div className="text-center">
                    <h1 className="text-center text-[6rem] font-bold tracking-widest">
                        404
                    </h1>
                    <div className="lg:w-3/5 w-11/12 flex flex-col gap-4 m-auto text-center">
                        <h3 className=" leading-8">
                            Sorry. the content you’re looking for doesn’t exist.
                            Either it was removed, or you mistyped the link.
                        </h3>
                        <Link to="/privacy">
                            <button className=" bg-black font-medium text-white rounded-md p-2">
                                Go to Privacy Page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
