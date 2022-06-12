import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { ProsList } from "./ProsList";

import { AddInput } from "../../components/AddInput";
import { addProsItem } from "../../store/actionCreators";

const Pros = () => {
  const dispatch = useDispatch();

  const onAdd = useCallback((value) => dispatch(addProsItem(value)), []);

  return (
    <div className={`pros-list__holder`}>
      <h1>Pros</h1>
      <div className="list-content">
        <ProsList />
        <AddInput onSubmit={onAdd} />
      </div>
    </div>
  );
};

export default Pros;
