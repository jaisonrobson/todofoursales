import React, { useState } from 'react'
import _ from 'lodash'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FormGroup, Label, FormFeedback } from 'reactstrap'

import Icon from 'components/layout/Icon'
import ModalButton from 'components/layout/ModalButton'
import Form from 'components/layout/Form'
import Input from 'components/layout/Input'
import { withReducerContextConsumer } from 'contexts/withReducerContext'
import { CATEGORIES } from 'util/constants'
import { ACTIONS, todoadd, todoedit } from 'store/actions'

const TodoModalButton = ({
    reducer,
    action = ACTIONS.TODO_ADD,
    headerText = "Modal",
    id = Date.now(),
    name = "",
    category = CATEGORIES.WORK,
    description = "",
    completed = false,
    ...props
}) => {
    const [todo, setTodo] = useState({
        id,
        name,
        category,
        description,
        completed,
    })
    const [errors, setErrors] = useState({})

    const onOpened = () => {
        setTodo(prevState => ({ ...prevState, id, name, category, description, completed }))
        setErrors({})
    }

    const onConfirm = () => {
        let validation = {}

        if (todo.name.length < 5 || todo.name.length > 30) {
            validation = { ...validation, name: 'nome inválido' }
        }

        if (todo.description < 20 || todo.description > 100) {
            validation = { ...validation, description: 'descrição inválida' }
        }

        setErrors(prevState => prevState !== validation ? validation : prevState)

        if (_.isEmpty(validation)) {
            if (action === ACTIONS.TODO_ADD) {
                todoadd(reducer.dispatch, todo)
            } else if (action === ACTIONS.TODO_EDIT) {
                todoedit(reducer.dispatch, todo)
            }
        }

        return validation
    }

    const onChangeField = (field) => (event) => {
        setTodo((prevState) => prevState[field] !== event.target.value
            ? { ...prevState, [field]: event.target.value }
            : prevState)
    }

    const onChangeName = onChangeField('name')
    const onChangeCategory = onChangeField('category')
    const onChangeDescription = onChangeField('description')

    return (
        <ModalButton
            block
            textColor="black"
            buttonColor="transparent"
            hoverColor="#a3b9cf"
            activeColor="#778899"
            buttonChildren={<Icon icon={faPlus} />}
            onOpened={onOpened}
            {...props}
        >
            <Form width="100%" height="100%">
                <ModalButton.Header>
                    {headerText}
                </ModalButton.Header>

                <ModalButton.Body>
                    <Input name="id" value={todo.id} hidden />

                    <Input type="checkbox" name="completed" checked={todo.completed} hidden />

                    <FormGroup className="position-relative">
                        <Label for="name">Nome</Label>

                        <Input
                            type="text"
                            name="name"
                            minLength="5"
                            maxLength="30"
                            onChange={onChangeName}
                            value={todo.name}
                            invalid={!_.isEmpty(errors.name)}
                        />

                        <FormFeedback tooltip>{errors.name}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="category">Categoria</Label>

                        <Input type="select" name="category" onChange={onChangeCategory} value={todo.category}>
                            {_.map(_.toArray(CATEGORIES), (element) => <option key={element}>{element}</option>)}
                        </Input>
                    </FormGroup>

                    <FormGroup className="position-relative">
                        <Label for="description">Descrição</Label>

                        <Input
                            type="textarea"
                            name="description"
                            minLength="20"
                            maxLength="100"
                            onChange={onChangeDescription}
                            value={todo.description}
                            invalid={!_.isEmpty(errors.description)}
                        />

                        <FormFeedback tooltip htmlFor="name">{errors.description}</FormFeedback>
                    </FormGroup>
                </ModalButton.Body>

                <ModalButton.Footer onConfirm={onConfirm} />
            </Form>
        </ModalButton>
    )
}

export default withReducerContextConsumer(TodoModalButton)
