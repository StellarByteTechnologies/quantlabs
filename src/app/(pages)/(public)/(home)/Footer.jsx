import { currentYear, developedBy, developedByLink } from '@/assets/data/constants';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
const Footer = () => {
  return <section className="section pt-lg-6 pt-3 pb-3 position-relative" data-aos="fade-up">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <ul className="list-inline list-with-separator">
              <li className="list-inline-item me-0">
                <Link href="">About</Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="">Support</Link>
              </li>
              <li className="list-inline-item me-0">
                Version
                <span role="button">
                  <span className="align-middle badge badge-soft-info rounded-pill ms-1 px-2 py-1">v1.0</span>
                </span>
              </li>
            </ul>
            <p className="mt-2 fs-14">
              {currentYear} © Omaics. All rights reserved. Crafted by <a href={developedByLink}>{developedBy}</a>
            </p>
            <Image src={logo} height={30} className="mt-2 mb-4" alt="" />
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Footer;