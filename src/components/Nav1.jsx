const Nav1 = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between">
        <div className="flex gap">
          <div className="h-14 mr-9">
            <img
              className="h-full"
              src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>Creation</div>
            <div>Business</div>
            <div>Growth</div>
            <div>Resources</div>
            <div className="border-r-2 border-gray-400 pr-5">Enterprice</div>
            <div>Price</div>
            <div>Support</div>
          </div>
        </div>
        <div className="flex items-center gap">
          <div></div>
          <div>Login</div>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Nav1;
