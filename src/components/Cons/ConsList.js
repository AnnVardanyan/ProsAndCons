import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { List } from "../../components/List";

import { editConsItem, removeConsItem } from "../../store/actionCreators";
import { getConsList } from "../../store/selectors";

export const ConsList = () => {
  const dispatch = useDispatch();

  const cons = useSelector(getConsList);

  const onRemove = useCallback((index) => dispatch(removeConsItem(index)), []);

  const onEdit = useCallback(
    (index, value) => dispatch(editConsItem(index, value)),
    []
  );

  return <List list={cons} onEdit={onEdit} onRemove={onRemove} />;
};
