import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const posts = [
    {
      title: "Boost your conversion rate",
      href: "#",
      category: { name: "Platino Motros", href: "https://grupoplatino.github.io/PlatinoMotors/" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "6 min",
    },
    {
      title: "How to use search engine optimization to drive sales",
      href: "#",
      category: { name: "Platino Usados", href: "https://www.grupoplatino.hn/#/" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "4 min",
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: { name: "Plaino Software", href: "https://www.grupoplatino.hn/#/" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: { name: "Platino Capital", href: "https://www.grupoplatino.hn/#/" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
    },
  ]
  const openUrl = (url) => {
    if (url !== "" || url !== undefined) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }
  return (
    <div className="relative bg-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight text-start md:text-center font-extrabold text-gray-900 sm:text-4xl">Noticias</h2>
          <p className="mt-3 max-w-2xl text-start md:text-center mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="container mx-auto blog-carousel mt-8">
          <Slider {...settings} prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}>
            {posts.map(function (post, index) {
              return (
                <div key={index} className="px-4 pt-10 pb-5">
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <LazyLoadImage className="object-cover object-center" src={post.imageUrl} alt={post.title} effect="blur" />
                    </div>
                    <div className="bg-white p-6">
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-orange-600">
                            <p onClick={() => openUrl(post.category.href)} className="hover:underline hover:cursor-pointer">
                              {post.category.name}
                            </p>
                          </p>
                          <p className="text-gray-600">
                            {post.date}
                          </p>
                        </div>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                          <p className="mt-3 text-base text-gray-500">{post.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="bg-orangeCustom-400 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 2xl:h-9 2xl:w-9" fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="bg-orangeCustom-400 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 2xl:h-9 2xl:w-9" fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Blog;