import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import AddDonation from '../components/AddDonation'
import DonationDetail from '../components/DonationDetail'
import { Donation } from '../types'
import { User } from '../types'

const DONATION_LIST_URL: string = 'http://localhost:5000/donationlist'
const DONATION_DELETE_URL: string = 'http://localhost:5000/deletedonation/'
const DONATION_INSERT_URL: string = 'http://localhost:5000/newdonation/'
const USER_LIST_URL: string = 'http://localhost:5000/userlist'
const SINGLE_USER_URL: string = 'http://localhost:5000/getuser/'

//Data Fetching

export default function IndexPage({
  donations,
  users
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [donationList, setDonationList] = React.useState(donations)
  const [UserList, setUserList] = React.useState(users)
  const [formError, setFormError] = React.useState('')

  const addDonation = async (e: React.FormEvent, formData: Donation) => {
    e.preventDefault()

    setFormError('')

    const userExist = await  fetch(`${SINGLE_USER_URL}${formData.userid}`);

    const userData = await userExist.json();

    if (userData.id === formData.userid) {
  
    const donation: Donation = {
      id: new Date().getTime(),
      userid: formData.userid,
      amount: formData.amount,
      tip: formData.tip,
    }
  // POST request using fetch with async/await
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donation)
     };
     const response = await fetch(DONATION_INSERT_URL, requestOptions);
     const res = await fetch(DONATION_LIST_URL);
     const donationList: Donation[] = await res.json();

    setDonationList([...donationList])
    } else {
      setFormError('Invalid User ID. Please check');
    }
  }

  const deleteDonation = async (id: number) => {
    setFormError('')
    const delReq = await  fetch(`${DONATION_DELETE_URL}${id}`, { method: 'DELETE' });
    console.log('delReq.status:' + delReq.status );
    if (delReq.status === 201) {
    const res = await fetch(DONATION_LIST_URL);
    const donations: Donation[] = await res.json()
    setDonationList(donations)
    } else {
      setFormError('Internal Server Error. Please check with Admin');
    }

 
  }

  if (!donationList) return <h1>Loading...</h1>

  return (
    <main className='container'>
      <h1>Donations</h1>
      <AddDonation saveDonation={addDonation}/>
      <div className="errorText">{formError}</div>
      {donationList.map((donation: Donation) => {
        return <DonationDetail key={donation.id} deleteDonation={deleteDonation} donation={donation} userDet={UserList} />
})}
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(DONATION_LIST_URL)
  const donations: Donation[] = await res.json()

  const userReq = await fetch(USER_LIST_URL);
  const users: User[] = await userReq.json();

  return {
    props: {
      donations,
      users
    },
  }
}
