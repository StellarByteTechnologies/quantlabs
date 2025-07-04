import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { currentYear, developedBy, developedByLink } from '@/assets/data/constants';
import { footerLinks } from './data';
import logo from '@/assets/images/logo.png';
const Footer2 = ({
  socialIcon
}) => {
  return <section className="mt-5 py-3 marketing-6 bg-gradient3 position-relative">
      <Container>
        <Row className="align-items-center mt-3 mb-4 pb-1">
          <Col lg={6}>
            <h2 className="text-dark fw-medium mt-0 mb-1">Ready to get started?</h2>
            <p className="text-muted pb-0 mb-0">Create your free 14-day account now</p>
          </Col>
          <Col lg={6}>
            <div className="text-lg-end">
              <Button variant="primary" className="rounded-pill">
                Try it free for 14 days
              </Button>
              <Button variant="link" className="rounded-pill">
                Chat with us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-4" />
      <Container>
        <Row>
          <Col>
            <Link className="navbar-brand me-lg-4 mb-4 me-auto" href="/">
              <Image src={logo} height={30} className="d-inline-block align-top" alt="logo" />
            </Link>
            <p className="text-muted w-75">Make your marketing application stand out with high-quality landing page</p>
          </Col>
          {Object.keys(footerLinks).map((title, idx) => {
          return <Col sm={'auto'} key={idx}>
                <div className="ps-md-5">
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
        <hr />
        {socialIcon ? <Row className="text-md-start text-center">
            <Col md={6}>
              <p className="pb-0 mb-0 text-muted">
                {currentYear} © Omaics. All rights reserved. Crafted by <a href={developedByLink}>{developedBy}</a>
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="align-items-end mt-md-0 mt-4">
                <ul className="list-unstyled mb-0">
                  <li className="d-inline-block me-4">
                    <span role="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook icon icon-xs">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </span>
                  </li>
                  <li className="d-inline-block me-4">
                    <span role="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter icon icon-xs">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </span>
                  </li>
                  <li className="d-inline-block">
                    <span role="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin icon icon-xs">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x={2} y={9} width={4} height={12} />
                        <circle cx={4} cy={4} r={2} />
                      </svg>
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row> : <Row>
            <Col className="text-center">
              <p className="pb-0 mb-0 text-muted">
                {currentYear} © Omaics. All rights reserved. Crafted by <Link href={developedByLink}>{developedBy}</Link>
              </p>
            </Col>
          </Row>}
      </Container>
    </section>;
};
export default Footer2;