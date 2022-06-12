import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { ConsList } from "./ConsList";
import { AddInput } from "../../components/AddInput";

import { addConsItem } from "../../store/actionCreators";

const Cons = () => {
  const dispatch = useDispatch();

  const onAdd = useCallback((value) => dispatch(addConsItem(value)), []);

  return (
    <div className={`cons-list__holder`}>
      <h1>Cons</h1>
      <div className="list-content">
        <ConsList />
        <AddInput onSubmit={onAdd} />
      </div>
    </div>
  );
};

export default Cons;
