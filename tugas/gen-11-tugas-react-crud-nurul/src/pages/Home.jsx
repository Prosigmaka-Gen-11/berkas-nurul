import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="text-center font-bold text-4xl">Home</h1>
      <br /> <br />
      <div className="text-center">
        <Link to="/about">
          <button className="bg-sky-600 p-3 m-2 text-lg font-semibold text-white rounded-md text-center">
            Go to About
          </button>
        </Link>
        <br /> <br />
        <Link to="/product">
          <button className="bg-sky-600 p-3 m-2 text-lg font-semibold text-white rounded-md text-center">
            See Product
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
