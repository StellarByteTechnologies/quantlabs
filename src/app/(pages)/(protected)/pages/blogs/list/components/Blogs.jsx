import BlogPost1 from '@/components/common/BlogCards/BlogPost1';
import BlogPost2 from '@/components/common/BlogCards/BlogPost2';
import Image from 'next/image';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { post1, postData2 } from '../data';
import SubscriptionForm from './SubscriptionForm';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar4 from '@/assets/images/avatars/img-4.jpg';
import avatar7 from '@/assets/images/avatars/img-7.jpg';
import post3 from '@/assets/images/blog/post3.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
const tags = ['Business', 'Community', 'Announcement', 'Tutorials', 'Resources', 'Interview'];
const Blogs = () => {
  return <section className="py-6 position-relative">
      <Container>
        <Row className="justify-content-lg-between">
          <Col lg={12}>
            <div className="d-flex align-items-center mb-5">
              <h5 className="me-2 fw-medium">Tags:</h5>
              <div>
                {tags.map((tag, idx) => <Button variant="white" size="sm" className="mb-1 me-1" href="#" key={idx}>
                    {tag}
                  </Button>)}
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <Row data-aos="fade-up" data-aos-duration={300}>
              <Col lg={8}>
                <BlogPost1 post={post1[0]} />
              </Col>
              <Col lg={4}>
                <SubscriptionForm />
              </Col>
            </Row>
            <Row className="mt-6" data-aos="fade-up">
              {postData2.map((post, idx) => <Col lg={4} key={idx}>
                  <BlogPost2 post={post} />
                </Col>)}
            </Row>
            <Row className="mt-6" data-aos="fade-up">
              <Col lg={8} className="h-100">
                <BlogPost1 post={post1[1]} />
              </Col>
              <Col lg={4}>
                <Card className="card-listing-item">
                  <div className="card-img-top-overlay">
                    <div className="overlay" />
                    <span className="card-badge top-right bg-danger text-white">Resource</span>
                    <Image src={post3} width={354} height={324} alt="post" className="card-img-top" />
                    <div className="card-overlay-bottom">
                      <h2 className="fw-semibold">
                        <Link href="/blogs/post" className="text-white">
                          Top 10 ideas to improve the team productivity
                        </Link>
                      </h2>
                      <div className="avatar-group mt-auto">
                        <span role="button" className="avatar-group-item shadow-lg">
                          <Image src={avatar7} alt="image" className="img-fluid avatar-xs rounded rounded-circle avatar-border" />
                        </span>
                        <span role="button" className="avatar-group-item shadow-lg">
                          <Image src={avatar2} alt="image" className="img-fluid avatar-xs rounded rounded-circle avatar-border" />
                        </span>
                        <span role="button" className="avatar-group-item shadow-lg">
                          <Image src={avatar4} alt="image" className="img-fluid avatar-xs rounded rounded-circle avatar-border" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row className="row mt-6" data-aos="fade-up">
              {postData2.map((post, idx) => <Col lg={4} key={idx}>
                  <BlogPost2 post={post} />
                </Col>)}
            </Row>
            <Row className="mt-5">
              <Col lg={12}>
                <div className="d-flex align-items-center justify-content-center">
                  <Link className="btn btn-sm btn-white" href="">
                    <IconifyIcon icon="lucide:arrow-left" className="icon-xxs  me-2" />
                    Previous
                  </Link>
                  <Link className="btn btn-sm btn-white ms-2" href="">
                    Next
                    <IconifyIcon icon="lucide:arrow-right" className="icon-xxs ms-2" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Blogs;