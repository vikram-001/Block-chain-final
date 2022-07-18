import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  // CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CTableRow,
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  // CFormTextarea,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import {
  AllBidders,
  RegisteredBiddersUid,
  scorebyUID,
  numberofprojectsapplied,
  transferOwnership2,
  reduceallowance,
  allowance,
  withdraw,
} from '../../../vikram'

const TooltipsWithdraw = () => {
  const [validated, setValidated] = useState(false)
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    withdraw(address, amount).then((res, err) => {
      if (err) {
        console.log('Error in withdraw')
        console.log(err)
      } else {
        console.log('Succesfully withdrawed amount to your wallet')
        console.log(res)
      }
    })
  }

  // form callbacks
  const onChangeAddress = (event) => {
    setAddress(event.target.value.toString())
  }
  const onChangeAmount = (event) => {
    setAmount(event.target.value.toString())
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">From</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          required
          value={address}
          onChange={onChangeAddress}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Amount2Withdraw</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip02"
          required
          value={amount}
          onChange={onChangeAmount}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Withdraw
        </CButton>
      </CCol>
    </CForm>
  )
}

const TooltipsAllowance = () => {
  const [validated, setValidated] = useState(false)
  const [address, setAddress] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    allowance(address).then((res, err) => {
      console.log('allowance is working')
      if (err) {
        console.log('Error in calling allowance')
        // console.log(err)
        alert(err)
      } else {
        // console.log(res)
        alert(res)
      }
    })
  }

  // form callbacks
  const onChangeAddress = (event) => {
    setAddress(event.target.value.toString())
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Allowance</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          required
          value={address}
          onChange={onChangeAddress}
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>

      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Check
        </CButton>
      </CCol>
    </CForm>
  )
}

const BidderInfo = (props) => {
  // use state for storing data fetched from functions
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [scoreUID, setscoreUID] = useState('')
  const [projectsApplied, setprojectsApplied] = useState('')
  const [classDetails, setclassDetails] = useState('')

  let accounts

  // fetching accounts from metamask

  window.ethereum
    .request({
      method: 'eth_requestAccounts',
    })
    .then((acc, err) => {
      if (err) {
        console.log(`Error fetching accounts`)
        console.error(err)
      } else {
        // console.log(acc)
        RegisteredBiddersUid(acc[0]).then((res) => {
          AllBidders(res).then((resArr) => {
            console.log(resArr)
            // updating name and address
            setName(resArr[0])
            setAddress(resArr[4])
            setclassDetails(resArr[1])
          })
          scorebyUID(res).then((result) => {
            setscoreUID(result)
            console.log('Score is ', result)
          })
          numberofprojectsapplied(acc[0]).then((res) => {
            setprojectsApplied(res)
            console.log('Number of projects applied is', res)
          })
        })
      }
    })

  // let result = RegisteredBiddersUid(accounts[0])
  // setRes(result)
  // console.log(result)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Your Details</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              You are currently in <code>Class {classDetails.toUpperCase()}</code>
              {/*<code>&lt;CTableBody&gt;</code>.*/}
            </p>
            <DocsExample href="components/table#hoverable-rows">
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    {/*<CTableHeaderCell scope="col">#</CTableHeaderCell>*/}
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Score</CTableHeaderCell>
                    <CTableHeaderCell scope="col">No. of Projects</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    {/*<CTableHeaderCell scope="row">1</CTableHeaderCell>*/}
                    <CTableDataCell>{name}</CTableDataCell>
                    <CTableDataCell>{address}</CTableDataCell>
                    <CTableDataCell>{scoreUID}</CTableDataCell>
                    <CTableDataCell>{projectsApplied}</CTableDataCell>
                  </CTableRow>
                  {/*<CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
*/}{' '}
                </CTableBody>
              </CTable>
            </DocsExample>
            {/*<DocsExample href="components/table#hoverable-rows">
              <CTable color="dark" hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <DocsExample href="components/table#hoverable-rows">
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>bidder</strong> <small>withdraw</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">withdraw amount</p>
            {TooltipsWithdraw()}
            {/*<DocsExample href="forms/validation#tooltips"></DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Bidder</strong> <small>Allowance</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Allowance for the bidder</p>
            {TooltipsAllowance()}
            {/*<DocsExample href="forms/validation#tooltips"></DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default BidderInfo
