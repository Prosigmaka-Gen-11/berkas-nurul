import axios from "axios";
import { useState, useEffect } from "react";

function App() {
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

  async function getData() {
    const sales = await axios.get("http://localhost:3000/data");
    setData(sales.data);
  }

  function handleFormInput(evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value });
  }

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

  function prepareEdit(datasales) {
    setFormInput({ ...datasales });
  }

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
      <h1>Data Sales GO Magic Shop</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Nama Barang</th>
            <th>Jumlah Barang</th>
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
            <tr>
              <td>{datasales.nama}</td>
              <td>{datasales.jumlah}</td>
              <td>{datasales.alamat}</td>
              <td>{datasales.payment}</td>
              <td>{datasales.method}</td>
              <td>{datasales.date}</td>
              <td>{datasales.shipment}</td>
              <td>{datasales.catatan}</td>
              <td>
                <button onClick={() => prepareEdit(datasales)}>Edit</button>
                <button onClick={() => deleteData(datasales.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /> <hr /> <br />
      <h2>Formulir PO Batch 5</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Barang: <br />
          <input
            type="text"
            value={formInput.nama}
            onChange={(evt) => handleFormInput(evt, "nama")}
          />
        </label>
        <br />
        <br />
        <label>
          Jumlah Barang: <br />
          <input
            type="text"
            value={formInput.jumlah}
            onChange={(evt) => handleFormInput(evt, "jumlah")}
          />
        </label>
        <br />
        <br />
        <label>
          Alamat: <br />
          <textarea
            value={formInput.alamat}
            onChange={(evt) => handleFormInput(evt, "alamat")}
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
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
