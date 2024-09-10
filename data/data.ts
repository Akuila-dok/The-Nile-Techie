import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I emphasize working closely with clients and promoting transparent communication.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-5 lg:min-h-[40vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/codeglobe.jpeg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I am highly adaptable to different time zones for communication.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Want to know my tech DEPTH? Here it is!",
      description: "The Slogan is CONSISTENCY!",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech Guru with technical capabilities of sovling problems.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "With my colleague Timothy Baraka, we are currently building a ELearning Application",
      description: "The Screen of ELearning Application",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0  md:w-96 w-40",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/timndok.jpeg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3  md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Full Stack Online Bannking App - Horizon",
      des: "Explore what typescript can do to build an online banking platfrom for easier and efficient transactions.",
      img: "/Horizon.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/Akuila-dok/banking",
    },
    {
      id: 2,
      title: "Health Care Application",
      des: "Wants a polished healthcare manegement system? Explore this one and decide for yourself.",
      img: "/Carepulse.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/Akuila-dok/Carepulse",
    },
    {
      id: 3,
      title: "Uber Clone Full Stack Cross Platform Application",
      des: "A REAL Uber Application clone using React Native to make it work both on Andriod and iOS",
      img: "/Uberclone.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/Akuila-dok/uberclone",
    },
    {
      id: 4,
      title: "Created Stunning Website",
      des: "Used React JS and tailwind css to create Nile Salavtion College of Science and Technology Website.",
      img: "/nilesalvationcollege.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://nilesalvationcollege.edu.ss",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "From start to finish, Akuila was a pleasure to work with. His deep understanding of development and design, combined with his ability to communicate effectively, made our collaboration seamless. Our website is now a true reflection of our brand, thanks to Akuila's expertise",
      name: "Choldit Kiir Ngor",
      title: "Director of Nile Salvation College",
    },

    {
      quote:
        "Akuila brought a level of professionalism and skill to our project that was truly inspiring. His commitment to excellence and his ability to navigate challenges with ease made the entire process smooth and enjoyable. I am thrilled with the results.",
      name: "Deng Lual",
      title: "CEO and Founder of Deng and Deng Graphics",
    },
    {
      quote:
        "I couldn't have asked for a better partner in our website redesign. Akuila's creativity and technical skills are unmatched. He was always available to provide guidance and ensure that every detail was perfect. I highly recommend Akuila for any digital project.",
      name: "Timothy",
      title: "Lead Engineer at Inovate Technologies.",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },

  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/freelancedev.jpg",
    },
    {
      id: 2,
      title: "Mobile App Dev - The Nile Techie Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/mobileappdev.jpg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/frontenddev.jpg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/leadproject.jpg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/akuila-dok"
    },
    {
      id: 2,
      img: "/twit.svg",
      link:"https://x.com/AkuilaDok"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/akuila-miyom-279430246"
    },
  ];