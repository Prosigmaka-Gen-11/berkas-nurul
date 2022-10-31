import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const inputData = {
    nama: "",
    jumlah: "",
    alamat: "",
    payment: "",
    method: "",
    date: "",
    shipment: [],
    catatan: "",
  };

  const [data, setData] = useState([]);
  const [formInput, setFormInput] = useState({ ...inputData });

  //fungsi buat call data API
  async function getData() {
    const sales = await axios.get("http://localhost:3000/data");
    setData(sales.data);
  }

  //fungsi buat delete. delete berdasarkan id
  async function deleteData(id) {
    await axios.delete(`http://localhost:3000/data/${id}`);
    getData();
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <br /> <br />
      <h1 className="text-center font-bold text-4xl">All Product</h1>
      <table className="border w-auto m-3 p-4 text-center rounded-md">
        <thead className="bg-red-300">
          <tr>
            <th>Nama Barang</th>
            <th>Quantity</th>
            <th>Alamat</th>
            <th>Payment</th>
            <th>Metode Payment</th>
            <th>Tanggal Payment</th>
            <th>Pengiriman Inter dan Lokal</th>
            <th>Catatan</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datasales) => (
            <tr key={datasales.id}>
              <td>{datasales.nama}</td>
              <td>{datasales.jumlah}</td>
              <td>{datasales.alamat}</td>
              <td>{datasales.payment}</td>
              <td>{datasales.method}</td>
              <td>{datasales.date}</td>
              <td>{datasales.shipment.join(", ")}</td>
              <td>{datasales.catatan}</td>
              <td className="flex text-sm">
                <Link to={"/product/" + datasales.id}>
                  <button className="p-1 m-1 bg-emerald-600 rounded-md font-semibold text-white">
                    Details
                  </button>
                </Link>
                <br />
                <Link to="/product/form" db={datasales}>
                  <button className="p-1 m-1 bg-emerald-600 rounded-md font-semibold text-white">
                    Edit
                  </button>
                </Link>
                <br />
                <button
                  onClick={() => deleteData(datasales.id)}
                  className="p-1 m-1 bg-emerald-600 rounded-md font-semibold text-white"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ProductList;
