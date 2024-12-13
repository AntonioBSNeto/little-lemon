import { useReducer } from "react"
import BookingForm from "../components/BookingForm"

interface AvailableTimesAction {
  type: 'UPDATE_TIMES'
  payload: Date // selected date
}

type AvailableTimesState = string[]

function initializeTimes(): AvailableTimesState {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}

function updateTimes(state: AvailableTimesState, action: AvailableTimesAction): AvailableTimesState {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of the date
      return state
    default:
      return state
  }
}

export const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes)
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  )
}