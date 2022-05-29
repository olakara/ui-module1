import * as React from "react";
import CarComponent from "./CarComponent";

const BrandComponent = (props) => {
  return (
    <div>
      {props.vm.title}
      <ul>
        {props.vm.models.map((carModelVm) => {
          return (
            <li>
              <CarComponent vm={carModelVm} />
            </li>
          );
        })}
      </ul>
      Brand Features:[
      {props.vm.features.map((feature) => {
        return feature.name + ",";
      })}
      ]
    </div>
  );
};

export default BrandComponent;
