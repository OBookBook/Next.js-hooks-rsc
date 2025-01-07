import { useFormStatus } from "react-dom";

const IncrementBtn = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        className={`px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${
          pending && "bg-green-400"
        }`}
        disabled={pending}
      >
        Increment
      </button>
      <p>{pending && "Now Loading..."}</p>
    </div>
  );
};

export default IncrementBtn;
