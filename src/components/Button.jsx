const Button = ({ children, onClick, className, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-accent text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors ${className}`}
  >
    {children}
  </button>
);

export default Button;
