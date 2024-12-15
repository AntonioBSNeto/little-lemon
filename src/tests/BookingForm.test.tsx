import { render, screen } from "@testing-library/react"
import BookingForm from "../components/BookingForm"
import "@testing-library/jest-dom";


// Mock the dispatch function
const mockDispatch = jest.fn()

// Mock available times
const mockAvailableTimes = ['17:00', '18:00', '19:00']

describe('Booking form', () => {
  test('Renders the BookingForm', () => {
    render(<BookingForm dispatch={mockDispatch} availableTimes={mockAvailableTimes} />)
    const headingElement = screen.getByText("Reserve a Table")
    expect(headingElement).toBeInTheDocument()
  })

  test('Renders all form fields', () => {
    render(<BookingForm dispatch={mockDispatch} availableTimes={mockAvailableTimes} />)
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument()
    expect(screen.getByText(/Seating Preference/i)).toBeInTheDocument()
  })
  test('Render submit button', () => {
    render(<BookingForm dispatch={mockDispatch} availableTimes={mockAvailableTimes} />)
    const submitButton = screen.getByRole('button', { name: /Reserve a table/i})
    expect(submitButton).toBeInTheDocument();
  })

})
