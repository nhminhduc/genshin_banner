import { useOnClickOutside } from "hooks/useOnClickOutside";
import { MutableRefObject, useEffect, useRef } from "react";

interface UseModal {
  modalRef: MutableRefObject<HTMLDivElement | null>;
}

function useModal(
  open?: boolean,
  onClose?: () => void,
  onOutsideClick?: () => void,
): UseModal {
  const modalRef = useRef<HTMLDivElement | null>(null);

  function handleOnClose() {
    if (onClose) {
      onClose();
    }
  }

  useOnClickOutside<HTMLDivElement>(modalRef, () => {
    if (onOutsideClick) {
      onOutsideClick();
    }

    handleOnClose();
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        handleOnClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";

      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        (backdrop as HTMLElement).style.backdropFilter = "blur(3px)";
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.style.width = "unset";
    }

    document.addEventListener("keydown", onKeyDown, false);

    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [open]);

  return { modalRef };
}

export default useModal;
