import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Home</h1>
      <Button
        label="Click me"
        onClick={() => alert("Hello!")}
        className="text-white "
      />
    </div>
  );
};

export default Home;
