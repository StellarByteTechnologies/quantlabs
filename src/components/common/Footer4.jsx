import { currentYear, developedBy, developedByLink } from '@/assets/data/constants';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
const Footer4 = () => {
  const footerLinks = ['About', 'Privacy', 'Terms', 'Developers', 'Support'];
  return <section className="section py-4 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col>
            <ul className="list-inline list-with-separator mb-0">
              {footerLinks.map((link, idx) => {
              return <li className="list-inline-item me-0" key={idx}>
                    <Link href="">{link}</Link>
                  </li>;
            })}
              <li className="list-inline-item me-0">
                <Link href="">
                  Careers <span className="align-middle badge badge-soft-info rounded-pill fw-normal fs-11 px-2 py-1">We&apos;re hiring</span>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md="auto" className="text-md-end mt-2 mt-md-0">
            <p className="fs-14 mb-0">
              {currentYear} © Omaics. All rights reserved. Crafted by <a href={developedByLink}>{developedBy}</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Footer4;