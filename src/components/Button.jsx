const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        className + " bg-primary px-8 py-2 font-semibold rounded-2xl text-white"
      }
    >
      {label}
    </button>
  );
};

export default Button;
