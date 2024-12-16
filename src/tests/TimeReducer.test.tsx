import { initializeTimes, updateTimes } from "../pages/Booking"

describe('Time reducer functions', () => {
    test('initializeTimes returns the correct initial state', () => {
        const initialTimes = initializeTimes(new Date('2024-12-15'))
        expect(initialTimes).toEqual(['17:00', '17:30', '18:30', '19:30', '20:00', '21:30', '22:00'])
    })

    test('updateTimes returns the same value provided in the state', () => {
        const currentState = ['17:00', '17:30', '20:30', '22:30']
        const newState = updateTimes(currentState, { type: 'UPDATE_TIMES', payload: new Date('2024-12-16') })
        expect(newState).toEqual(currentState)
    })
})

