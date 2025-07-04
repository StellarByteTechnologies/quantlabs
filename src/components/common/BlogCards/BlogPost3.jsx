import { Card, CardImg } from 'react-bootstrap';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
const BlogPost3 = ({
  post
}) => {
  return <Card className="card-listing-item">
      <div className="card-img-top-overlay">
        <div className={clsx(post.overlay ? 'overlay-' + post.overlay : 'overlay')}></div>
        <span className={clsx('card-badge', 'top-right', 'bg-' + post.tag.variant, 'text-white')}>{post.tag.value}</span>

        <CardImg src={post.image.src} alt="Card Image" variant="top" />

        <div className="card-overlay-bottom">
          <h2>
            <Link href="/pages/blog/post" className="text-white">
              {post.title}
            </Link>
          </h2>

          <div className="avatar-group">
            {(post.groupAvatars || []).map((img, idx) => {
            return <Link href="" className="avatar-group-item me-1" key={idx}>
                  <Image src={img} alt="avatar" className="img-fluid avatar-xs rounded-circle avatar-border" />
                </Link>;
          })}
          </div>
        </div>
      </div>
    </Card>;
};
export default BlogPost3;