// import React from 'react'

// const ApplyForContract = (props) => {
//   return <div>ApplyForContract</div>
// }

// export default ApplyForContract

import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
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
import { ApplyForContract } from '../../../vikram'

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

const Tooltips = () => {
  const [validated, setValidated] = useState(false)
  const [contractName, setContractName] = useState('')
  const [contractNumber, setContractNumber] = useState('')
  const [warranty, setWarranty] = useState('')
  const [days, setDays] = useState('')
  const [budget, setBudget] = useState('')
  const [uid, setUid] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    // calling the function
    ApplyForContract(
      uid,
      contractNumber,
      contractName,
      contractNumber,
      budget,
      warranty,
      days,
    ).then((res, err) => {
      if (err) {
        console.log(`Error in ApplyForContract`)
        console.error(err)
      } else {
        console.log('Succesfully applied for the contract')
        console.log(res)
      }
    })
  }

  // form callbacks
  const onChangeContractName = (event) => {
    setContractName(event.target.value.toString())
  }
  const onChangeContractNumber = (event) => {
    setContractNumber(event.target.value.toString())
  }
  const onChangeWarranty = (event) => {
    setWarranty(event.target.value.toString())
  }
  const onChangeDays = (event) => {
    setDays(event.target.value.toString())
  }
  const onChangeBudget = (event) => {
    setBudget(event.target.value.toString())
  }
  const onChangeUid = (event) => {
    setUid(event.target.value.toString())
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <h1>
        <strong>Government ContractsPage</strong>
      </h1>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Contract Name</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          required
          value={contractName}
          onChange={onChangeContractName}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>

      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">ContractNumber</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip03"
          required
          value={contractNumber}
          onChange={onChangeContractNumber}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">UID</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip04"
          required
          value={uid}
          onChange={onChangeUid}
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

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">Days</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={days}
          onChange={onChangeDays}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">Budget</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip05"
          required
          value={budget}
          onChange={onChangeBudget}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Apply for contract
        </CButton>
      </CCol>
    </CForm>
  )
}

export default Tooltips
