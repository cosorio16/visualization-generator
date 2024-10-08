import { useState } from "react";
import Button from "../components/Button";
import Block from "../components/Block";
import useVis from "../store/vis";

function Levels() {
  const [levels, setLevels] = useState([]);
  const [quantityCreate, setQuantityCreate] = useState(1);
  const { showLevels, toggleShow, setLevelsData, setCurrentSub } = useVis();

  const addInput = () => {
    setQuantityCreate(quantityCreate + 1);
  };

  const addLevels = (index, value) => {
    const inputData = [...levels];
    inputData[index] = value;
    setLevels(inputData);
  };

  const deleteLevel = (index) => {
    levels.splice(index, 1);
    setLevels(levels);
    setQuantityCreate(quantityCreate - 1);
  };

  const setData = () => {
    toggleShow();
    setLevelsData(levels);
  };

  return (
    <>
      <h1 className="font-bold text-2xl py-2 underline">Temas</h1>
      <p className="text-lg font-medium flex gap-2 items-center">
        <svg width="25" height="25" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-10 5h-2v-2h2zm0-4h-2V7h2z"
          />
        </svg>
        Para crear una vizualizacion necesitas crear primero los temas ejemplo:
        Iluminacion, Climatizacion, Persianas...
      </p>
      <Button
        fit={true}
        onClick={() => {
          toggleShow(false);
        }}
      >
        {levels.length > 0 ? (
          <span className="flex items-center gap-2">
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
              />
              <path
                fill="currentColor"
                d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
              />
            </svg>
            Editar Tema
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm10-6v1q0 .425.288.713T15 16t.713-.288T16 15v-1h1q.425 0 .713-.288T18 13t-.288-.712T17 12h-1v-1q0-.425-.288-.712T15 10t-.712.288T14 11v1h-1q-.425 0-.712.288T12 13t.288.713T13 14z"
              />
            </svg>
            Crear Temas
          </span>
        )}
      </Button>

      {!showLevels && (
        <div className="border absolute top-56 right-1/2 h-fit w-96 rounded-lg p-4 flex flex-col gap-4 backdrop-blur">
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

      <div>
        <div className="overflow-y-scroll max-h-[600px] border grid grid-cols-4 gap-4 p-8 justify-center border-dashed">
          {levels.map((level, index) => (
            <Block
              key={index}
              value={level}
              onClick={() => setCurrentSub(index)}
            ></Block>
          ))}
        </div>
      </div>
    </>
  );
}

export default Levels;
