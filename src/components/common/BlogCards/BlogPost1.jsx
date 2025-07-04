import { Card, CardBody, Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
const BlogPost1 = ({
  post
}) => {
  const {
    image,
    tag,
    title,
    description,
    postedBy,
    postedOn
  } = post;
  return <Card className="shadow-none">
      <Row>
        <Col md={5}>
          <Image className="img-fluid rounded-sm" src={image} alt="post image" />
        </Col>
        <Col md={7}>
          <CardBody className="d-flex flex-column h-100 py-0 ps-2 pe-3">
            <Link href="">
              <span className={`badge badge-soft-${tag.variant} mb-1`}>{tag.value}</span>
            </Link>
            <h3 className="mt-1 fw-semibold">
              <Link href="/blog/post">{title}</Link>
            </h3>
            <p className="text-muted">
              {description}
              <Link href="/blog/post" className="text-primary">
                read more
              </Link>
            </p>
            <div className="mt-auto">
              <div className="d-flex">
                {postedBy?.avatar && <Image className="me-2 rounded-sm" src={postedBy.avatar} alt="post" height={36} />}
                <div className="flex-grow-1">
                  <h6 className="m-0 fs-13">
                    <a href="">{postedBy?.name}</a>
                  </h6>
                  <p className="text-muted mb-0 fs-13">
                    {postedOn.date} · {postedOn.time}
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>;
};
export default BlogPost1;