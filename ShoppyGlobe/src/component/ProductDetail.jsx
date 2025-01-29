import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "./useFetch";
import "./Style.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`https://dummyjson.com/products/${id}`);
  const navigate = useNavigate(); 

  const handleHomeClick = () => {
    navigate("/"); 
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
    <button onClick={handleHomeClick} className="home-button">
    Go Home
  </button>
    <div className="product-detail">
     

      <img src={data?.images?.[0]} alt="product image" className="product-image" />
      <h1 className="product-title">{data?.title}</h1>
      <p className="product-description">{data?.description}</p>
      <p className="product-price">Price: ${data?.price}</p>
    </div>
    </>
  );
};

export default ProductDetail;
