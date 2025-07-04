import { currency } from '@/assets/data/constants';
import clsx from 'clsx';
import Link from 'next/link';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '../wrappers/IconifyIcon';
const PricingCards3 = ({
  plans
}) => {
  return <Row className="mt-5">
      {plans.map((plan, idx) => {
      return <Col lg={4} key={idx}>
            <Card className="border hoverable">
              {plan.isRecommended && <div className="card-img-top-overlay d-none d-lg-block">
                  <span className="card-badge top-right bg-warning text-white shadow-sm">Recommended</span>
                </div>}
              <CardBody>
                <h4 className="my-0 text-primary">{plan.name}</h4>
                <h1>
                  <span className="fw-normal text-muted fs-13 align-top">{currency}</span>
                  <span className="fw-bolder display-5">{plan.price}</span>
                  <span className="fw-normal text-muted fs-13 align-middle">{plan.duration}</span>
                </h1>
                <Link href="" className={clsx('btn', plan.isRecommended ? 'btn-primary' : 'btn-soft-success', 'd-block')}>
                  Purchase Now
                </Link>
                <ul className="list-unstyled border-top pt-4 mt-4 text-start">
                  {plan.features.map((feature, idx) => {
                return <li className="py-2 d-flex align-items-center" key={idx}>
                        <IconifyIcon icon="lucide:check" className="icon-xs text-success align-middle me-2" />
                        {feature}
                      </li>;
              })}
                </ul>
              </CardBody>
            </Card>
          </Col>;
    })}
    </Row>;
};
export default PricingCards3;