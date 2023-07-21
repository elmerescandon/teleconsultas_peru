import Logo from "@/components/atoms/Logo/Logo";
import LoginBar from "@/components/molecules/LoginBar/LoginBar";
import NavigationBar from "@/components/molecules/NavigationBar/NavigationBar";
// import SearchBar from "@/components/molecules/SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="flex justify-center sm:justify-between items-center px-10 flex-wrap pt-10 sm:pt-0">
      <Logo />
      <div className="flex gap-8 justify-center items-center flex-wrap">
        <NavigationBar />
        <LoginBar />
      </div>
      {/* <SearchBar/> */}
    </header>
  );
};

export default Header;
