import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory, categoryAdd } from '../services/allApis';
import CategoriesList from '../components/CategoriesList'



function Categories() {
 
  const [addStatus,setAddStatus]=useState({})
  const [show, setShow] = useState(false);

  const [category, setCategory] = useState({
    name: '', videos: []
  })
  const getCategory = (val) => {
    if (val) {
      setCategory({ ...category, name: val })
    }
  }
  const handleAdd = async () => {
    console.log(category)
    if (category.name) {
      const res = await categoryAdd(category)
      // console.log(res)
      if (res.status >= 200 && res.status < 300) {
        // setAddStatus(res.data)
        toast.success("Category Add Successfully!!!")
        handleClose()
        setAddStatus(res.data)
      }
      else {
        toast.error("Category Add Failed!!!")
      }
    }
    else {
      toast.info("Enter Valid Data")
    }
  }



 




  const handleClose = () => {
    setShow(false)
    setCategory({ name: '', videos: [] })
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid'>
        <Button variant='primary' className='btn' onClick={handleShow}>Add Category</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>category</Form.Label>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => { getCategory(e.target.value) }} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Save</Button>
        </Modal.Footer>
      </Modal>
      <CategoriesList status={addStatus} />
    </>
  )
}

export default Categories