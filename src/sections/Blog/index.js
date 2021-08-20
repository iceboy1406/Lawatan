import React from "react";
import BlogPreview from "../../components/BlogPreview";
import SectionHeader from "../../components/SectionHeader";
import BlogImage1 from "../../assets/images/blog_image_1.webp";
import BlogImage2 from "../../assets/images/blog_image_2.webp";
import BlogImage3 from "../../assets/images/blog_image_3.webp";
import BlogImage4 from "../../assets/images/blog_image_4.webp";
import BlogImage5 from "../../assets/images/blog_image_5.webp";
function Blog() {
  const blogs = [
    {
      title: "Why is the number of visitors to Kuta Beach increasing?",
      description:
        "Lorem ipsum dolor sit amet, consectetur amarew adipiscing elit. Laoreet ornare eu amet ornare si....",
      like_count: 455,
      comment_count: 15,
      image: BlogImage1,
    },
    {
      title: "Visiting the Grand Canyon? Why not",
      description:
        "Lorem ipsum dolor sit amet, consectetur amarew adipiscing elit. Laoreet ornare eu amet ornare si....",
      like_count: 300,
      comment_count: 75,
      image: BlogImage2,
    },
    {
      title: "Top 10 Forest, You Must Visit ",
      description:
        "Lorem ipsum dolor sit amet, consectetur amarew adipiscing elit. Laoreet ornare eu amet ornare si....",
      like_count: 655,
      comment_count: 1,
      image: BlogImage3,
    },
    {
      title: "Deadly lake you shouldn't visit",
      description:
        "Lorem ipsum dolor sit amet, consectetur amarew adipiscing elit. Laoreet ornare eu amet ornare si....",
      like_count: 200,
      comment_count: 25,
      image: BlogImage4,
    },
    {
      title: "A waterfall that is perfect for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur amarew adipiscing elit. Laoreet ornare eu amet ornare si....",
      like_count: 1500,
      comment_count: 150,
      image: BlogImage5,
    },
  ];
  return (
    <section id='blog'>
      <SectionHeader
        captionLabel='News For U'
        captionHeading='Our Blog'
        captionParagraph='We provide writing about tourist attractions.'
      />
      <div className='blog-list'>
        {blogs.map((blog, index) => {
          return (
            <React.Fragment key={index}>
              <BlogPreview
                backgroundImage={blog.image}
                blogTitle={blog.title}
                blogDescription={blog.description}
                likeCount={blog.like_count}
                commentCount={blog.comment_count}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;
