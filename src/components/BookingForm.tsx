
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { date, InferType, number, object, string } from "yup"
import { useEffect } from 'react'
import { submitAPI } from '../service/serviceAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const reservationSchema = object().shape({
  date: date().required('Date is required').min(new Date(), 'Date must be in the future').typeError('Date is required'),
  time: string().required('Time is required'),
  guests: number().required('Number of guests is required').min(1, 'At least 1 guest is required').max(10, 'Maximum 10 guests allowed').typeError('Number of guests is required'),
  occasion: string().required('Occasion is required'),
  seating: string().required('Seating preference is required')
})

interface FormData extends InferType<typeof reservationSchema> { }

interface BookingFormProps {
  availableTimes: string[],
  dispatch: React.Dispatch<{ type: 'UPDATE_TIMES'; payload: Date }>
}

export default function BookingForm({ availableTimes, dispatch } : BookingFormProps) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(reservationSchema)
  })

  const navigate = useNavigate()

  const onSubmit = (data: FormData) => {
    if (submitAPI(data)) {
      toast.success('Success')
      navigate('/my-bookings')
    }
  }

  const selectedDate = watch('date')

  useEffect(() => {
    if (selectedDate) {
      dispatch({ type: 'UPDATE_TIMES', payload: new Date(selectedDate) })
    }
  }, [selectedDate, dispatch])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[858px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-[#465B4B] text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">Reserve a Table</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              {...register('date')}
              type="date"
              id="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#F4CE14] focus:border-[#F4CE14]"
            />
            {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <select
              {...register('time')}
              id="time"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#F4CE14] focus:border-[#F4CE14]"
            >
              <option value="">Select time</option>
              {availableTimes.map((hour) => (
                <option key={hour} value={hour}>{hour}</option>
              ))}
            </select>
            {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
            <input
              {...register('guests')}
              type="number"
              id="guests"
              min="1"
              max="10"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#F4CE14] focus:border-[#F4CE14]"
            />
            {errors.guests && <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>}
          </div>

          <div>
            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700">Occasion</label>
            <select
              {...register('occasion')}
              id="occasion"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#F4CE14] focus:border-[#F4CE14]"
            >
              <option value="">Select occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="date">Date Night</option>
              <option value="business">Business Meal</option>
              <option value="other">Other</option>
            </select>
            {errors.occasion && <p className="mt-1 text-sm text-red-600">{errors.occasion.message}</p>}
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700">Seating Preference</span>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input
                  {...register('seating')}
                  type="radio"
                  value="indoor"
                  className="form-radio text-[#F4CE14] focus:ring-[#F4CE14]"
                />
                <span className="ml-2">Indoor</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register('seating')}
                  type="radio"
                  value="outdoor"
                  className="form-radio text-[#F4CE14] focus:ring-[#F4CE14]"
                />
                <span className="ml-2">Outdoor</span>
              </label>
            </div>
            {errors.seating && <p className="mt-1 text-sm text-red-600">{errors.seating.message}</p>}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F4CE14]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#F4CE14] hover:bg-[#E4BE04] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F4CE14]"
            >
              Reserve a table
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

