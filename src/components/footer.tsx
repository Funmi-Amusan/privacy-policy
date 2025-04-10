const Footer = () => {
    const currentYear = new Date().getUTCFullYear();

    return (
        <footer className=" bg-[#eef5f6] text-gray-600 h-full side-padding py-6">
            <div className="  py-6 flex  ">
                <div className=" flex flex-col md:justify-between gap-6 font-light">
                    <ul className=" flex flex-col gap-2">
                        <li>
                            <a className="links" href="/privacy">
                                {" "}
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a className="links" href="/terms">
                                {" "}
                                Terms
                            </a>
                        </li>
                    </ul>
                    <p className="hidden md:block">
                        Copyright © Healthtracka {currentYear}
                    </p>
                </div>
            </div>
            <p className=" md:hidden">Copyright © Healthtracka {currentYear}</p>
        </footer>
    );
};

export default Footer;
