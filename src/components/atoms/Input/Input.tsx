type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full md:w-64 px-4 py-4 mb-4 md:mb-0 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
    />
  );
};

export default Input;
