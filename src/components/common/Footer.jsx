import { currentYear, developedBy, developedByLink } from '@/assets/data/constants';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIcon from '../wrappers/IconifyIcon';
import { footerLinks } from './data';
import logo from '@/assets/images/logo.png';
const Footer = () => {
  return <section className="pt-5 pb-4 bg-gradient3 position-relative">
      <Container>
        <Row>
          <Col lg={4}>
            <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" href="">
              <Image src={logo} height={30} alt="logo" />
            </Link>
            <p className="text-muted w-75">Make your web application stand out with high-quality landing page</p>
          </Col>
          <Col lg={8}>
            <Row>
              {Object.keys(footerLinks).map((title, idx) => {
              return <Col md={'auto'} sm={6} key={idx}>
                    <div className="ps-xl-5">
                      <h6 className="mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase">{title}</h6>
                      <ul className="list-unstyled">
                        {footerLinks[title].links.map((link, idx) => <li className="my-3" key={idx}>
                            <Link href="" className="text-muted">
                              {link}
                            </Link>
                          </li>)}
                      </ul>
                    </div>
                  </Col>;
            })}
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="text-md-start text-center">
          <Col md={6}>
            <p className="pb-0 mb-0 text-muted">
              {currentYear} © Omaics. All rights reserved. Crafted by <a href={developedByLink}>{developedBy}</a>
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="align-items-end mt-md-0 mt-4">
              <ul className="list-unstyled mb-0">
                <li className="d-inline-block me-4">
                  <Link href="">
                    <IconifyIcon icon="lucide:facebook" style={{
                    height: 20,
                    width: 20
                  }} className="icon icon-xs" />
                  </Link>
                </li>
                <li className="d-inline-block me-4">
                  <Link href="">
                    <IconifyIcon icon="lucide:twitter" style={{
                    height: 20,
                    width: 20
                  }} className="icon icon-xs" />
                  </Link>
                </li>
                <li className="d-inline-block">
                  <Link href="">
                    <IconifyIcon icon="lucide:linkedin" style={{
                    height: 20,
                    width: 20
                  }} className="icon icon-xs" />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Footer;