import {useState} from 'react'

interface ModalProps {
    isOpen?:boolean;
    onClose:()=>void;
    onSubmit:()=>void;
    title?:string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLabel?:boolean;
    secondaryAction?:()=>void;
    secondaryLabel?:string;
}

const Modal:React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    secondaryAction,
    secondaryLabel
}) => {
    const [showModal,setShowModal] = useState(false);

  return (
    <div>Modal</div>
  )
}

export default Modal