import React from "react";
import Slider from 'react-slick';

const testimonialData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

export const Testi = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,  
    };

  return (
    <>
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm dark:text-primary">Testimonial</p>
          <h1 className="text-3xl font-bold dark:text-white pb-4">Testimonial</h1>
          <p className="text-xs text-gray-400 dark:text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quis est aut delectus fugiat provident illo tenetur facere expedita
            similique?
          </p>
        </div>
        {/* Testimonial Section */}
        <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
            {testimonialData.map(({id, name, text, img}) => {
                return (
                    <div key={id} className="my-6">
                        <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                            <img src={img} alt="" className="rounded-full block mx-auto" />
                            <p className="text-gray-500 text-sm">{text}</p>
                            <h1 className="text-xl font-bold">{name}</h1>
                            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"> ,, </p>
                        </div>
                    </div>
                )
            })}
            </Slider>
        </div>
      </div>
    </div>
    </>
  );
};

export default Testi;
