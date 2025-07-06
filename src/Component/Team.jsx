function Team() {
  const members = [
    {
      name: "Sejpalsinh Jadeja",
      image: "images/persion-01.jpg",
    },
    {
      name: "Riya Patel",
      image: "images/persion-01.jpg",
    },
    {
      name: "Aarav Mehta",
      image: "images/persion-01.jpg",
    },
    {
      name: "Priya Shah",
      image: "images/persion-01.jpg",
    },
    {
      name: "Yash Verma",
      image: "images/persion-01.jpg",
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-[14rem] py-8">
      <h2 className="text-5xl font-bold mb-5 leading-14 text-center">
        Algo Delta's Most Valuable Assets
      </h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="lg:w-[15%] md:w-[30%] sm:w-full flex flex-col items-center px-2 py-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-square object-cover rounded-full hover:rounded-[10px] transition-all duration-500 ease-in-out shadow-md hover:shadow-lg"
            />
            <h3 className="text-lg font-bold mt-3 text-center">
              {member.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
