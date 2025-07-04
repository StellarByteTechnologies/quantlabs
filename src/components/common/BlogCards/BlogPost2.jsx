import Image from 'next/image';
import Link from 'next/link';
const BlogPost2 = ({
  post
}) => {
  const {
    image,
    tag,
    title,
    description
  } = post;
  return <div>
      <Image height={237} width={356} src={image} alt="crypto" className=" d-block shadow rounded" />
      <div className="mt-3">
        <Link href="">
          <span className={`badge badge-soft-${tag.variant} mb-1`}>{tag.value}</span>
        </Link>
      </div>
      <h4 className="fw-semibold mt-1">
        <Link href="/blogs/post">{title}</Link>
      </h4>
      <p className="text-muted">
        {description}
        <Link href="/blogs/post" className="text-primary">
          read more
        </Link>
      </p>
    </div>;
};
export default BlogPost2;