function Input({ placeholder }) {
  return (
    <div className="border flex items-center gap-4 py-2 px-4 text-white rounded">
      <svg width="25" height="25" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
        />
      </svg>
      <input
        type="text"
        className="font-medium bg-transparent w-full py-1 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
