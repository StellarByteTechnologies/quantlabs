import { Col, Container, Row } from 'react-bootstrap';
import { userComments } from '../data';
import { Fragment } from 'react';
import Image from 'next/image';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import AddComment from './AddComment';
const Comments = () => {
  return <section className="position-relative pb-5">
      <Container>
        <Row>
          <Col lg={12}>
            <div>
              <h4 className="mb-3">
                Comments<span className="badge badge-soft-secondary fs-14 align-middle ms-2">3</span>
              </h4>
              {userComments.map((comment, idx) => {
              return <Fragment key={idx}>
                    <div className="d-flex align-items-top mt-4">
                      <Image className="me-2 rounded-sm" src={comment.avatar} alt="avatar" height={36} />
                      <div className="flex-grow-1">
                        <h6 className="m-0">{comment.name} </h6>
                        <p className="text-muted mb-0">
                          <small>{comment.createdAt}</small>
                        </p>
                        <p className="my-1">{comment.description}</p>
                        <div>
                          <span role="button" className="btn btn-sm btn-link text-primary fw-medium p-0">
                            <IconifyIcon className="icon-xxs  me-1" icon="lucide:message-circle" />
                            Reply
                          </span>
                        </div>
                        {comment.reply && comment.reply.map((comment, idx) => <div className="d-flex align-items-top mt-4" key={idx}>
                              <Image className="me-2 rounded-sm" src={comment.avatar} alt="avatar" height={36} />
                              <div className="flex-grow-1">
                                <h6 className="m-0">{comment.name} </h6>
                                <p className="text-muted mb-0">
                                  <small>{comment.createdAt}</small>
                                </p>
                                <p className="my-1">{comment.description}</p>
                                <div>
                                  <span role="button" className="btn btn-sm btn-link text-primary fw-medium p-0">
                                    <IconifyIcon className="icon-xxs me-1" icon="lucide:message-circle" />
                                    Reply
                                  </span>
                                </div>
                              </div>
                            </div>)}
                      </div>
                    </div>

                    {userComments.length - 1 != idx && <hr className="my-4" />}
                  </Fragment>;
            })}
            </div>
            <div className="mt-5 mb-lg-0 mb-5">
              <AddComment />
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Comments;