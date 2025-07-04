'use client';

import { Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
const AddComment = () => {
  const schemaResolver = yupResolver(yup.object().shape({
    name: yup.string().required('Please enter Name'),
    email: yup.string().required('Please enter Email').email('Please enter valid Email'),
    subject: yup.string().required('Please enter Subject'),
    message: yup.string().required('Please enter Message')
  }));
  const {
    control,
    handleSubmit
  } = useForm({
    defaultValues: {},
    resolver: schemaResolver
  });
  return <Card className="border">
      <Card.Body>
        <h4 className="mb-3 mt-0">Post a comment</h4>
        <form onSubmit={handleSubmit(() => {})} className="account-form">
          <Row>
            <Col md={6}>
              <TextFormInput type="text" placeholder="Name" name="name" containerClassName="mb-3" control={control} />
            </Col>
            <Col md={6}>
              <TextFormInput type="email" placeholder="Email" name="email" containerClassName="mb-3" control={control} />
            </Col>
            <Col md={12}>
              <TextFormInput type="text" placeholder="Subject" name="subject" containerClassName="mb-3" control={control} />
            </Col>
            <Col md={12}>
              <TextAreaFormInput type="textarea" rows={3} placeholder="Message" name="message" containerClassName="mb-3" control={control} />
              <Button type="submit" variant="secondary">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </Card.Body>
    </Card>;
};
export default AddComment;