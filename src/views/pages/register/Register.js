import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { RegisterDetails } from '../../../vikram'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'

const Tooltips = () => {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState('')
  const [classs, setClasss] = useState('')
  const [warranty, setWarranty] = useState('')
  console.log(name, classs, warranty)
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget
  //   if (form.checkValidity() === false) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }
  //   setValidated(true)
  //
  //   RegisterDetails(name, classs, warranty).then((res, err) => {
  //     if (err) {
  //       console.log('Error in withdraw')
  //       console.log(err)
  //     } else {
  //       console.log(res)
  //     }
  //   })
  // }
  //
  // // form callbacks
  // const onChangeName = (event) => {
  //   setName(event.target.value.toString())
  // }
  // const onChangeClass = (event) => {
  //   setClasss(event.target.value.toString())
  // }
  // const onChangeWarranty = (event) => {
  //   setWarranty(event.target.value.toString())
  // }
}

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register As New Bidder</h1>
                  <p className="text-medium-emphasis">Setup Account to Apply For Contracts</p>
                  <CInputGroup
                    className="mb-3"
                    value={Tooltips.name}
                    onChange={Tooltips.onChangeName}
                  >
                    <CInputGroupText>{/*<CIcon icon={cilUser} />*/}$</CInputGroupText>
                    <CFormInput placeholder="name" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup
                    className="mb-3"
                    value={Tooltips.classs}
                    onChange={Tooltips.onChangeClass}
                  >
                    <CInputGroupText>#</CInputGroupText>
                    <CFormInput placeholder="Class" autoComplete="class" />
                  </CInputGroup>
                  <CInputGroup
                    className="mb-4"
                    value={Tooltips.warranty}
                    onChange={Tooltips.onChangeWarranty}
                  >
                    <CInputGroupText>t{/*<CIcon icon={cilLockLocked} />*/}</CInputGroupText>
                    <CFormInput type="number" placeholder="warrantyPeriod" autoComplete="period" />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={Tooltips}>
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
