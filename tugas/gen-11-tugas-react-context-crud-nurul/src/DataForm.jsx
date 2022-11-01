import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataProvider(props) {
  const paymentList = [
    { value: "Full Payment", label: "Full Payment" },
    { value: "Down Payment", label: "Down Payment" },
    { value: "Tabungan", label: "Tabungan" },
  ];

  const inputData = {
    nama: "",
    jumlah: "",
    payment: "",
    method: "",
  };

  const [data, setData] = useState([]);
  const [formInput, setFormInput] = useState({ ...inputData });

  //fungsi buat manggil API
  async function getData() {
    const sales = await axios.get("http://localhost:3000/data");
    setData(sales.data);
  }

  //fungsi handle input form
  function handleForm(evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value });
  }

  //fungsi handle submit
  async function handleSubmit(evt) {
    evt.preventDefault();
    await axios.post("http://localhost:3000/data", formInput);
    getData();
    setFormInput({ ...inputData });
  }

  //render
  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      <h1>Form Jastip GO Magic Shop</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Product: <br />
          <input
            type="text"
            value={formInput.nama}
            onChange={(evt) => handleForm(evt, "nama")}
          />
        </label>
        <br /> <br />
        <label>
          Quantity: <br />
          <input
            type="number"
            value={formInput.jumlah}
            onChange={(evt) => handleForm(evt, "jumlah")}
          />
        </label>
        <br /> <br />
        <label>
          Payment: <br />
          {paymentList.map((payItem) => (
            <label key={payItem.value}>
              <br />
              <input
                type="radio"
                name="payment"
                value={payItem.value}
                checked={formInput.payment === payItem.value}
                onChange={(evt) => handleForm(evt, "payment")}
              />
              {payItem.label}
            </label>
          ))}
        </label>
        <br /> <br />
        <label>
          Metode Payment: <br />
          <select
            value={formInput.method}
            onChange={(evt) => handleForm(evt, "method")}
          >
            <option value="">-Pilih Metode Pembayaran-</option>
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="DANA">DANA</option>
            <option value="ShoopePay">ShoopePay</option>
            <option value="OVO">OVO</option>
            <option value="LinkAja">LinkAja</option>
          </select>
        </label>
        <br /> <br />
        <button>Submit</button>
      </form>
      <br />
      <hr />
      {/* nampilin data list */}
      {props.children}
    </DataContext.Provider>
  );
}
export default DataProvider;
