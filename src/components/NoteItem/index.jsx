import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export const NoteItem = ({ isnew, value, onClick, classname, ...rest }) => {
  return (
    <Container isnew={isnew}>
      <input
        type="text"
        value={value}
        readOnly={!isnew}
        className={classname}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isnew ? "button-add" : "button-delete"}
      >
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};
