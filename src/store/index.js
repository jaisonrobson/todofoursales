import { CATEGORIES } from 'util/constants'
import { reducer } from './reducers'

const initialState = {
    todos: [
        {
            id: Date.now(),
            name: 'Sujeira na calha',
            category: CATEGORIES.PERSONAL,
            description: 'Remover a sujeira da calha quando houver tempo livre',
            completed: false,
        },
        {
            id: Date.now() + 1,
            name: 'Festa na piscina',
            category: CATEGORIES.PERSONAL,
            description: 'Higienizar a piscina antes da festa',
            completed: false,
        },
        {
            id: Date.now() + 2,
            name: 'Requisito de importacao',
            category: CATEGORIES.WORK,
            description: 'Averiguar com o cliente a necessidade da importacao de arquivos no sistema',
            completed: false,
        },
    ],
}

export {
    initialState,
    reducer,
}