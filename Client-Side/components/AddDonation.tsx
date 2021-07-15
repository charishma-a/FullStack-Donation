import * as React from 'react'
import { Donation } from '../types'

type Props = {
  saveDonation: (e: React.FormEvent, formData: Donation) => void
}

const AddDonation: React.FC<Props> = ({ saveDonation }) => {
  const [formData, setFormData] = React.useState<Donation>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveDonation(e, formData)}>
      <div>
       
        <div className='Form--field'>
          <label htmlFor='name'>User ID</label>
          <input onChange={handleForm} type='text' id='userid' />
        </div>
        <div className='Form--field'>
          <label htmlFor='body'>Donation Amount</label>
          <input onChange={handleForm} type='number' id='amount' />
        </div>
        <div className='Form--field'>
          <label htmlFor='body'>Tip Amount</label>
          <input onChange={handleForm} type='number' id='tip' />
        </div>
      </div>
      <button
        className='Form__button'
        disabled={formData === undefined ? true : false}
      >
        Add Donation
      </button>
    </form>
  )
}

export default AddDonation
