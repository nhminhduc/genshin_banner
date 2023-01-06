import CharacterCard, {
  CharacterCardProps,
} from "components/molecules/CharacterCard/CharacterCard";
import useModal from "hooks/useModal";
import { useCallback, useState } from "react";
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

  return expanded
    ? ReactDOM.createPortal(
        <FocusLock>
          <div className="modal-backdrop fixed w-full h-full top-0 lg:hidden z-20">
            <div
              aria-labelledby="modalTitle"
              aria-modal={true}
              className="w-2/3 translate-x-1/4 translate-y-1/2"
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.preventDefault();
                  setExpanded(false);
                }
              }}
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
