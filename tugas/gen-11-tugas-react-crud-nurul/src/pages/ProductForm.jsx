import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ProductForm() {
  const paymentList = [
    { value: "Full Payment", label: "Full Payment" },
    { value: "Down Payment", label: "Down Payment" },
    { value: "Tabungan", label: "Tabungan" },
  ];

  const shipInterList = [
    { value: "Standar", label: "Standar" },
    { value: "Express", label: "Express" },
    { value: "J&T", label: "J&T" },
    { value: "JNE", label: "JNE" },
    { value: "SiCepat", label: "SiCepat" },
    { value: "WAHANA Express", label: "WAHANA Express" },
  ];

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
  const isEditing = formInput.id;

  //data edit
  const location = useLocation();
  const states = location.db;

  //fungsi buat call data API
  async function getData() {
    if (states) {
      setFormInput({ ...states });
    } else {
      const sales = await axios.get("http://localhost:3000/data");
      setData(sales.data);
    }
  }

  function handleFormInput(evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value });
  }

  //fungsi handle buat submit
  async function handleSubmit(evt) {
    evt.preventDefault();

    if (isEditing) {
      await axios.put(`http://localhost:3000/data/${formInput.id}`, formInput);
    } else {
      await axios.post("http://localhost:3000/data", formInput);
    }
    getData();
    setFormInput({ ...inputData });
  }

  //fungsi buat delete. delete berdasarkan id
  async function deleteData(id) {
    await axios.delete(`http://localhost:3000/data/${id}`);
    getData();
  }

  //fungsi buat checkbox
  function handleCheckBox(evt) {
    const { value, checked } = evt.target;
    const { shipment } = formInput;

    if (checked) {
      setFormInput({ ...formInput, shipment: [...shipment, value] });
    } else {
      setFormInput({
        ...formInput,
        shipment: shipment.filter((evt) => evt !== value),
      });
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <br />
      <br />
      <h1 className="text-center font-bold text-4xl">Form Order</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <label>
          Nama Barang: <br />
          <input
            type="text"
            value={formInput.nama}
            onChange={(evt) => handleFormInput(evt, "nama")}
            className="border border-zinc-400"
          />
        </label>
        <br />
        <br />
        <label>
          Quantity: <br />
          <input
            type="number"
            value={formInput.jumlah}
            onChange={(evt) => handleFormInput(evt, "jumlah")}
            className="border border-zinc-400"
          />
        </label>
        <br />
        <br />
        <label>
          Alamat: <br />
          <textarea
            value={formInput.alamat}
            onChange={(evt) => handleFormInput(evt, "alamat")}
            className="border border-zinc-400"
          />
        </label>
        <br />
        <br />
        <label>
          Payment:
          {paymentList.map((paymentItem) => (
            <label key={paymentItem.value}>
              <br />
              <input
                type="radio"
                name="payment"
                value={paymentItem.value}
                checked={formInput.payment.indexOf(paymentItem.value) !== -1}
                onChange={(evt) => handleFormInput(evt, "payment")}
                className="border border-zinc-400"
              ></input>
              {paymentItem.label}
            </label>
          ))}
        </label>
        <br />
        <br />
        <label>
          Metode Payment: <br />
          <select
            value={formInput.method}
            onChange={(evt) => handleFormInput(evt, "method")}
            className="border border-zinc-400"
          >
            <option value="">-Pilih Metode Pembayaran-</option>
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="DANA">DANA</option>
            <option value="ShoopePay">ShoopePay</option>
            <option value="OVO">OVO</option>
            <option value="LinkAja">LinkAja</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Tanggal Payment: <br />
          <input
            type="date"
            value={formInput.date}
            onChange={(evt) => handleFormInput(evt, "date")}
            className="border border-zinc-400"
          />
        </label>
        <br />
        <br />
        <label>
          Pengiriman Inter dan Lokal:
          {shipInterList.map((shipInterItem) => (
            <label key={shipInterItem.value}>
              <br />
              <input
                type="checkbox"
                name="shipment"
                value={shipInterItem.value}
                checked={formInput.shipment.indexOf(shipInterItem.value) !== -1}
                onChange={(event) => handleCheckBox(event, "shipment")}
                className="border border-zinc-400"
              ></input>
              {shipInterItem.label}
            </label>
          ))}
        </label>
        <br />
        <br />
        <label>
          Catatan: <br />
          <textarea
            value={formInput.catatan}
            onChange={(evt) => handleFormInput(evt, "catatan")}
            className="border border-zinc-400"
          />
        </label>
        <br />
        <br />
        <button
          type="submit"
          className="p-2 m-1 bg-emerald-600 rounded-md font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default ProductForm;
