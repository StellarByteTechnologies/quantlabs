import Link from 'next/link';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
const CTA = () => {
  return <section className="section py-6 position-relative">
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="shadow-none border mb-lg-0 rounded-sm">
              <CardBody>
                <h3 className="mt-0 fw-semibold">Get in touch</h3>
                <p>
                  Don&apos;t find suitable opening? We&apos;d still love to learn more about you. Contact us and we&apos;ll reach out to have
                  interesting conversation!
                </p>
                <Link href="/pages/contact" className="btn btn-outline-primary mt-4">
                  Contact Us
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="shadow-none border mb-0 rounded-sm">
              <CardBody>
                <h3 className="mt-0 fw-semibold">Meet the team</h3>
                <p>Learn more about us and who all work at Omaics. You will get chance to work with everyone in the team.</p>
                <Link href="/pages/contact" className="btn btn-outline-primary mt-4">
                  Meet our team
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default CTA;