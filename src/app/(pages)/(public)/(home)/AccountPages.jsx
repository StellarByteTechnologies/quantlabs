import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
const AccountPages = ({
  accountPages
}) => {
  return <section className="position-relative overflow-hidden features-1 py-5" id="auth-pages">
      <Container>
        <Row>
          <Col className="text-center" data-aos="fade-up">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">Account Pages</span>
            <h1 className="display-4 fw-semibold">Account Pages</h1>
          </Col>
        </Row>
        <Row className="mt-2" data-aos="fade-up" data-duration={600}>
          {accountPages.map((item, idx) => <Col lg={6} key={idx}>
              <Link href={item.url} target="_blank" className="mt-4">
                <div className="shadow p-2 rounded-sm border">
                  <Image src={item.image} className="img-fluid" alt="demo-img" />
                </div>
                <h4 className="text-center">{item.name}</h4>
              </Link>
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default AccountPages;