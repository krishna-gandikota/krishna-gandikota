import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
interface ModalCloseButtonProps {
    handleClose: any,
    classes?: any,
}
const ModalCloseButton = ({ handleClose, classes }: ModalCloseButtonProps) => {
    return (
        <AiOutlineCloseCircle onClick={handleClose} className={`cursor-pointer w-[25px] h-[25px] lg:h-[25px] lg:w-[25px] dark:text-white ${classes}`} />
    )
}

export default ModalCloseButton;