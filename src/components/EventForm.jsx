import React, { useEffect, useState } from "react";
import img1 from "./assest/Avatar (1).png";
import img2 from "./assest/Avatar (2).png";
import img3 from "./assest/Avatar (3).png";
import img4 from "./assest/Avatar (4).png";
import img5 from "./assest/Avatar (5).png";
import img6 from "./assest/Avatar (6).png";
import img7 from "./assest/Avatar.png";
const data = [
  {
    name: "neha",
    imgUrl: img1,
  },
  {
    name: "muskan",
    imgUrl: img2,
  },
  {
    name: "palvi",
    imgUrl: img3,
  },
  {
    name: "shakshi",
    imgUrl: img4,
  },
  {
    name: "gunjan",
    imgUrl: img5,
  },
  {
    name: "anjali",
    imgUrl: img6,
  },
  {
    name: "preeti",
    imgUrl: img7,
  },
  {
    name: "jyoti",
    imgUrl: img7,
  },
];
const EventForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeValue, setActiveValue] = useState([]);
  const [remove, setRemove] = useState(false);

  const clickHandler = (obj) => {
    setActiveValue((prev) => [...prev, obj]);
    setSearchValue("");
  };

  let difference = data.filter((x) => !activeValue.includes(x.imgUrl));

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <form action="" className="form_validation mb-2">
              <div className="d-flex">
                <input className="mb-0" type="text" placeholder="Add event" />
                <button className="mt-0 text-nowrap">Add description</button>
              </div>
              <div className="d-flex mt-3 mb-2">
                <input type="date" />
                <input type="time" />
                <input type="text" placeholder="duration" />
              </div>
              <input type="location" placeholder="Location" />
              <div className="d-flex mt-3">
                <input
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  className="mb-0"
                  type="search"
                  placeholder="Add members"
                  value={searchValue}
                />
                <button className="mt-0">Add</button>
              </div>
              <div className="text-start d-flex align-items-center">
                {activeValue.slice(0, 6).map((obj, i) => (
                  <img
                    onClick={() => setRemove(activeValue.splice(i, 1))}
                    className="small_images"
                    src={obj}
                    alt="small images"
                  />
                ))}
                {activeValue && activeValue.length > 6 && (
                  <h1 className="mb-0">+{activeValue.length - 6}</h1>
                )}
              </div>
            </form>
            {difference.map(
              (obj, i) =>
                obj.name.includes(searchValue) &&
                searchValue !== "" && (
                  <div
                    className="row"
                    onClick={() => {
                      clickHandler(obj.imgUrl);
                    }}
                  >
                    <div className="col-8 border">{obj.name}</div>
                    <div className="col-4 border">
                      <img src={obj.imgUrl} alt="small images" />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
