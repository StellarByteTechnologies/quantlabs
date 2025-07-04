import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
const BlogCard = ({
  blog
}) => {
  const {
    description,
    heading,
    img,
    time,
    title,
    variant,
    duration
  } = blog;
  return <Card className="shadow aos-init" data-aos="fade-up" data-aos-duration={duration}>
      <div className="card-img-top-overlay">
        <div className="overlay" />
        <span className={`card-badge top-right bg-${variant} text-white`}>{heading}</span>
        <div className="position-relative">
          <Image src={img} width={356} height={237} alt="blog" className="card-img-top" />
          <div className="shape text-white bottom">
            <svg width="528px" height="40px" viewBox="0 0 528 40" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <g id="shape" transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)">
                <path d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z" transform="translate(7.629395E-06 6.103516E-05)" fill="currentColor" stroke="none" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <CardBody>
        <div className="mt-2">
          <Row className="align-items-center">
            <Col xs="auto">
              <p className="mb-0">
                <span className="fs-13 align-middle">{time}</span>
              </p>
            </Col>
          </Row>
        </div>
        <div className="mt-2">
          <h4>
            <Link href="" className="card-title-link">
              {title}
            </Link>
          </h4>
          <p className="text-muted mb-2">
            {description}
            <Link href="">Read More</Link>
          </p>
        </div>
      </CardBody>
    </Card>;
};
const Blogs = ({
  blogs
}) => {
  return <section className="section pt-lg-8 pt-6 pb-5 position-relative">
      <Container>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-success px-2 py-1">Case Studies</span>
            <h1 className="display-5 fw-semibold">Read about what we are building</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          {blogs.map((blog, idx) => <Col md={4} key={idx}>
              <BlogCard blog={blog} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Blogs;