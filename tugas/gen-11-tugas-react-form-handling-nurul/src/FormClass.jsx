import React, { Component } from "react";

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

class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      jumlah: "",
      alamat: "",
      payment: "",
      method: "",
      date: "",
      shipment: "",
      catatan: "",
    };
  }

  handleInputForm(evt, propName) {
    console.log(evt);
    this.setState({ [propName]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
  }

  handleCheckBox(evt) {
    const { value, checked } = evt.target;
    const { shipment } = this.state;

    if (checked) {
      this.setState({
        shipment: [...shipment, value],
      });
    } else {
      this.setState({
        shipment: shipment.filter((evt) => evt !== value),
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Form Jastip GO Magic Shop</h1>
        <p>Nama barang: {this.state.nama}</p>
        <p>Jumlah barang: {this.state.jumlah}</p>
        <p>Alamat: {this.state.alamat}</p>
        <p>Payment: {this.state.payment}</p>
        <p>Metode Payment: {this.state.method}</p>
        <p>Tanggal Payment: {this.state.date}</p>
        <p>Shipment(Inter dan Local): {this.state.shipment + " "}</p>
        <p>Catatan: {this.state.catatan}</p>

        <hr />
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>
            Nama Barang: <br />
            <input
              type="text"
              value={this.state.nama}
              onChange={(evt) => this.handleInputForm(evt, "nama")}
            />
          </label>
          <br />
          <br />
          <label>
            Jumlah: <br />
            <input
              type="text"
              value={this.state.jumlah}
              onChange={(evt) => this.handleInputForm(evt, "jumlah")}
            />
          </label>
          <br />
          <br />
          <label>
            Alamat: <br />
            <textarea
              value={this.state.alamat}
              onChange={(evt) => this.handleInputForm(evt, "alamat")}
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
                  checked={this.state.payment === paymentItem.value}
                  onChange={(evt) => this.handleInputForm(evt, "payment")}
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
              value={this.state.method}
              onChange={(evt) => this.handleInputForm(evt, "method")}
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
              value={this.state.date}
              onChange={(evt) => this.handleInputForm(evt, "date")}
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
                  onChange={(event) => this.handleCheckBox(event, "shipment")}
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
              value={this.state.catatan}
              onChange={(evt) => this.handleInputForm(evt, "catatan")}
            />
          </label>
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormClass;
