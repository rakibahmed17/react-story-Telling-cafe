import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center mx-auto max-w-6xl border-b-2  m-3">
            <h1 className="text-4xl font-bold text-pink-700  ">
                React <span className="text-green-300">knowledge</span> cafe
            </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
