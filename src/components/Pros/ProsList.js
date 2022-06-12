import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "../../components/List";
import { editProsItem, removeProsItem } from "../../store/actionCreators";
import { getProsList } from "../../store/selectors";

export const ProsList = () => {
  const dispatch = useDispatch();

  const pros = useSelector(getProsList);

  const onRemove = useCallback((index) => dispatch(removeProsItem(index)), []);

  const onEdit = useCallback(
    (index, value) => dispatch(editProsItem(index, value)),
    []
  );

  return <List list={pros} onEdit={onEdit} onRemove={onRemove} />;
};
