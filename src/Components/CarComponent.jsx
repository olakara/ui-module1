import * as React from "react";
import ApplyComponent from "./ApplyComponent";

const CarComponent = (props) => {
  return (
    <div>
      {props.vm.name}
      {props.vm.financeLink && <ApplyComponent vm={props.vm} />}
    </div>
  );
};

export default CarComponent;
