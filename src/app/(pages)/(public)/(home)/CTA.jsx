import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
const CTA = () => {
  return <section className="section py-4 pt-sm-6 pb-sm-0 position-relative" id="section-download" data-aos="fade-up">
      <Container className="text-center">
        <Row className="align-items-center">
          <Col>
            <h1 className="display-4 fw-medium">Start creating delightful user experience</h1>
            <p className="text-muted mx-auto">
              Start working with&nbsp;
              <span className="text-dark fw-bold">Omaics</span> to create awesome landing pages &amp; websites
            </p>
            <div className="text-center mt-5">
              <Link href="" className="btn btn-primary icons-center gap-1">
                <IconifyIcon style={{
                height: 16,
                width: 16
              }} className="icon icon-xxs ms-1" icon="lucide:shopping-bag" /> Purchase Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default CTA;