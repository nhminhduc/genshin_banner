import CharacterCard, {
  CharacterCardProps,
} from "components/molecules/CharacterCard/CharacterCard";
import useModal from "hooks/useModal";
import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import FocusLock from "react-focus-lock";

type CharacterCardModalProps = CharacterCardProps & {
  onCloseModal?(): void;
  onOutsideClick?(): void;
};
const CharacterCardModal = ({
  character,
  className,
  onCloseModal,
  onOutsideClick,
}: CharacterCardModalProps) => {
  const [expanded, setExpanded] = useState(true);

  const handleClose = useCallback(() => {
    setExpanded(false);
  }, [setExpanded]);

  const { modalRef } = useModal(expanded, handleClose, () => {
    if (onOutsideClick) {
      onOutsideClick();
    }
    if (onCloseModal) {
      onCloseModal();
    }
    setExpanded(false);
  });

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return expanded
    ? ReactDOM.createPortal(
        <FocusLock>
          <div className="modal-backdrop fixed w-full h-full top-0 2xl:hidden z-20 flex justify-center top-20">
            <div
              aria-labelledby="modalTitle"
              aria-modal={true}
              className="h-min w-3/4 md:w-3/5 "
              ref={modalRef}
              role="dialog"
              tabIndex={-1}
            >
              <CharacterCard character={character} className={className} />
            </div>
          </div>
        </FocusLock>,
        document.body,
      )
    : null;
};

export default CharacterCardModal;
