function Block({ value, onClick }) {
  return (
    <div
      className="flex gap-2 items-center px-8 py-4 border rounded w-full hover:bg-slate-500 bg-opacity-60 cursor-pointer transition-all truncate md:max-w-50"
      onClick={onClick}
    >
      <svg width="25" height="25" viewBox="0 0 256 256">
        <path
          fill="currentColor"
          d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm176 144H40V88h176Z"
        />
      </svg>
      <h1 className="text-xl tracking-wide font-bold uppercase truncate">
        {value}
      </h1>
    </div>
  );
}

export default Block;
