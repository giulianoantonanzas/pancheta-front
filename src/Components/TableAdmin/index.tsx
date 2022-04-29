import { FC } from "react";
import removeIcon from "assets/images/trash.svg";
import editIcon from "assets/images/pencil.svg";
import Style from "./style.module.scss";

type TableAdminProps = {
  entities: any[];
  onEdit?: (entitie: any) => void;
  onRemove?: (entitie: any) => void;
  onViewMore?: (entitie: any) => void;
};

const TableAdmin: FC<TableAdminProps> = ({ entities, onEdit, onRemove }) => {
  return (
    <table className={`table ${Style.tableContainer}`}>
      <thead className='table-light'>
        <tr>
          {Object.keys(entities[0])?.map(key => (
            <th scope='col' key={key}>
              {key}
            </th>
          ))}
          {(onEdit || onRemove) && <th scope='col'>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {entities.map((entitie, index) => (
          <tr key={index}>
            {Object.keys(entitie)?.map(key => (
              <td key={key}>{entitie[key]}</td>
            ))}
            {(onEdit || onRemove) && (
              <td className='d-flex gap-2'>
                {onEdit && (
                  <img
                    onClick={() => onEdit(entitie)}
                    className='pointer'
                    src={editIcon}
                    alt='Editar producto'
                  />
                )}
                {onRemove && (
                  <img
                    onClick={() => onRemove(entitie)}
                    className='pointer'
                    src={removeIcon}
                    alt='Eliminar producto'
                  />
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableAdmin;
