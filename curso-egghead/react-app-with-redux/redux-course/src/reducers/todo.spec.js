import reducer from './todo';

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' })
        expect(result).toBeDefined()
    })

    test('adds a todo', () => {
        const starState = {
            todos: [
                { id: 1, name: 'Render static UI', isCompleted: true },
                { id: 2, name: 'Create initial state', isCompleted: true },
                { id: 3, name: 'Render based on state', isCompleted: false }
            ]
        }
        const expectedState = {
            todos: [
                { id: 1, name: 'Render static UI', isCompleted: true },
                { id: 2, name: 'Create initial state', isCompleted: true },
                { id: 3, name: 'Render based on state', isCompleted: false },
                { id: 4, name: 'Added todo', isCompleted: false }
            ]
        }
        const action = { type: 'TODO_ADD', payload: { id: 4, name: 'Added todo', isCompleted: false } }
        const result = reducer(starState, action)
        expect(result).toEqual(expectedState)
    })
})