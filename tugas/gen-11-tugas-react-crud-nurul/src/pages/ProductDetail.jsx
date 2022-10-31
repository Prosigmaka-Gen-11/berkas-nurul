import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState({});

  async function getDetailProduct() {
    const result = await fetch(
      "http://localhost:3000/data/" + params.productId
    );
    const data = await result.json();
    setProduct(data);
  }

  useEffect(() => {
    getDetailProduct();
  }, []);

  return (
    <>
      <br /> <br />
      <h1 className="text-center font-bold text-4xl">Detail Product</h1>
      <br />
      <table className="bg-slate-200">
        <tbody>
          <tr>
            <td className="font-semibold w-[10%]">Release date</td>
            <td className="w-[2%]">:</td>
            <td>{product.releaseDate}</td>
          </tr>
          <tr>
            <td className="font-semibold w-[10%]">Descriptions</td>
            <td className="w-[2%]">:</td>
            <td>{product.desc}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductDetail;
