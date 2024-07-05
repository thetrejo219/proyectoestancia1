import { Link } from "react-router-dom";
import InsertarAdministrativo from "./modalAdministrativo.tsx/InsertarAdministrativo";

export default function PanelClausura() {
  return (
    <>
        <div className="display">
          <div className="container">
              <InsertarAdministrativo/>
            <div className="box1_administrativos">
              <Link className="enlace_eliminar enlace_administrativos" to='actualizar'>Actualizar administrativos</Link>
            </div>
            <div className="box1_administrativos">
              <Link className="enlace_eliminar enlace_administrativos" to='eliminar'>Eliminar administrativos</Link>
            </div>
          </div>
        </div>
        <Link className="boton_regresar enlace_eliminar" to='/panel'>Regresar</Link>
    </>
  )
}