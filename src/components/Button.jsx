function Button({ children, fit, onClick }) {
  return (
    <>
      <button
        className={`py-3 border-opacity-40 border-white border-2 ${
          fit ? "w-fit" : "w-full"
        } px-4 font-bold text-white text-lg rounded hover:bg-slate-50 hover:text-slate-950 transition-all active:scale-95 flex items-center gap-4 `}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
