import React from "react";
import Title from "../../components/Title";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
      text: "Description for Image 1",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1664474563253-02b680ca192d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 2",
      text: "Description for Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 3",
      text: "Description for Image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 4",
      text: "Description for Image 4",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1664109999494-ddfb14faaaeb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 5",
      text: "Description for Image 5",
    },
    {
      src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 6",
      text: "Description for Image 6",
    },
    {
      src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 7",
      text: "Description for Image 7",
    },
    {
      src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 8",
      text: "Description for Image 8",
    },
    {
      src: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 9",
      text: "Description for Image 9",
    },
    {
      src: "https://www.colorhexa.com/010204.png",
    },
    {
      src: "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 6",
      text: "Description for Image 6",
    },
    {
      src: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 7",
      text: "Description for Image 7",
    },
    {
      src: "https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image 8",
      text: "Description for Image 8",
    },
    {
      src: "https://www.colorhexa.com/010204.png",
    },
    {
      src: "https://www.colorhexa.com/010204.png",
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <Title title="Gallery" />

      <div className="grid grid-cols-1 lg:grid-cols-5 place-content-center gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-[300px] h-[150px] object-cover transition-transform duration-300 transform rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yelllow bg-opacity-75 text-white">
              <p className="text-lg font-semibold">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
