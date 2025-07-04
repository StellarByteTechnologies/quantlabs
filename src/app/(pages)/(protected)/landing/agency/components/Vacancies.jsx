import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const Vacancies = ({
  jobDetails
}) => {
  return <section className="section py-5 position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="text-center">
              <h1 className="display-5 fw-semibold">We&apos;re Hiring</h1>
              <p className="mt-0 mb-4">We&apos;re a team of lifelong learners. We&apos;re equal parts left and right brained.</p>
              <Link href="" className="btn btn-secondary mb-2">
                Learn about our culture
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-5">
          <Col lg={8}>
            {jobDetails.map((job, idx) => <Link href="" className="text-dark d-block" key={idx}>
                <Card className="border rounded mb-3 aos-init" data-aos="fade-up" data-aos-duration={500}>
                  <CardBody className="p-3">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <h5 className="my-0 fw-semibold">{job.designation}</h5>
                      </Col>
                      <Col md={4} className="offset-md-1">
                        <p className="text-muted mb-0">
                          {job.location} / {job.jobType}
                        </p>
                      </Col>
                      <Col md={1} className="text-md-end mt-3 mt-md-0">
                        <IconifyIcon className="icon-xs" icon="lucide:chevron-right" />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Link>)}
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Vacancies;