const VideoSection = () => {
    const videos = [
      {
        thumbnail: "https://res.cloudinary.com/dtixzwuqt/video/upload/v1729801448/RAW_Coconut_Water_Product_Commercial_eufs7v.mp4", // replace with actual video thumbnail
        title: "Top 5 Drinks for Immune Health",
        duration: "5:08",
        link: "#",
      },
      {
        thumbnail: "https://www.youtube.com/embed/ySxb-xbJmDU?si=I6yk1rhz4RmnTA2C", // replace with actual video thumbnail
        title: "Top 10 Healthy Costco Foods",
        duration: "9:13",
        link: "#",
      },
      {
        thumbnail: "https://www.youtube.com/embed/9TUMpaEoN-I?si=eOsqCPswN7DTFp9O", // replace with actual video thumbnail
        title: "The Best Foods to Get More Protein in Your Diet",
        duration: "13:01",
        link: "#",
      },
      {
        thumbnail: "https://www.youtube.com/embed/99lzBNqYHGM?si=3AHu2G3EaockNQ_i", // replace with actual video thumbnail
        title: "Creatine for Maximum Results: Not Just for Gym Bros!",
        duration: "7:46",
        link: "#",
      },
    ];
  
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">FRESH FOOD FAST</h2>
          <a href="#" className="text-green-600 font-semibold hover:underline flex items-center">
            VIEW ALL
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {videos.map((video, index) => (
            <div key={index} className="group">
              <div className="relative">
                <iframe
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                  src={video.thumbnail} // Ensure autoplay is disabled
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>                            
              </div>            
            </div>
          ))}
        </div>
      </section>
      
    );
  };
  
  export default VideoSection;
  