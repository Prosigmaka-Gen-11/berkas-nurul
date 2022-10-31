import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1 className="text-center font-bold text-4xl">Magic Shop INA</h1>
      <Link to="/">
        <button className="bg-sky-600 p-2 m-2 text-lg font-semibold text-white rounded-md">
          Back to Home
        </button>
      </Link>
    </>
  );
}

export default About;
