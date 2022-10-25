import useFormInput from "./useFormInput";

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

function FormFunction() {
  const { formInput, handleFormInput, handleCheckBox } = useFormInput({
    nama: "",
    jumlah: "",
    alamat: "",
    payment: "",
    method: "",
    date: "",
    shipment: "",
    catatan: "",
  });

  //fungsi buat submit
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formInput);
  }

  return (
    <>
      <h1>Form Jastip GO Magic Shop</h1>
      <p>Nama barang: {formInput.nama}</p>
      <p>Jumlah barang: {formInput.jumlah}</p>
      <p>Alamat: {formInput.alamat}</p>
      <p>Payment: {formInput.payment}</p>
      <p>Metode Payment: {formInput.method}</p>
      <p>Tanggal Payment: {formInput.date}</p>
      <p>Shipment(Inter dan Local): {formInput.shipment}</p>
      <p>Catatan: {formInput.catatan}</p>

      <hr />
      <form onSubmit={(evt) => handleSubmit(evt)}>
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
          Jumlah: <br />
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
                checked={formInput.payment === paymentItem.value}
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
          <p>
            Pilih 2 pengiriman untuk pengiriman inter dan lokal. Standar /
            Expres untuk pengiriman Inter. Selain itu untuk pengiriman Lokal
          </p>
          Shipment:
          {shipInterList.map((shipInterItem) => (
            <label key={shipInterItem.value}>
              <br />
              <input
                type="checkbox"
                name="shipment"
                value={shipInterItem.label}
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
        <button>Submit</button>
      </form>
    </>
  );
}

export default FormFunction;
