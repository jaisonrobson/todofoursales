import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Icon from 'components/layout/Icon'
import ModalButton from 'components/layout/ModalButton'
import { withReducerContextConsumer } from 'contexts/withReducerContext'

const TodoModalButton = ({ headerText = "Modal" }) => {
    return (
        <ModalButton
            block
            textColor="black"
            buttonColor="transparent"
            hoverColor="#a3b9cf"
            activeColor="#778899"
            buttonChildren={<Icon icon={faPlus} />}
        >
            <ModalButton.Header>
                {headerText}
            </ModalButton.Header>
            <ModalButton.Body>

            </ModalButton.Body>
            <ModalButton.Footer />
        </ModalButton>
    )
}

export default withReducerContextConsumer(TodoModalButton)
