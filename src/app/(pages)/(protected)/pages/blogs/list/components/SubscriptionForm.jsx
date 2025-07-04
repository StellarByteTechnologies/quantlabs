'use client';

import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const SubscriptionForm = () => {
  const subscriptionFormSchema = yup.object({
    email: yup.string().email('Please enter valid email').required('Please enter email')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(subscriptionFormSchema)
  });
  return <div className="border rounded px-4 py-3">
      <div className="mb-4">
        <h4 className="mt-0">Get the latest on product development from Omaics</h4>
        <p className="text-muted">We send a weekly newsletter containing latest updates in product development</p>
      </div>
      <form onSubmit={handleSubmit(() => {})}>
        <label className="visually-hidden form-label" htmlFor="email">
          Subscribe
        </label>
        <TextFormInput name="email" control={control} placeholder="Enter Your Email" containerClassName="mb-2" />
        <Button variant="primary" type="submit" className="d-block w-100 mb-1">
          Subscribe
        </Button>
        <p>
          <small>*No spam ever.</small>
        </p>
      </form>
    </div>;
};
export default SubscriptionForm;