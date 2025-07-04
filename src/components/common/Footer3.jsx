import { Col, Container, Row } from 'react-bootstrap';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { currentYear, developedBy, developedByLink } from '@/assets/data/constants';
import IconifyIcon from '../wrappers/IconifyIcon';
import { footerLinks } from './data';
import clsx from 'clsx';
const Footer3 = () => {
  return <section className="pt-5 pb-4 bg-gradient3 position-relative">
      <Container>
        <Row>
          <Col>
            <Link className="navbar-brand me-lg-4 mb-2 me-auto d-flex align-items-center pt-0" href="/">
              <Image src={logo} height={30} alt="logo" />
            </Link>
            <p className="text-muted mb-4 w-50">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.
            </p>
          </Col>
          {Object.keys(footerLinks).slice(2, 4).map((title, idx) => {
          return <Col sm={'auto'} key={idx}>
                  <div className={clsx(idx === 0 ? 'px-md-5' : 'ps-md-5')}>
                    <h5 className="mb-4 mt-5 mt-lg-0">{title}</h5>
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
        <Row className="text-md-start text-center">
          <Col md={6}>
            <p className="pb-0 mb-0 text-muted">
              {currentYear} © Omaics. All rights reserved. Crafted by{' '}
              <Link target="_blank" href={developedByLink}>
                {developedBy}
              </Link>
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="align-items-end mt-md-0 mt-4">
              <ul className="list-unstyled mb-0">
                <li className="d-inline-block me-4">
                  <span role="button">
                    <IconifyIcon icon="lucide:facebook" height="20" width="20" />
                  </span>
                </li>
                <li className="d-inline-block me-4">
                  <span role="button">
                    <IconifyIcon icon="lucide:twitter" height="20" width="20" />
                  </span>
                </li>
                <li className="d-inline-block">
                  <span role="button">
                    <IconifyIcon icon="lucide:linkedin" height="20" width="20" />
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Footer3;