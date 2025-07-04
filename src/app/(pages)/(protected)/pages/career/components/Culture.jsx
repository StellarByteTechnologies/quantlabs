import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import img1 from '@/assets/images/photos/3.jpg';
import img2 from '@/assets/images/photos/4.jpg';
import img3 from '@/assets/images/photos/5.jpg';
import img4 from '@/assets/images/photos/10.jpg';
const GlightBox = dynamic(() => import('@/components/GlightBox'), {
  ssr: false
});
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Culture = () => {
  const galleryImages = [img1, img2, img4, img3];
  return <section className="py-7 mt-5 position-relative bg-gradient2">
      <div className="divider top d-none d-sm-block" />
      <Container>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">Our Beliefs</span>
            <h1 className="display-5 fw-semibold">Our Culture</h1>
            <p className="text-muted mx-auto">
              At Omaics, We believe in a fully balanced personal and professional life, importance of focus, fun, self-motivation and full
              transparency.
            </p>
          </Col>
        </Row>
        <div data-bs-toggle="image-gallery" data-delegate="a" data-type="image" data-enable-gallery="true" className="mt-5">
          <Row data-aos="fade-up">
            {galleryImages.map((image, idx) => <Col lg={6} key={idx}>
                <GlightBox href={image.src}>
                  <Card className="shadow rounded-sm">
                    <CardBody className="p-1">
                      <Image src={image} alt="image" className="img-fluid rounded-sm" />
                    </CardBody>
                  </Card>
                </GlightBox>
              </Col>)}
          </Row>
        </div>
      </Container>
    </section>;
};
export default Culture;