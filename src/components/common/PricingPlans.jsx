import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import { pricingCards } from './data';
import { currency } from '@/assets/data/constants';
import IconifyIcon from '../wrappers/IconifyIcon';
const PricingPlanCard = ({
  duration,
  features,
  name,
  price,
  isPopular
}) => {
  return <Card className="border hoverable h-100" data-aos="fade-up" data-aos-duration={duration}>
      <CardBody className="text-center">
        <h4 className="my-0 text-primary">{name}</h4>
        <h1 className="mb-0">
          <span className="fw-normal text-muted fs-13 align-top">{currency}</span>
          <span className="fw-bolder display-4">{price}</span>
          <span className="fw-normal text-muted fs-13 align-middle"> / month</span>
        </h1>
        <ul className="list-unstyled border-top py-4 mt-4 text-start">
          {features.map((feature, idx) => <li className="py-2 d-flex flex-row align-items-center" key={idx}>
              <IconifyIcon className="align-middle icon-dual-success me-2 icon-xs" icon="fe:check" />
              <span>{feature}</span>
            </li>)}
        </ul>
        <Button variant={isPopular ? 'primary' : 'soft-primary'} className="d-block w-100">
          Sign Up Now
        </Button>
      </CardBody>
    </Card>;
};
const PricingPlans = () => {
  return <Row className="align-items-center mt-0 mt-sm-5">
      {pricingCards.map((plans, idx) => {
      return <Col lg={4} key={idx}>
            <PricingPlanCard {...plans} />
          </Col>;
    })}
    </Row>;
};
export default PricingPlans;