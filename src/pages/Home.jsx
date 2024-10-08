import HeroSection from "../components/HeroSection";
import RecentPosts from "../components/RecentPosts";

const Home = () => {
  const heroPosts = [
    {
      title:
        "Breaking Into Product Design: Advice from Untitled Founder, Frankie",
      description:
        "Learn key strategies to break into the product design field with insights from Frankie.",
      img: "https://images.unsplash.com/photo-1651066471224-b970dd45acc3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mastering UX Design: Tips from Industry Experts",
      description:
        "Discover how leading UX designers build intuitive experiences.",
      img: "https://plus.unsplash.com/premium_photo-1681755915233-9acafb348a7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Importance of Wireframing in UX Design",
      description:
        "How wireframing can streamline your design process and improve outcomes.",
      img: "https://images.unsplash.com/photo-1657639466571-15adb5ab7bea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Migrating to Linear 101",
      author: "Leslie Alexander",
      date: "Mar 16, 2020",
      img: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Building your API Stack",
      author: "Michael Foster",
      date: "Mar 10, 2020",
      img: "https://plus.unsplash.com/premium_photo-1727537538673-07a31d71efe3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Migrating to Linear 101",
      author: "Leslie Alexander",
      date: "Mar 16, 2020",
      img: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Building your API Stack",
      author: "Michael Foster",
      date: "Mar 10, 2020",
      img: "https://plus.unsplash.com/premium_photo-1727537538673-07a31d71efe3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Migrating to Linear 101",
      author: "Leslie Alexander",
      date: "Mar 16, 2020",
      img: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Building your API Stack",
      author: "Michael Foster",
      date: "Mar 10, 2020",
      img: "https://plus.unsplash.com/premium_photo-1727537538673-07a31d71efe3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // More posts...
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with multiple posts */}
      <HeroSection posts={heroPosts} />

      {/* Recent Blog Posts */}
      <RecentPosts posts={blogPosts} />
    </div>
  );
};

export default Home;
