import Logo from "@/components/atoms/Logo/Logo";
import NavigationBar from "@/components/molecules/NavigationBar/NavigationBar";
// import SearchBar from "@/components/molecules/SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10">
      <Logo />
      <NavigationBar />
      {/* <SearchBar/> */}
    </header>
  );
};

export default Header;
