import "@testing-library/jest-dom";
import { expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

// // Mock the dispatch function
const mockDispatch = vi.fn()

// // Mock available times
const mockAvailableTimes = ['17:00', '18:00', '19:00']

describe('Booking form', () => {
  test('Renders the BookingForm', async () => {
    render(
      <BrowserRouter>
        <BookingForm dispatch={mockDispatch} availableTimes={mockAvailableTimes} />
      </BrowserRouter>
    )
    const headingElement = screen.getByText("Reserve a Table")
    expect(headingElement).toBeInTheDocument()

  })

  test('Renders all form fields', () => {
    render(
      <BrowserRouter>
        <BookingForm dispatch={mockDispatch} availableTimes={mockAvailableTimes} />
      </BrowserRouter>
    )
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument()
    expect(screen.getByText(/Seating Preference/i)).toBeInTheDocument()
  })

  test('Render submit button', () => {
    render(
      <BrowserRouter>
        <BookingForm dispatch={mockDispatch} availableTimes={mockAvailableTimes} />
      </BrowserRouter>
    )
    const submitButton = screen.getByRole('button', { name: /Reserve a table/i })
    expect(submitButton).toBeInTheDocument();
  })

})

describe('BookinForm validation', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BookingForm dispatch={mockDispatch} availableTimes={mockAvailableTimes} />
      </BrowserRouter>
    )
  })

  it('renders the date input with correct attributes', () => {
    const dateInput = screen.getByLabelText(/Date/i) as HTMLInputElement
    expect(dateInput).toBeInTheDocument()
    expect(dateInput).toHaveAttribute('type', 'date')
    expect(dateInput).toHaveAttribute('id', 'date')
    expect(dateInput).toHaveAttribute('name', 'date')
    fireEvent.change(dateInput, { target: { value: '2024-12-15' } })
    expect(dateInput.value).toBe('2024-12-15')
  })

  it('renders the time select', () => {
    const timeSelect = screen.getByLabelText(/Time/i) as HTMLSelectElement
    fireEvent.change(timeSelect, { target: { value: '17:00' } })
    const options = screen.getAllByTestId('select-option') as HTMLOptionElement[]
    screen.debug(options)
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  })

  it('renders the guests input with correct attributes', () => {
    const guestsInput = screen.getByLabelText(/Number of Guests/i) as HTMLInputElement
    expect(guestsInput).toBeInTheDocument()
    expect(guestsInput).toHaveAttribute('type', 'number')
    expect(guestsInput).toHaveAttribute('id', 'guests')
    expect(guestsInput).toHaveAttribute('name', 'guests')
    expect(guestsInput).toHaveAttribute('min', '1')
    expect(guestsInput).toHaveAttribute('max', '10')
    fireEvent.change(guestsInput, { target: { value: 3 } })
    expect(guestsInput.value).toBe('3')
  })

  it('renders the occasion select with correct attributes', () => {
    const occasionSelect = screen.getByLabelText(/Occasion/i) as HTMLSelectElement
    expect(occasionSelect).toBeInTheDocument()
    expect(occasionSelect).toHaveAttribute('id', 'occasion')
    expect(occasionSelect).toHaveAttribute('name', 'occasion')
  })

  it('renders the seating preference radio buttons with correct attributes', () => {
    const indoorRadio = screen.getByLabelText(/Indoor/i) as HTMLInputElement
    const outdoorRadio = screen.getByLabelText(/Outdoor/i) as HTMLInputElement

    expect(indoorRadio).toBeInTheDocument()
    expect(indoorRadio).toHaveAttribute('type', 'radio')
    expect(indoorRadio).toHaveAttribute('name', 'seating')
    expect(indoorRadio).toHaveAttribute('value', 'indoor')

    expect(outdoorRadio).toBeInTheDocument()
    expect(outdoorRadio).toHaveAttribute('type', 'radio')
    expect(outdoorRadio).toHaveAttribute('name', 'seating')
    expect(outdoorRadio).toHaveAttribute('value', 'outdoor')
  })

  it('renders the submit button with correct text', () => {
    const submitButton = screen.getByRole('button', { name: /Reserve a Table/i })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('Data input validation', async () => {
    const dataInput = screen.getByLabelText(/Date/i) as HTMLInputElement
    const timeInput = screen.getByLabelText(/Time/i)
    const guestsInput = screen.getByLabelText(/Number of Guests/i) as HTMLInputElement
    const occasionInput = screen.getByLabelText(/Occasion/i) as HTMLSelectElement
    const indoorRadio = screen.getByRole('radio', { name: 'Indoor' }) as HTMLInputElement

    const submitButton = screen.getByRole('button', { name: /reserve a table/i }) as HTMLButtonElement

    fireEvent.change(dataInput, { target: { value: '2024-12-19' } })
    fireEvent.change(timeInput, { target: { value: '17:00' } })
    fireEvent.change(guestsInput, { target: { value: 3 } })
    fireEvent.change(occasionInput, { target: { value: 'birthday' } })

    await userEvent.click(indoorRadio)
    await userEvent.click(submitButton)

    expect(mockDispatch).toHaveBeenCalled()

  })
})
