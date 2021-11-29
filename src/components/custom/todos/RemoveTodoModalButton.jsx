import React, { useContext } from 'react'

import ModalButton from 'components/layout/ModalButton'
import Form from 'components/layout/Form'
import { withReducerContextConsumer } from 'contexts/withReducerContext'
import { FlagContext } from 'contexts/withFlagContext'
import { tododelete } from 'store/actions'
import Button from 'components/layout/Button'

const CancelButton = () => {
    const { isOpen, setIsOpen } = useContext(FlagContext)
    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <Button color="primary" onClick={toggleModal}>
            Não
        </Button>
    )
}

const RemoveTodoModalButton = ({
    reducer,
    headerText = "Modal",
    id,
    name,
    ...props
}) => {
    const onConfirm = () => {
        tododelete(reducer.dispatch, id)

        return {}
    }

    return (
        <ModalButton
            block
            textColor="black"
            buttonColor="transparent"
            hoverColor="#a3b9cf"
            activeColor="#778899"
            {...props}
        >
            <Form width="100%" height="100%">
                <ModalButton.Header>
                    Deseja remover a tarefa?
                </ModalButton.Header>

                <ModalButton.Body>
                    <span>{name}</span>
                </ModalButton.Body>

                <ModalButton.Footer
                    showConfirmButton={false}
                    showCancelButton={false}
                >
                    <Button
                        color="danger"
                        onClick={onConfirm}
                    >
                        Sim
                    </Button>

                    <CancelButton />
                </ModalButton.Footer>
            </Form>
        </ModalButton>
    )
}

export default withReducerContextConsumer(RemoveTodoModalButton)
