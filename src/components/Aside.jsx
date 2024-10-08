import Upload from "./Upload";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

function Aside() {
  return (
    <aside className="flex flex-col w-80 border-r-2 border-r-slate-100 h-screen px-4 py-4 transition-all gap-4">
      <div className="grow flex flex-col gap-2">
        <Input placeholder={"Direccion de grupo"}></Input>
        <Select></Select>
        <Input placeholder={"Etiquetas"}></Input>
        <div className="flex gap-2 items-center justify-center">
          <Button>
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10.19 16.366q2.58 0 4.377-1.806q1.799-1.805 1.799-4.385T14.564 5.79t-4.375-1.81t-4.381 1.806T4 10.171t1.806 4.387q1.805 1.807 4.384 1.807m-1.01-3.45l4.747-4.77l-.713-.714l-4.033 4.057l-2.029-2.023l-.713.708zm1.012 4.45q-2.984 0-5.088-2.104T3 10.173t2.104-5.088t5.088-2.104t5.08 2.104t2.094 5.088q0 1.359-.467 2.559q-.466 1.2-1.285 2.149L21 20.273l-.688.727l-5.412-5.406q-.948.839-2.149 1.305q-1.2.467-2.559.467m0-7.193"
              />
            </svg>
            Buscar
          </Button>
          <Button>
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              />
            </svg>
            Cancelar
          </Button>
        </div>
        <Button>
          <svg width="25" height="25" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
            </g>
          </svg>
          Explorar Widgets
        </Button>
        <Button>
          <svg width="25" height="25" viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M272.064 319.984H48c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.064c17.68 0 32-14.32 32-32V351.984c0-17.68-14.32-32-32-32m-32 640.016H80V383.984h160.064zm383.68-449.744h-224.08c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.08c17.68 0 32-14.32 32-32V542.256c0-17.696-14.304-32-32-32m-32 449.744h-160.08V574.256h160.08zM976 0H752.272c-17.68 0-32 14.32-32 32v960c0 17.68 14.32 32 32 32H976c17.68 0 32-14.32 32-32V32c0-17.68-14.32-32-32-32m-32 960H784.272V64H944z"
            />
          </svg>
          Explorar Graficos
        </Button>
      </div>
      <div>
        <Button>
          <svg width="25" height="25" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" />
            </g>
          </svg>
          Guardar Proyecto
        </Button>
      </div>
      <div className="">
        <Upload></Upload>
      </div>
    </aside>
  );
}

export default Aside;
