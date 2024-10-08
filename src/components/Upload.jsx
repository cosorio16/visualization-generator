function Upload() {
  // pointer-events-none

  return (
    <div className="text-white border w-full flex flex-col items-center justify-center gap-2 p-4 border-dashed rounded cursor-not-allowed pointer-events-none hover:bg-slate-900 transition-all">
      <label
        htmlFor="fileETS"
        className="cursor-not-allowed pointer-events-none flex items-center gap-2 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 12 16"
        >
          <path
            fillRule="evenodd"
            d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"
            fill="currentColor"
          />
        </svg>
        Upload ETS File
      </label>
      <input
        type="file"
        name="fileETS"
        id="fileETS"
        className="w-full border p-1 border-slate-50 border-opacity-50 file:hidden flex justify-center items-center m-auto cursor-not-allowed pointer-events-none"
      />
      {/* <button className="border w-24 rounded py-1 text-lg font-semibold hover:scale-105 transition-all active:scale-95 hover:bg-slate-700 hover:bg-opacity-80">
        Cargar
      </button> */}
    </div>
  );
}

export default Upload;
