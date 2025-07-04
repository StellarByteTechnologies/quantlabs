'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Row } from 'react-bootstrap';
import TextFormInput from '@/components/form/TextFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const ContactForm = () => {
  const contactUsSchema = yup.object().shape({
    fname: yup.string().required('Please enter first name'),
    lname: yup.string().required('Please enter last name'),
    email: yup.string().email('Please enter valid Email').required('Please enter Email'),
    message: yup.string().required('Please enter Message')
  });
  const {
    control,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(contactUsSchema)
  });
  return <form onSubmit={handleSubmit(() => {
    reset();
  })}>
      <Row>
        <Col md={6}>
          <TextFormInput type="text" name="fname" label="First Name" placeholder="Your First Name" containerClassName={'mb-3'} control={control} />
        </Col>
        <Col md={6}>
          <TextFormInput type="text" name="lname" label="Last Name" placeholder="Your Last Name" containerClassName={'mb-3'} control={control} />
        </Col>
        <Col lg={12}>
          <TextFormInput type="email" name="email" label="Email Name" placeholder="Your Email" containerClassName={'mb-3'} control={control} />
        </Col>
        <Col lg={12}>
          <TextAreaFormInput type="textarea" name="message" label="Message" placeholder="Type Your message..." rows={5} containerClassName={'mb-3'} control={control} />
        </Col>
        <Col lg="auto" className="mb-0">
          <Button type="submit">
            Send
            <span className="icon icon-xs text-white ms-1">
              <IconifyIcon icon="lucide:send-horizontal" />
            </span>
          </Button>
        </Col>
      </Row>
    </form>;
};
export default ContactForm;