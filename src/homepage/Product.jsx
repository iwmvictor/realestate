import React from "react";
import { Link } from "react-router-dom";
import { IoImageOutline, IoImagesOutline } from "react-icons/io5";
import { Md3dRotation, MdBrowseGallery, MdOutlineCall } from "react-icons/md";
import { TbHomeUp } from "react-icons/tb";

import prop1 from "./../assets/property/prop1.webp";
import prop2 from "./../assets/property/prop2.webp";
import prop3 from "./../assets/property/prop3.webp";
import prop4 from "./../assets/property/prop4.webp";
import prop1a from "./../assets/property/prop1-1.webp";
import prop1b from "./../assets/property/prop1-2.webp";
import prop2a from "./../assets/property/prop2-1.webp";
import prop2b from "./../assets/property/prop2-2.webp";
import prop3a from "./../assets/property/prop3-1.webp";
import prop3b from "./../assets/property/prop3-2.webp";
import prop4a from "./../assets/property/prop4-1.webp";
import prop4b from "./../assets/property/prop4-2.webp";
import prop4c from "./../assets/property/prop4-3.webp";

const properties = [
  {
    title: "Five Bedroom, Residential villa in Musanze",
    bedroom: 6,
    bathroom: 5,
    for: "sale",
    price: 1920,
    currency: "USD",
    location: "Musanze",
    image: prop3,
    gallery: [prop1a, prop1b],
    description:
      "This is a beautiful five bedroom villa located in Musanze, with a beautiful view of the surrounding landscape.",
    amenities: ["Swimming pool", "Gym", "Parking", "Security", "WiFi"],
    category: "Residential",
    type: "Villa",
  },
  {
    title: "Three Bedroom, Residential apartment in Kigali",
    bedroom: 3,
    bathroom: 2,
    for: "rent",
    price: 300,
    currency: "usd",
    location: "Kigali",
    image: prop2,
    gallery: [prop2a, prop2b],
    description:
      "This is a beautiful three bedroom apartment located in Kigali, with a beautiful view of the surrounding landscape.",
    amenities: ["Swimming pool", "Gym", "Parking", "Security", "WiFi"],
    category: "Residential",
    type: "Apartment",
  },
  {
    title: "Four Bedroom, Residential house in Ruhengeri",
    bedroom: 4,
    bathroom: 3,
    for: "rent",
    price: 400,
    currency: "usd",
    location: "Ruhengeri",
    image: prop1,
    gallery: [prop3a, prop3b],
    description:
      "This is a beautiful four bedroom house located in Ruhengeri, with a beautiful view of the surrounding landscape.",
    amenities: ["Swimming pool", "Gym", "Parking", "Security", "WiFi"],
    category: "Residential",
    type: "House",
  },
  {
    title: "Two Bedroom, Residential apartment in Kigali",
    bedroom: 2,
    bathroom: 1,
    price: 200,
    for: "sale",
    currency: "usd",
    location: "Kigali",
    image: prop4,
    gallery: [prop4a, prop4b, prop4c],
    description:
      "This is a beautiful two bedroom apartment located in Kigali, with a beautiful view of the surrounding landscape.",
    amenities: ["Swimming pool", "Gym", "Parking", "Security", "WiFi"],
    category: "Residential",
    type: "Apartment",
  },
];

function Product() {
  return (
    <>
      <div className="products">
        {properties.map((product, index) => (
          <div className="card" key={index}>
            <div className="img">
              <img src={product.image} alt={product.title} />
              <div className="view">
                <div>
                  <span className="banner">{product.for}</span>
                </div>
                <div className="div">
                  <button className="3d">
                    <Md3dRotation />
                  </button>
                  <button className="gallery">
                    <IoImagesOutline />
                  </button>
                </div>
              </div>
            </div>
            <div className="text">
              <span className="category">{product.type}</span>
              <h4>{product.title}</h4>
              <div className="details">
                <span>{product.bedroom} bedroom</span> ◘{"  "}
                <span>{product.bathroom} bathroom</span>
              </div>
              <div className="action">
                <span className="price">
                  {product.price} {product.currency}
                </span>
                <div className="btns">
                  <Link to={"tel:250781996271"} className="call btn">
                    <MdOutlineCall /> Call
                  </Link>
                  <Link className="tour btn">
                    <TbHomeUp /> Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
