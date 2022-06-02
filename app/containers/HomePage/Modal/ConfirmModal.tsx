import React, { FC } from 'react';
import { Button, Modal, ButtonProps } from 'react-bootstrap';
import ModalStyles from '../../../styles/modal';

type ConfirmModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  onConfirm: () => void;
  confirmBtnText: string;
  hideCloseButton?: boolean;
  additionalButtonConfig?: ButtonProps & {
    text?: string;
    onClick?: () => void;
  };
  confirmButtonConfig?: ButtonProps;
};

export const ConfirmModal: FC<ConfirmModalProps> = props => {
  const {
    show,
    onHide,
    onConfirm,
    title,
    children,
    confirmBtnText,
    hideCloseButton,
    additionalButtonConfig,
    confirmButtonConfig,
  } = props;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <div className="button-group" onClick={onHide}>
          <Button
            {...confirmButtonConfig}
            className="deleteBtn"
            onClick={onConfirm}
          >
            {confirmBtnText}
          </Button>
          <button className="close-button">Close</button>
        </div>
      </Modal.Footer>
      <ModalStyles />
    </Modal>
  );
};
