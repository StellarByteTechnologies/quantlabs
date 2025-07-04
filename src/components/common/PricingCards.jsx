import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';
import PricingPlans from './PricingPlans';
const PricingCards = ({
  className
}) => {
  return <section className={clsx('section py-6 py-sm-8  position-relative', className)}>
      <div className="divider top d-none d-sm-block" />
      <Container>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">Plans</span>
            <h1 className="display-5 fw-medium">Pricing Plans</h1>
            <p className="text-muted mx-auto">
              Pricing that <span className="text-primary fw-bold">works</span> for everyone
            </p>
          </Col>
        </Row>
        <PricingPlans />
      </Container>
      <div className="divider bottom d-none d-sm-block" />
    </section>;
};
export default PricingCards;