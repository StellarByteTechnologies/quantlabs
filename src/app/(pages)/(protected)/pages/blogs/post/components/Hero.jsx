import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import avatar4 from '@/assets/images/avatars/img-4.jpg';
const Hero = () => {
  return <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-sm-4">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="">Blog</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Announcing-the-free-upgrade
                </li>
              </ol>
            </nav>
            <div className="mt-4">
              <Link href="">
                <span className="badge badge-soft-orange mb-1">Announcement</span>
              </Link>
            </div>
            <h1 className="hero-title mt-0">Announcing the free upgrade for the subscribed plans</h1>
          </Col>
        </Row>
        <Row className="mt-4 align-items-center">
          <Col xs="auto">
            <div className="d-flex align-items-center">
              <Image className="me-2 avatar avatar-sm rounded-circle avatar-border" src={avatar4} alt="avatar" />
              <div>
                <h5 className="m-0">
                  <Link href="">Emily Blunt</Link>
                </h5>
                <p className="text-muted mb-0 fs-13">11 Mar, 2020 · 3 min read</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">Share:</li>
                <li className="list-inline-item me-2 align-middle">
                  <span role="button">
                    <IconifyIcon className="icon-xs icon-dual-primary" height="20" width="20" icon="lucide:facebook" />
                  </span>
                </li>
                <li className="list-inline-item me-2 align-middle">
                  <span role="button">
                    <IconifyIcon className="icon-xs icon-dual-info" height="20" width="20" icon="lucide:twitter" />
                  </span>
                </li>
                <li className="list-inline-item align-middle">
                  <span role="button">
                    <IconifyIcon className="icon-xs icon-dual-danger" height="20" width="20" icon="lucide:instagram" />
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;