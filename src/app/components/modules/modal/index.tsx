import { Modal } from 'antd';
import iconBack from 'assets/images/icons/back.svg';
import iconClose from 'assets/images/icons/close.svg';
import './style.scss';

interface ModalProps {
  isOpen: boolean;
  onClickBackIcon?: () => void;
  isShowBackIcon?: boolean;
  isShowCloseIcon: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactElement;
  width?: string;
}

const ModalCustom: React.FC<ModalProps> = ({
  isOpen,
  onClickBackIcon,
  isShowBackIcon,
  isShowCloseIcon,
  onClose,
  title,
  children,
  width,
}) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      closable={false}
      footer={null}
      className="modal-custom"
      centered
      maskClosable={false}
      width={width}
    >
      <div className="modal-header">
        {title && (
          <div className="modal-title">
            {isShowBackIcon && (
              <img src={iconBack} alt="" onClick={onClickBackIcon} />
            )}
            {title}
          </div>
        )}
        {isShowCloseIcon && (
          <button className="close-icon" onClick={onClose}></button>
        )}
      </div>
      {children}
    </Modal>
  );
};

export default ModalCustom;
