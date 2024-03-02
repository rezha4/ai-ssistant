import Feed from "../components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        An AI Assisstant
        <br className="" />
        <span className="orange_gradient text-center"> AI Powered Virtual Assistant</span>
      </h1>
      <p className="desc text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsa libero adipisci
        voluptatibus blanditiis totam assumenda officiis, similique esse placeat provident dolor
        minima perspiciatis velit possimus officia repudiandae soluta accusamus.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
