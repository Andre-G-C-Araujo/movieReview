import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export const NoteItem = ({ isNew, value, onClick, classname, ...rest }) => {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        className={classname}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};
