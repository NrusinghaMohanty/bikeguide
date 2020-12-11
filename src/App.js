import React, { useState } from "react";
import "./styles.css";

var buttonList = ["Under2lakh", "Under3lakh", "Under4lakh", "Under5lakh"];

var bikedata = {
  Under2lakh: {
    bikes: [
      "Yamaha YZF R15 V3",
      "Yamaha MT 15",
      "KTM 125 Duke",
      "Bajaj Pulsar NS200"
    ],
    ratings: ["4.7/5", "4.6/5", "4.5/5", "4.5/5"]
  },

  Under3lakh: {
    bikes: [
      "Royal Enfield Himalayan",
      "KTM 200 Duke",
      "Bajaj Dominar 400",
      "Honda Hness CB350"
    ],
    ratings: ["4.8/5", "4.7/5", "4.5/5", "4.3/5"]
  },

  Under4lakh: {
    bikes: [
      "Kawasaki Ninja 300",
      "BS6 KTM Duke 390",
      "Royal Enfield Interceptor 650",
      "KTM 390 Adventure"
    ],
    ratings: ["4.8/5", "4.7/5", "4.5/5", "4.5/5"]
  },

  Under5lakh: {
    bikes: [
      "Harley-Davidson Street 750",
      "BMW G 310 GS",
      "Kawasaki Vulcan S",
      "Royal Enfield Continental GT 650"
    ],
    ratings: ["4.7/5", "4.6/5", "4.5/5", "4.5/5"]
  }
};

export default function App() {
  const [bikename, setbikename] = useState("Under2lakh");

  function clickEventHandler(item) {
    setbikename(item);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Bikes Guide 🏍️</h1>
        <hr></hr>
        <p>Bikes in different catagories range</p>
      </div>

      <main>
        <div className="section">
          <p>Click to know</p>

          {buttonList.map((item) => {
            return (
              <button
                className="btn"
                key={item}
                onClick={() => clickEventHandler(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div>
          <h2>Best model</h2>

          <ul className="contain">
            {bikedata[bikename].bikes.map(function (item, index) {
              return (
                <li key={item}>
                  {item} <br></br>rating:
                  <span> {bikedata[bikename].ratings[index]} </span>
                  <hr></hr>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
