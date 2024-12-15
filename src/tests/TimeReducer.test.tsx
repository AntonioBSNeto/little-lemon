import { initializeTimes, updateTimes } from "../pages/Booking"


describe('Time reducer functions', () => {
    test('initializeTimes returns the correct initial state', () => {
        const initialTimes = initializeTimes(new Date())
        expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
    })

    test('updateTimes returns the same value provided in the state', () => {
        const currentState = ['17:00', '18:00', '19:00']
        const newState = updateTimes(currentState, { type: 'UPDATE_TIMES', payload: new Date('2023-06-01') })
        expect(newState).toEqual(currentState)
    })
})

