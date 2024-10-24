import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuHotel } from "react-icons/lu";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { MdApartment, MdOutlineVilla } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import map from "./../assets/other/map.jpg";
import logo from "./../assets/brand/logo.svg";
import "./../style/components.scss";

// Sample currency options and neighborhood data
const currencies = ["USD", "RWF", "KES", "BIF"];
const neighborhoods = [
  { name: "Kigali", thumbnail: map },
  { name: "Remera", thumbnail: map },
  { name: "Kicukiro", thumbnail: map },
  { name: "Nyarutarama", thumbnail: map },
];

function Header() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("Kigali");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const handleCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
    setIsCurrencyOpen(false);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location.name);
    setIsLocationOpen(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Handle property filter logic here
  };

  return (
    <>
      <div className="header">
        <div className="top">
          <div className="container">
            <div className="content">
              <Link to={"/"} className="logo">
                <img src={logo} alt="Rwandanna" />
              </Link>
              {/*
               */}
              <div>
                <ul>
                  <li>
                    <a href="" className="active">
                      Buy
                    </a>
                  </li>
                  <li>
                    <a href="realestate/sell">Sell</a>
                  </li>
                  <li>
                    <a href="">Rent</a>
                  </li>
                  <li><a href="/about-us">about us</a></li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* Currency Dropdown */}
              <div className="currency">
                <button
                  title="Currency"
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                >
                  {selectedCurrency.toLowerCase()}
                </button>
                {isCurrencyOpen && (
                  <ul className="currency-dropdown">
                    {currencies.map((currency) => (
                      <li
                        key={currency}
                        onClick={() => handleCurrencyChange(currency)}
                      >
                        {currency}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="cta">
                <button className="auth">Login</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="container">
            <div className="content">
              <div className="all">
                <button>
                  <TbLayoutDashboard /> All Properties
                </button>
              </div>

              {/* Property Filters */}
              <ul className="property-filter">
                <li onClick={() => handleCategoryChange("home")}>
                  <IoHomeOutline /> Home
                </li>
                <li
                  className="active"
                  onClick={() => handleCategoryChange("villa")}
                >
                  <MdOutlineVilla /> Villa
                </li>
                <li onClick={() => handleCategoryChange("apartment")}>
                  <MdApartment /> Apartment
                </li>
                <li onClick={() => handleCategoryChange("hotel")}>
                  <LuHotel /> Hotel
                </li>
                <li onClick={() => handleCategoryChange("commercial")}>
                  <SiHomeassistantcommunitystore /> Commercial
                </li>
              </ul>

              {/* Location Dropdown */}
              <div className="location">
                <button onClick={() => setIsLocationOpen(!isLocationOpen)}>
                  <div className="img">
                    <img src={map} alt="Neighbourhood" />
                  </div>
                  <div className="txt">{selectedLocation}</div>
                </button>
                {isLocationOpen && (
                  <ul className="location-dropdown">
                    {neighborhoods.map((place) => (
                      <li
                        key={place.name}
                        onClick={() => handleLocationChange(place)}
                      >
                        <img src={place.thumbnail} alt={place.name} />{" "}
                        <span>{place.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
