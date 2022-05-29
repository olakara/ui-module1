import "./styles.css";
import * as React from "react";
import BrandComponent from "./Components/BrandComponent";

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

  const viewModel = {
    brand: []
  };

  function getFeatures(brand) {
    let featuresArray = brand.models.map((model) => {
      return model.features;
    });
    var merged = [].concat.apply([], featuresArray);
    return merged;
  }

  data.brand.forEach((brand) => {
    let hasFinance = brand.models.filter((x) => x.financeApplyLink).length > 0;

    let title = brand.name + " has " + brand.models.length + " cars available";
    if (hasFinance) {
      title = title + " (has finance)";
    }

    let brandVm = {
      title: title,
      models: brand.models.map((model) => {
        return {
          name: model.modelName
        };
      }),
      features: getFeatures(brand)
    };
    console.log("test", brandVm.features);
    viewModel.brand.push(brandVm);
  });

  return (
    <>
      {viewModel.brand.map((brand) => {
        return <BrandComponent vm={brand} />;
      })}
    </>
  );
};

export default App;
