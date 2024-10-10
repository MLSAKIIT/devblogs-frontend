// import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-12 bg-secondary  h-24 py-4">
      <img className="h-16" src="/assets/mlsa-logo.png" />

      {/* <Button label="Log In" className="h-12" /> */}
      <div className="flex gap-5">
        <button className="w-fit rounded-md text-white bg-primary text-xl px-3 items-center font-semibold justify-center py-2 h-fit ">
          Login
        </button>
        <button className="w-fit rounded-md text-white bg-primary text-xl px-3 items-center font-semibold justify-center py-2 h-fit ">
          Create Blogs
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
