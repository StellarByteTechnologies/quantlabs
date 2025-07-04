'use client';

import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import Link from 'next/link';

// images
import post1 from '@/assets/images/blog/post1.jpg';
import post2 from '@/assets/images/blog/post2.jpg';
import img1 from '@/assets/images/avatars/img-4.jpg';
const prevPopover = <Popover id="prev-popover">
    <Popover.Body>
      <div className="d-flex align-items-center">
        <Image src={post1} width="60" className="me-3 rounded-sm" alt="thumb" />
        <div className="flex-grow-1">
          <h6 className="fs-14 fw-semibold mt-0 mb-1">Introducing new blazzing fast user interface</h6>
          <span className="d-block fs-13 text-muted">by Emily Blunt</span>
        </div>
      </div>
    </Popover.Body>
  </Popover>;
const nextPopover = <Popover id="prev-popover">
    <Popover.Body>
      <div className="d-flex align-items-center">
        <Image src={post2} width="60" className="me-3 rounded-sm" alt="thumb" />
        <div className="flex-grow-1">
          <h6 className="fs-14 fw-semibold mt-0 mb-1">What you should know before...</h6>
          <span className="d-block fs-13 text-muted">by Emily Blunt</span>
        </div>
      </div>
    </Popover.Body>
  </Popover>;
const PostNavigation = () => {
  return <section className="position-relative pb-5">
      <Container>
        <Row className="border-top border-bottom py-4 align-items-center">
          <Col lg={2} xs={6}>
            <OverlayTrigger placement="top" overlay={prevPopover}>
              <Link href="" className="btn btn-white">
                <IconifyIcon icon="lucide:arrow-left" className="icon-xs me-2" />
                <span className="d-none d-sm-inline-flex">Prev Post</span>
              </Link>
            </OverlayTrigger>
          </Col>
          <Col lg={{
          offset: 1,
          span: 6
        }}>
            <div className="d-flex justify-content-lg-center py-lg-0 py-4">
              <div className="d-flex align-items-center">
                <Image className="me-3 avatar avatar-sm rounded-circle align-self-center" src={img1} alt="" />

                <div className="flex-grow-1">
                  <h5 className="m-0">
                    <Link href="">Emily Blunt</Link>
                  </h5>
                  <p className="text-muted mb-0 fs-14">I write about the latest trend in web design and development.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={{
          offset: 1,
          span: 2
        }} className="text-lg-end text-start col-6">
            <OverlayTrigger placement="top" overlay={nextPopover}>
              <Link href="/" className="btn btn-white">
                <span className="d-none d-sm-inline-flex">Next Post</span>
                <IconifyIcon icon="lucide:arrow-right" className="icon-xs ms-2" />
              </Link>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default PostNavigation;