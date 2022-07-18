import React, { useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../../components/index'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CFormFeedback,
  CInputGroupText,
  CRow,
} from '@coreui/react'
// import { DocsExample } from 'src/components'
import { RegisterDetails } from '../../../vikram'

const CustomStyles = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const BrowserDefaults = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm className="row g-3 needs-validation" validated={validated} onSubmit={handleSubmit}>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault01">Email</CFormLabel>
        <CFormInput type="text" id="validationDefault01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault02">Email</CFormLabel>
        <CFormInput type="text" id="validationDefault02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationDefault03">City</CFormLabel>
        <CFormInput type="text" id="validationDefault03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault04">City</CFormLabel>
        <CFormSelect id="validationDefault04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault05">City</CFormLabel>
        <CFormInput type="text" id="validationDefault05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>

      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const Register = () => {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState('')
  const [classs, setClasss] = useState('')
  const [warranty, setWarranty] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    // calling the function
    RegisterDetails(name, classs, warranty).then((res, err) => {
      if (err) {
        console.log('Error in withdraw')
        console.log(err)
      } else {
        console.log(res)
      }
    })
  }

  // form callbacks
  const onChangeName = (event) => {
    setName(event.target.value.toString())
  }
  const onChangeClass = (event) => {
    setClasss(event.target.value.toString())
  }
  const onChangeWarranty = (event) => {
    setWarranty(event.target.value.toString())
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer>
            <CForm
              className="column g-5 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={4} className="position-relative">
                <CFormLabel htmlFor="validationTooltip01">Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationTooltip01"
                  required
                  value={name}
                  onChange={onChangeName}
                />
                <CFormFeedback tooltip valid>
                  Looks good!
                </CFormFeedback>
              </CCol>

              <CCol md={3} className="position-relative">
                <CFormLabel htmlFor="validationTooltip03">Class</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationTooltip03"
                  required
                  value={classs}
                  onChange={onChangeClass}
                />
                <CFormFeedback tooltip invalid>
                  Please provide a valid city.
                </CFormFeedback>
              </CCol>

              <CCol md={3} className="position-relative">
                <CFormLabel htmlFor="validationTooltip05">Warranty</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationTooltip05"
                  required
                  value={warranty}
                  onChange={onChangeWarranty}
                />
                <CFormFeedback tooltip invalid>
                  Please provide a valid zip.
                </CFormFeedback>
              </CCol>

              <CCol xs={12} className="position-relative">
                <CButton color="primary" type="submit">
                  Register As Bidder
                </CButton>
              </CCol>
            </CForm>
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Register

// import React, { useState } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import { RegisterDetails } from '../../../vikram'
// // import CIcon from '@coreui/icons-react'
// // import { cilLockLocked, cilUser } from '@coreui/icons'
//
// const Tooltips = () => {
//   const [validated, setValidated] = useState(false)
//   const [name, setName] = useState('')
//   const [classs, setClasss] = useState('')
//   const [warranty, setWarranty] = useState('')
//   console.log(name, classs, warranty)
//   const handleSubmit = (event) => {
//     const form = event.currentTarget
//     if (form.checkValidity() === false) {
//       event.preventDefault()
//       event.stopPropagation()
//     }
//     setValidated(true)
//
//     RegisterDetails(name, classs, warranty).then((res, err) => {
//       if (err) {
//         console.log('Error in withdraw')
//         console.log(err)
//       } else {
//         console.log(res)
//       }
//     })
//   }
//
//   // form callbacks
//   const onChangeName = (event) => {
//     setName(event.target.value.toString())
//   }
//   const onChangeClass = (event) => {
//     setClasss(event.target.value.toString())
//   }
//   const onChangeWarranty = (event) => {
//     setWarranty(event.target.value.toString())
//   }
// }
//
// const Register = () => {
//   return (
//     <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Register As New Bidder</h1>
//                   <p className="text-medium-emphasis">Setup Account to Apply For Contracts</p>
//                   <CInputGroup
//                     className="mb-3"
//                     value={Tooltips.name}
//                     onChange={Tooltips.onChangeName}
//                   >
//                     <CInputGroupText>{/*<CIcon icon={cilUser} />*/}$</CInputGroupText>
//                     <CFormInput placeholder="name" autoComplete="username" />
//                   </CInputGroup>
//                   <CInputGroup
//                     className="mb-3"
//                     value={Tooltips.classs}
//                     onChange={Tooltips.onChangeClass}
//                   >
//                     <CInputGroupText>#</CInputGroupText>
//                     <CFormInput placeholder="Class" autoComplete="class" />
//                   </CInputGroup>
//                   <CInputGroup
//                     className="mb-4"
//                     value={Tooltips.warranty}
//                     onChange={Tooltips.onChangeWarranty}
//                   >
//                     <CInputGroupText>t{/*<CIcon icon={cilLockLocked} />*/}</CInputGroupText>
//                     <CFormInput type="number" placeholder="warrantyPeriod" autoComplete="period" />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success" onClick={Tooltips()}>
//                       Create Account
//                     </CButton>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }
//
// export default Register
