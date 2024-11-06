const TopBanner = () => { 
    return (
      <section className="relative w-full h-64">
        <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://res.cloudinary.com/dtixzwuqt/image/upload/v1729703664/oil5_lkavc8.avif" 
            alt="Banner" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
          />
        </a>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          {/* Break h1 text into two lines */}
          <h1 className="text-black text-5xl font-bold leading-snug">
            Nutrition
          </h1>
          {/* Break h3 text into two lines */}
          <h5 className="text-black text-3xl font-bold mt-4 leading-snug">
            Your essential guide to healthy eating
          </h5>
        </div>
        <div className="absolute inset-0"></div> 
      </section>
    );
  };
  
  export default TopBanner;
  