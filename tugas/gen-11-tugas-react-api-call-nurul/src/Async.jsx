import { useState } from "react";
import axios from "axios";

function Async() {
  const [name, setName] = useState();
  const [desc, setDesc] = useState("");
  const [dname, setDname] = useState();
  const [dlink, setDlink] = useState("");
  const [tableid, setTableId] = useState("");
  const [topic, setTopic] = useState("");
  const [subtopic, setSubTopic] = useState("");

  async function getApiAsyncAwait() {
    try {
      const datausa = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      setName(datausa.data.source[0].annotations.source_name);
      setDesc(datausa.data.source[0].annotations.source_description);
      setDname(datausa.data.source[0].annotations.dataset_name);
      setDlink(datausa.data.source[0].annotations.dataset_link);
      setTableId(datausa.data.source[0].annotations.table_id);
      setTopic(datausa.data.source[0].annotations.topic);
      setSubTopic(datausa.data.source[0].annotations.subtopic);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <h2>Tugas React API Call Async Await</h2>
      <button onClick={getApiAsyncAwait}>Show Data</button>
      <br /> <br />
      <table className="text-center font-bold">
        <tbody>
          <tr>
            <td>source_name</td>
            <td>:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>souce_desc</td>
            <td>:</td>
            <td>{desc}</td>
          </tr>
          <tr>
            <td>dataset_name</td>
            <td>:</td>
            <td>{dname}</td>
          </tr>
          <tr>
            <td>dataset_link</td>
            <td>:</td>
            <td>{dlink}</td>
          </tr>
          <tr>
            <td>table_id</td>
            <td>:</td>
            <td>{tableid}</td>
          </tr>
          <tr>
            <td>topic</td>
            <td>:</td>
            <td>{topic}</td>
          </tr>
          <tr>
            <td>subtopic</td>
            <td>:</td>
            <td>{subtopic}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Async;
