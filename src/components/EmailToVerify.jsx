import { CContainer,CFormInput,CForm,CButton,CRow} from '@coreui/react'
import { EnvelopeExclamation } from 'react-bootstrap-icons'


export const EmailToVerify = ({setFormState,formState}) => {
  
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
  
  <EnvelopeExclamation size={80}/>
  
  <h1 style={{
  fontSize:'1rem',
  fontWeight: '600'
  }}>
  Your email has not been verified
  </h1>
  
  <p style={{
  fontSize:'.8rem',
  fontWeight: '400',
  color:'grey',
  textAlign:'center'
  }}>
  {`Sent verification mail to ${formState.mail}`}
  </p>
  
  <CRow style={{marginTop:'1rem'}}>
  <CButton 
  style={{
  width: '100%',
  margin:'8px 0'
  }}
  onClick={() => setFormState(
  p => ({
  ...p,
  isSubmittedSuccessfully: false,
  isVerified:true
  }))}
  color="primary">
  Send Verification Mail
  </CButton>

  <CButton
  style={{width: '100%'}}
  color="secondary" 
  variant="outline"
  >
  Skip For Now
  </CButton>
  </CRow>

  </CContainer>
  </CContainer>
  )
}