import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Form, Button, Col, Row } from 'react-bootstrap';

import { toastMsg } from '../../utils';

function CreateTask({ addTask }) {
   const [name, setName] = useState('');

   const submitHandler = e => {
      e.preventDefault();

      if (name === '') {
         toastMsg('error', 'Please, enter a name');
         return;
      } else if (name.length < 3) {
         toastMsg('error', 'Name must be at least 3 characters');
         return;
      } else if (name.length > 80) {
         toastMsg('error', 'Name must not exceed 80 characters');
         return;
      } else {
         addTask({ id:uuid(), name, status:'todo' });
         setName('');         
      }
   };

   return (
      <div className='container m-5'>
         <Row>
            <Col md={{ span:6, offset:3 }}>
               <Form onSubmit={submitHandler}  className='container m-5'>
                  <Form.Group className="mb-3" controlId="name">
                     <Form.Control type="text" value={name} placeholder="Enter task name" onChange={e => setName(e.target.value)} />
                  </Form.Group>
                  <Button type='submit' className='btn btn-info text-white'>Create</Button>
               </Form>
            </Col>
         </Row>
      </div>
   );
}

export default CreateTask;