import Input from "./Input";
import { dataGd } from "../data/data.js";

function Directions() {
  const dataGroups = Object.values(dataGd);

  return (
    <>
      <div className="grid grid-cols-4 p-4">
        <Input></Input>
      </div>
      <table className="text-white w-full text-left ">
        <thead className="border px-4 uppercase bg-slate-600 bg-opacity-50">
          <tr className="px-4 border">
            <th className="w-16"></th>
            <th className="py-4">id</th>
            <th>Direccion de grupo</th>
            <th>Nombre</th>
            <th>Valor</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {dataGroups.map((data) => (
            <tr
              key={data.index}
              className="h-12 border hover:bg-slate-800 hover:bg-opacity-50 transition-all"
            >
              <th>
                <div className="flex items-center justify-center">
                  <input type="checkbox" name="" id="" />
                </div>
              </th>
              <th>{data.id}</th>
              <th>{data.address}</th>
              <th>{data.name}</th>
              <th>
                {`${data.value}` == "true"
                  ? "Activo"
                  : `${data.value}` == "false"
                  ? "Apagado"
                  : `${data.value}`}
              </th>
              <th>
                <button className="cursor-pointer">
                  <svg width="25" height="25" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4z" />
                    </g>
                  </svg>
                </button>
              </th>
              <th>
                <button className="hover:text-red-600 transition-all">
                  <svg width="25" height="25" viewBox="0 0 2048 2048">
                    <path
                      fill="currentColor"
                      d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512zM768 256h384V128H768zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45zM768 1664H640V640h128zm256 0H896V640h128zm256 0h-128V640h128z"
                    />
                  </svg>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Directions;
