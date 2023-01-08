import Filters from "components/molecules/Filters/Filters";
import useModal from "hooks/useModal";
import { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import FocusLock from "react-focus-lock";

const FilterModal = () => {
  const [expanded, setExpanded] = useState(false);

  const handleClose = useCallback(() => {
    setExpanded(false);
  }, [setExpanded]);

  const { modalRef } = useModal(expanded, handleClose, () => {
    setExpanded(false);
  });

  function openModal() {
    setExpanded(true);
  }

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
  };

  return (
    <div className="bg-amber-600 border border-amber-200 rounded p-1 mr-4 text-white font-medium lg:hidden">
      <button onClick={openModal} type="button">
        Filters
      </button>
      {expanded
        ? ReactDOM.createPortal(
            <FocusLock>
              <div className="modal-backdrop fixed w-full h-full top-0 lg:hidden">
                <div
                  aria-labelledby="modalTitle"
                  aria-modal={true}
                  className="w-2/3 translate-x-1/4 translate-y-1/2"
                  ref={modalRef}
                  role="dialog"
                  tabIndex={-1}
                >
                  <Filters />
                </div>
              </div>
            </FocusLock>,
            document.body,
          )
        : null}
    </div>
  );
};

export default FilterModal;
