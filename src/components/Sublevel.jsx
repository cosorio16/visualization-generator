import Button from "./Button";
import Block from "./Block";
import { useState } from "react";

function Sublevel({ theme, active, onClick }) {
  const [levels, setLevels] = useState([]);
  const [quantityCreate, setQuantityCreate] = useState(1);
  const [showSubLevels, setShowSubLevels] = useState(true);

  const toggleSubShow = () => {
    setShowSubLevels(!showSubLevels);
  };

  const addInput = () => {
    setQuantityCreate(quantityCreate + 1);
  };

  const addLevels = (index, value) => {
    if (value.trim() !== "" || undefined) {
      const inputData = [...levels];
      inputData[index] = value;
      setLevels(inputData);
    }
  };

  const deleteLevel = (index) => {
    levels.splice(index, 1);
    setLevels(levels);
    setQuantityCreate(quantityCreate - 1);
  };

  const setData = () => {
    toggleSubShow();
    setLevels(levels);
  };
  return (
    <>
      {active && (
        <>
          <h1 className="flex items-center font-bold text-2xl gap-4 uppercase underline">
            <svg width="25" height="25" viewBox="0 0 32 32">
              <path
                d="M29.474 19.12L23.681 16l5.793-3.12a1 1 0 0 0 0-1.76l-13-7a.998.998 0 0 0-.948 0l-13 7a1 1 0 0 0 0 1.76L8.319 16l-5.793 3.12a1 1 0 0 0 0 1.76l13 7a1 1 0 0 0 .948 0l13-7a1 1 0 0 0 0-1.76zM16 6.136L26.89 12L16 17.864L5.11 12zm0 19.728L5.11 20l5.319-2.864l5.097 2.744a1 1 0 0 0 .948 0l5.097-2.745L26.891 20z"
                fill="currentColor"
              />
            </svg>
            {theme}
          </h1>

          <div className="flex items-center gap-4">
            <Button fit={true} onClick={() => toggleSubShow()}>
              <span className="flex items-center gap-2">
                <svg width="25" height="25" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm10-6v1q0 .425.288.713T15 16t.713-.288T16 15v-1h1q.425 0 .713-.288T18 13t-.288-.712T17 12h-1v-1q0-.425-.288-.712T15 10t-.712.288T14 11v1h-1q-.425 0-.712.288T12 13t.288.713T13 14z"
                  />
                </svg>
                Crear Pisos
              </span>
            </Button>
            <Button fit={true}>
              <span className="flex items-center gap-2">
                <svg width="25" height="25" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4 2a2 2 0 0 0-2 2v10h2V4h10V2zm4 4a2 2 0 0 0-2 2v10h2V8h10V6zm12 6v8h-8v-8zm0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-1 7h-6v-2h6z"
                  />
                </svg>
              </span>
              Expandir
            </Button>
          </div>

          {!showSubLevels && (
            <div className="border fixed top-56 right-1/2 h-fit w-96 rounded-lg p-4 flex flex-col gap-4 backdrop-blur">
              <div className="flex items-center justify-end gap-4">
                <button
                  className="p-2 rounded-full hover:border-white transition-all border border-transparent"
                  onClick={() => addInput()}
                >
                  <svg width="25" height="25" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                    />
                  </svg>
                </button>
              </div>
              {[...Array(quantityCreate)].map((q, index) => (
                <div key={index} className="flex gap-4 items-center border p-2">
                  <input
                    key={index}
                    type="text"
                    name=""
                    id=""
                    className="bg-transparent bg-none p-2 w-full border"
                    placeholder="Nombre"
                    value={levels[index]}
                    onChange={(e) => addLevels(index, e.target.value)}
                  />

                  <button
                    className="p-2 rounded-full hover:border-white transition-all border border-transparent"
                    onClick={() => deleteLevel(index)}
                  >
                    <svg width="25" height="25" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"
                      />
                    </svg>
                  </button>
                </div>
              ))}
              <Button onClick={() => setData()}>
                <span className="w-full">Crear</span>
              </Button>
            </div>
          )}

          <div className="border-dashed border border-white p-8 grid grid-cols-4 gap-4">
            {levels.map((level, index) => (
              <Block key={index} value={level}></Block>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Sublevel;
