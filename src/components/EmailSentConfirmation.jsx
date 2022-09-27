import { CContainer,CFormInput,CForm,CButton,CRow} from '@coreui/react'
import { EnvelopeCheck } from 'react-bootstrap-icons'

export const EmailSentConfirmation = () => {
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
  
  <EnvelopeCheck size={80}/>
  
    <h1 style={{
  fontSize:'1rem',
  fontWeight: '600'
  }}>
  An email has been sent to you.
  </h1>
  
  <p style={{
  fontSize:'.8rem',
  fontWeight: '400',
  color:'grey',
  width:'100%',
  textAlign:'center'
  }}>
  Check the email that has been associated with your account.
  </p>
  
  <CForm>
  
  <CFormInput
  style={{marginBottom: '1rem'}}
  type="number"
  label="Verification Code"
  />
  
  <CRow>
  <CButton 
  style={{width: '100%'}}
  color="primary">
  Verify
  </CButton>

  <CButton 
  style={{
  width: '100%',
  margin:'8px 0'
  }}
  color="secondary" 
  variant="outline"
  >
  Send another verification code
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