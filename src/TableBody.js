import { useState } from "react";
import moment from "moment";

const TableBody = (props) => {
  return (
    <tbody>
      {props.results.map((result) => {
        const [active, setActive] = useState(false);
        function handleClick() {
          setActive(!active);
        }
        return (
          <tr
            scope="row"
            className={active ? "grey" : ""}
            onClick={handleClick}
          >
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>
              {moment(result.checkOutDate).diff(result.checkInDate, "days")}
            </td>
          </tr>
        );
      })}
      ;
    </tbody>
  );
};

export default TableBody;
