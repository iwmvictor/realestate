import React from "react";
import { IoCallOutline } from "react-icons/io5";
import "./../style/property.scss";

// Import the images for the gallery
import prop from "./../assets/property/prop4.webp";
import propa from "./../assets/property/prop4-1.webp";
import propb from "./../assets/property/prop4-2.webp";
import propc from "./../assets/property/prop4-3.webp";

// Property data
const property = {
  title: "The Green House",
  bedroom: 4,
  bathroom: 4,
  price: 1200,
  for: "rent",
  currency: "usd",
  size: 1479,
  plan: "2 floor plan",
  description:
    "The Green House is a co-living duplex, offering you a private bedroom and bathroom while you share the kitchen and living room with other tenants. Located near Koreatown, this beautiful, newly-built apartment is only a 3-5 minute drive from restaurants and markets. The living room is furnished with a modern design, and the kitchen is equipped with high-quality appliances. The unit is FULLY FURNISHED, complete with a high-quality mattress, and utilities are INCLUDED. Upper units also gain access to the modernly designed rooftop. If you’re someone who enjoys making new friends, this co-living space has everything you need. It’s also perfect if you’re looking to move in with a group of friends.",
  amenities: ["Wi-Fi", "TV", "Kitchen", "Bathroom", "Bedroom"],
  gallery: [prop, propa, propb, propc],
  rating: 4,
  insurance: 40,
  policy:
    "For getting into the house, you have to meet the following criteria: we request to pay the first 2 months as a security deposit. You'll be required to pay insurance monthly as listed. The owner requests a max of 1 tenant per room, and an additional $200 per month as a tenant fee. Utility and Internet fees are included in the rent. The property comes with 3 parking spots, and any additional parking spots will be charged $100. No pets are allowed.",
};

function Property() {
  return (
    <div className="property-page">
      <div className="container">
        {/* Navbar */}
        <div className="navbar">
          <ul>
            <li>Overview</li>
            <li>Amenities</li>
            <li>Gallery</li>
            <li>Policies</li>
            <li>Map</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="content">
          {/* Quick Info Section */}
          <div className="quick">
            <h2 className="price">
              {property.price} <span>/mo</span>
            </h2>
            <div className="btn">
              <button className="btn1">Grab My Discount</button>
            </div>
            <div className="btns">
              <button>Request a Tour</button>
              <button>Apply Now</button>
            </div>
            <div className="phone">
              <button>
                <IoCallOutline /> (250) 78 6969 572
              </button>
            </div>
            <hr />
            <p>8:00am — 6:00pm daily</p>
          </div>

          {/* Main Section */}
          <div className="main">
            {/* Overview Section */}
            <div id="overview">
              <h3>Property Overview</h3>
              <h2>{property.title}</h2>
              <p>{property.description}</p>
            </div>

            {/* Amenities Section */}
            <div id="amenity">
              <h3>Amenities</h3>
              <p>
                Relax and get comfortable in your home with the following
                convenient amenities:
              </p>
              <ul className="amenities-list">
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>

            {/* Gallery Section */}
            <div id="gallery">
              <h3>Gallery</h3>
              <div className="gallery-images">
                {property.gallery.map((image, index) => (
                  <img key={index} src={image} alt={`Property ${index + 1}`} />
                ))}
              </div>
            </div>

            {/* Policies Section */}
            <div id="policy">
              <h3>Policies</h3>
              <p>{property.policy}</p>
            </div>

            {/* Map Section */}
            <div id="map">
              <h3>Map</h3>
              <div className="map-placeholder">Map preview available for premium user only</div>
            </div>

            {/* Reviews Section */}
            <div id="reviews">
              <h3>Reviews</h3>
              <p>Reviews available once you login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
