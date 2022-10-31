import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <>
      <h1 className="text-center font-bold text-4xl">Product</h1>
      <div className="flex space-x-10">
        <Link
          to="/"
          className="text-lg font-semibold text-gray-900 hover:text-emerald-600"
        >
          Back to Home
        </Link>
        <br /> <br />
        <Link
          to="/product/list"
          className="text-lg font-semibold text-gray-900 hover:text-emerald-600"
        >
          See All Product
        </Link>
        <br /> <br />
        <Link
          to="/product/form"
          className="text-lg font-semibold text-gray-900 hover:text-emerald-600"
        >
          Form Order
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

export default ProductLayout;
