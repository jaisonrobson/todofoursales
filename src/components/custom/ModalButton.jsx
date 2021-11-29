import React, { useContext, Fragment } from 'react'
import {
    Modal as ReactstrapModal,
    ModalHeader as ReactstrapModalHeader,
    ModalBody as ReactstrapModalBody,
    ModalFooter as ReactstrapModalFooter
} from 'reactstrap'

import { FlagContext, withFlagContext } from 'contexts/withFlagContext'
import Button from 'components/layout/Button'

const ModalFooter = ({
    children,
    showConfirmButton = true,
    showCancelButton = true,
    onConfirm = () => { },
    ...rest
}) => {
    const { isOpen, setIsOpen } = useContext(FlagContext)
    const toggleModal = () => setIsOpen(!isOpen)
    const onConfirmInternal = () => {
        const result = onConfirm()

        if (result) toggleModal()

        return result
    }

    return (
        <ReactstrapModalFooter {...rest}>
            {showConfirmButton ? (
                <Button
                    color="primary"
                    onClick={onConfirmInternal}
                >
                    Salvar
                </Button>
            ) : null}

            {children}

            {showCancelButton ? (
                <Button onClick={toggleModal}>
                    Cancelar
                </Button>
            ) : null}
        </ReactstrapModalFooter>
    )
}

const ModalBody = ({ children, ...rest }) => (
    <ReactstrapModalBody {...rest}>
        {children}
    </ReactstrapModalBody>
)

const ModalHeader = ({ children, ...rest }) => {
    const { isOpen, setIsOpen } = useContext(FlagContext)
    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <ReactstrapModalHeader toggle={toggleModal} {...rest}>
            {children}
        </ReactstrapModalHeader>
    )
}

const ModalButton = ({ children, buttonChildren, ...rest }) => {
    const { isOpen, setIsOpen } = useContext(FlagContext)
    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <Fragment>
            <Button
                onClick={toggleModal}
                {...rest}
            >
                {buttonChildren}
            </Button>

            <ReactstrapModal
                toggle={toggleModal}
                isOpen={isOpen}
            >
                {children}
            </ReactstrapModal>
        </Fragment>
    )
}

ModalButton.Header = ModalHeader
ModalButton.Body = ModalBody
ModalButton.Footer = ModalFooter

export default withFlagContext(
    ModalButton,
    {
        flag: 'isOpen',
        initialValue: false,
    }
)
