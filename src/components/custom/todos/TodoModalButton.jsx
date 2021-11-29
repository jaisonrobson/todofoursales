import React from 'react'
import _ from 'lodash'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FormGroup, Label, Input } from 'reactstrap'

import Icon from 'components/layout/Icon'
import ModalButton from 'components/layout/ModalButton'
import Form from 'components/layout/Form'
import Select from 'components/layout/Select'
import { withReducerContextConsumer } from 'contexts/withReducerContext'
import { CATEGORIES } from 'util/constants'

const TodoModalButton = ({ headerText = "Modal" }) => {
    return (
        <Form width="100%" height="100%">
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
                    <FormGroup>
                        <Label for="name">Nome</Label>
                        <Input type="text" name="name" maxLength="30" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Categoria</Label>
                        <Select name="category">
                            {_.map(_.toArray(CATEGORIES), (element) => <option key={element}>{element}</option>)}
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Descrição</Label>
                        <Input type="textarea" name="description" maxLength="100" />
                    </FormGroup>
                </ModalButton.Body>
                <ModalButton.Footer />
            </ModalButton>
        </Form>
    )
}

export default withReducerContextConsumer(TodoModalButton)
