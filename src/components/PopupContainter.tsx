import { FC, PropsWithChildren, useEffect } from "react";

export type IPopupContainer = {
  show: boolean;
  handleClose?: () => void;
};
export const PopupContainer: FC<PropsWithChildren<IPopupContainer>> = ({ show, children, handleClose }) => {
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={`before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-50 before:bg-[#00000040] before:transition-opacity before:duration-300`}
      onClick={() => {
        if (handleClose) handleClose();
      }}
    >
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg md:max-w-xl lg:max-w-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="m-auto rounded-lg bg-white">
          <div className="p-3">{children}</div>
        </div>
      </div>
    </div>
  );
};
