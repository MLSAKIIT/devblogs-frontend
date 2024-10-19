import Footer from "./Footer";

const ExpandedCard = ({ post, similarPosts, onBack }) => {
  return (
    <>
    <div className="relative min-h-screen bg-white text-black p-4">
      {/* Back button in the top-left corner */}
      <button
        className="absolute top-64 left-56 text-white bg-gray-800 p-3 rounded-full"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="flex flex-col items-center mt-8"> {/* Added margin-top to adjust spacing below the back button */}
        <img
          src={post.img}
          alt={post.title}
          className="w-full max-w-3xl h-auto object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
        <p className="text-lg text-black mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et.
        </p>

        <h3 className="text-2xl  font-bold mb-4">Similar Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similarPosts.map((similarPost) => (
            <div
              key={similarPost.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={similarPost.img}
                alt={similarPost.title}
                className="w-full h-64 object-fill object-center"
              />
              <div className="p-4">
                <h4 className="text-lg text-white font-bold">{similarPost.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
      </div>
     
    </div>
    
     <Footer/>
    
     </>
  );
};

export default ExpandedCard;
