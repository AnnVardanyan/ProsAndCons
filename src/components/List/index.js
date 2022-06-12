export const List = (props) => {
  const { list, onEdit, onRemove } = props;

  const editOrDelete = (e, index) => {
    const { value } = e.target;
    if (value === "") {
      onRemove(index);
    } else {
      onEdit(index, value);
    }
  };

  return (
    <>
      {list.map((item, index) => (
        <div>
          <span>{index + 1}</span>
          <input
            value={item}
            key={index}
            onBlur={(e) => editOrDelete(e, index)}
            onChange={(e) => onEdit(index, e.target.value)}
          />
        </div>
      ))}
    </>
  );
};
