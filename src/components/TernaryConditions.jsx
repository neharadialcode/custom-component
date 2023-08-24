import React from "react";
import { useLocation } from "react-router-dom";
import Video from "./Video";

const TernaryConditions = () => {
  const pathname = useLocation().pathname;
  const arr = [
    { link: "home", url: "/pagination" },
    { link: "about", url: "/duration" },
    { link: "contact", url: "/image-tabs" },
    { link: "sign-up", url: "/search" },
    { link: "roadmap", url: "#roadmap" },
  ];
  const content = [
    {
      heading: "first",
      listContent: [1, 2, 3, 4, 5],
    },
    { heading: "second" },
    { heading: "third" },
    { heading: "fourth" },
  ];
  return (
    <div>
      <Video />
      <ul className="d-flex justify-content-between">
        {arr.map((obj, i) => (
          <li className={`${pathname === obj.url && "text-danger"}`}>
            {obj.link}
          </li>
        ))}
        {pathname === "/" && <button>SIgnup</button>}
      </ul>
      <div className="container">
        <div className="row">
          {content.splice(0, 3).map((obj, i) => (
            <div className="col-3">
              <h1>{obj.heading}</h1>
              <button>Buy now</button>
              <ul>
                {obj.listContent &&
                  obj.listContent.splice(1, 0).map((obj, i) => <li>{obj}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TernaryConditions;
