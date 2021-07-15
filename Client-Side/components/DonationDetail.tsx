import * as React from 'react'
import { Donation } from '../types'
import { User } from '../types'

type Props = {
  donation: Donation
  deleteDonation: (id: number) => void
  userDet: User[]
}

const DonationDetail: React.FC<Props> = ({ donation, deleteDonation,userDet }) => {

  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = React.useState('')

  React.useEffect(() => {
 
    let userEmailId = '';
    let name = '';
 
    let userEmailIter = userDet.forEach(user => {

      if (donation.userid === user.id ) {
        userEmailId = user.email;
        name = user.firstName + ' ' + user.lastName;
      }
    });

   setEmail(userEmailId);
   setUserName(name)

  },[email,userName]);

  return (
    <div className='Card'>
      <div className='Card--body'>
        <h1 className='Card--body-title'>User Name      :{userName}</h1>
        <h1 className='Card--body-title'>Donation Amount:{donation.amount}</h1>
        <h1 className='Card--body-text' >Tip            :{donation.tip}</h1>
        <p className='Card--body-text'  >UserId         :{donation.userid}</p>
        <p className='Card--body-text'  >User Email     :{email}</p>
      </div>
      <button className='Card__button' onClick={() => deleteDonation(donation.id)}>
        Delete
      </button>
    </div>
  )
}

export default DonationDetail
