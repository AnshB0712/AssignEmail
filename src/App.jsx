import { useState } from 'react'
import {EmailToVerify} from './components/EmailToVerify'
import {EmailSentConfirmation} from './components/EmailSentConfirmation'
import {EmailToContinue} from './components/EmailToContinue'

function App() {
  
  const [formState,setFormState] = useState({
    mail: '',
    isSubmittedSuccessfully: false,
    isVerified: false
  })
  
  return (
    <div className="app">
    {
    !formState.isSubmittedSuccessfully
    &&
    !formState.isVerified
    &&
    <EmailToContinue 
    setFormState={setFormState}
    formState={formState}
    />
    }
    { 
    formState.isSubmittedSuccessfully
    && 
    <EmailToVerify 
    setFormState={setFormState}
    formState={formState}
    />}
    {
    formState.isVerified 
    &&
    <EmailSentConfirmation />
    }
    </div>
  )
}

export default App
