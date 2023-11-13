import PropTypes from "prop-types";
import { useState } from "react";
import { ChangeContactForm } from "../ChangeContactForm/ChangeContactForm";
import { Modal } from "../Modal/Modal";

export const ChangeBtn = ({ name, id, number }) => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <button onClick={toggleModal}>Change</button>
      {isModal && (
        <Modal toggleModal={toggleModal}>
          <ChangeContactForm name={name} number={number} id={id} />
        </Modal>
      )}
    </>
  );
};

ChangeBtn.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  number: PropTypes.string.isRequired,
};

  