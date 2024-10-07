import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-12  bg-background h-24 py-4">
      <img className="h-16" src="/public/assets/mlsa-logo.png" />
      <Button label="Log In" className="h-12" />
    </nav>
  );
};

export default NavBar;
