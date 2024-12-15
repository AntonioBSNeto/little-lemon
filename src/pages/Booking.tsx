import { useReducer } from "react"
import BookingForm from "../components/BookingForm"
import { fetchAPI } from "../service/serviceAPI"

interface AvailableTimesAction {
  type: 'UPDATE_TIMES'
  payload: Date // selected date
}

type AvailableTimesState = string[]

export function initializeTimes(date: Date): AvailableTimesState {
  const today = date.toISOString().split('T')[0];
  return fetchAPI(today);
}

export function updateTimes(state: AvailableTimesState, action: AvailableTimesAction): AvailableTimesState {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of the date
      return initializeTimes(action.payload)
    default:
      return state
  }
}

export const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, new Date(), initializeTimes)

  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  )
}