import Filters from "components/molecules/Filters/Filters";
import { useState } from "react";
import * as Modal from "react-modal";

const FilterModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.25)'
    },
  };

  return (
    <div className="bg-amber-600 border border-amber-200 rounded p-1 mr-4 text-white font-medium md:hidden">
      <button onClick={openModal}>Filters</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Filters"
        ariaHideApp={false}
        className="overflow-hidden w-2/3 translate-x-1/4 translate-y-1/4 md:hidden"
        style={modalStyle}
      >
        <Filters />
      </Modal>
    </div>
  );

}

export default FilterModal;
