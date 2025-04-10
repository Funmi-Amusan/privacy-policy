import Logo from "../assets/Logo.svg";

const MainHeader = () => {
    return (
        <header className=" side-padding flex justify-between py-6 ">
            <a href="/privacy">
                <img
                    src={Logo}
                    alt="HealthTracka Logo"
                    className=" h-6 w-auto"
                />
            </a>
        </header>
    );
};

export default MainHeader;
