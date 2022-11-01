import { useContext } from "react";
import { DataContext } from "./DataForm";

function DataList() {
  const { data } = useContext(DataContext);

  return (
    <>
      <h1>Data Sales GO Magic Shop</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Nama Barang</th>
            <th>Jumlah Barang</th>
            <th>Payment</th>
            <th>Metode Payment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datasales) => (
            <tr key={datasales.id}>
              <td>{datasales.nama}</td>
              <td>{datasales.jumlah}</td>
              <td>{datasales.payment}</td>
              <td>{datasales.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DataList;
