import "./styles.css";
import * as React from "react";
import ExampleComponent from "./Components/ExampleComponent";

const App = (props) => {
  const data = {
    brand: [
      {
        name: "Tesla",
        financeLengthInMonths: 24,
        models: [
          {
            modelName: "Roadster",
            features: [{ name: "coupe" }, { name: "autopilot" }]
          },
          {
            modelName: "Model X",
            features: [{ name: "gull wing doors" }]
          },
          {
            modelName: "Cyber Truck",
            features: [{ name: "exoskeleton" }],
            financeApplyLink: "http://finance.com/apply"
          }
        ]
      },
      {
        name: "Ford",
        financeLengthInMonths: 36,
        models: [
          {
            modelName: "Petrol Mustang",
            features: [{ name: "fuel guage" }]
          },
          {
            modelName: "Electric Mustang",
            features: [
              { name: "electric charging point" },
              { name: "battery" }
            ],
            financeApplyLink: "http://finance.com/apply"
          },
          {
            modelName: "Petrol Mustang",
            features: []
          }
        ]
      },
      {
        name: "Peugeot",
        financeLengthInMonths: 0,
        models: [
          {
            modelName: "208",
            features: [{ name: "alloys wheels" }]
          },
          {
            modelName: "508 Hybrid",
            features: [
              { name: "electric charging point" },
              { name: "battery" },
              { name: "fuel guage" }
            ]
          }
        ]
      }
    ]
  };

  // create a viewmodel here

  return (
    <>
      <ExampleComponent />
      {data.brand.map((brand) => {
        return (
          <p>
            {brand.name}
            {/* Begin Here*/}
          </p>
        );
      })}
    </>
  );
};

export default App;
