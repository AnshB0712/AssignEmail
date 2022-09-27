import { useState } from 'react'
import { CContainer,CFormInput,CForm,CButton,CRow} from '@coreui/react'


export const EmailToContinue = ({setFormState,formState}) => {
  
  return (
  <CContainer
  style={{
  border: '1px solid #dbdbd8',
  borderRadius: '5px',
  padding: '1rem'
  }}
  >
  <CContainer 
  md 
  style={{
  display: 'grid',
  placeItems: 'center',
  gap:"1rem"
  }}>
  
  <CForm>
  
  <CFormInput
    type="email"
    label="Email address"
    placeholder="name@example.com"
    text="Verification mail will be send to this Email."
    onChange={e => setFormState(p => ({...p,mail:e.target.value}))}
  />
  
  <CRow style={{marginTop:'1rem'}}>
  <CButton 
  style={{
  width: '100%',
  margin:'8px 0'
  }}
  disabled={!formState.mail}
  onClick={e => setFormState(p => ({...p,isSubmittedSuccessfully:true}))}
  color="primary">
  Continue
  </CButton>

  <CButton
  style={{width: '100%'}}
  color="secondary" 
  variant="outline"
  >
  Skip For Now
  </CButton>
  </CRow>
  
  </CForm>

  </CContainer>
  </CContainer>
  )
}