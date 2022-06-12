import Pros from "../Pros/index";
import Cons from "../Cons/index";

import "./index.scss";

export const ListContainer = () => {
  return (
    <div className="list__holder">
      <Pros />
      <Cons />
    </div>
  );
};
