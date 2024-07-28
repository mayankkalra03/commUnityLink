const Input = ({ value, onChange, placeholder, type = "text" }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-3 mb-3 bg-gray-900 text-gray-300 border border-gray-700 rounded focus:outline-none"
  />
);

export default Input;
