import React, { createContext, useReducer } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import { getDisplayName } from '../util/hoc'
import { reducer, initialState } from 'store'

export const ReducerContext = createContext({})

export const withReducerContextConsumer = (WrappedComponent) => {
    const WithReducerContextConsumer = props => (
        <ReducerContext.Consumer>
            {value => <WrappedComponent {...props} reducer={value} />}
        </ReducerContext.Consumer>
    )

    hoistNonReactStatic(WithReducerContextConsumer, WrappedComponent)

    WithReducerContextConsumer.displayName = `WithReducerContextConsumer(${getDisplayName(WrappedComponent)})`

    return WithReducerContextConsumer
}

export const withReducerContextProvider = (WrappedComponent) => {
    const WithReducerContextProvider = (props) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const value = {
            ...state,
            dispatch,
        }

        return (
            <ReducerContext.Provider value={value}>
                <WrappedComponent {...props} />
            </ReducerContext.Provider>
        )
    }

    hoistNonReactStatic(WithReducerContextProvider, WrappedComponent)

    WithReducerContextProvider.displayName = `WithReducerContextProvider(${getDisplayName(WrappedComponent)})`

    return WithReducerContextProvider
}