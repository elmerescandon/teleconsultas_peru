import Logo from "@/components/atoms/Logo/Logo";
import LoginBar from "@/components/molecules/LoginBar/LoginBar";
import NavigationBar from "@/components/molecules/NavigationBar/NavigationBar";
// import SearchBar from "@/components/molecules/SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 flex-wrap">
      <Logo />
      <div className="flex gap-8 items-center flex-wrap">
        <NavigationBar />
        <LoginBar />
      </div>
      {/* <SearchBar/> */}
    </header>
  );
};

export default Header;
