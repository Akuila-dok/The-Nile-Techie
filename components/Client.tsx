import React from 'react';

const Client = () => {
  const remarks = [
    {
      id: 1,
      name: 'Choldit Ngor Kiir - Director and CEO of Nile Salvation College',
      text: `✨ "Akuila delivered a professional and sleek website for our college.<br />
      The design is user-friendly, and the response time for updates is excellent.<br />
      We have received great feedback from students and faculty.<br />
      I highly recommend Akuila for any web development work.<br />
      Truly a pleasure working with him!" 😊`
    },

    {
      id: 3,
      name: 'Macrae Waithaka - Director and CEO of Macrae Graphics',
      text: `💼 "The web app Akuila developed for us is a game-changer for our graphic design business.<br />
      It\'s efficient, intuitive, and perfectly aligns with our operational needs.<br />
      We now save time on client onboarding and project management,<br />
      all thanks to Akuila’s hard work and dedication." 🙌`
    },

    {
      id: 2,
      name: 'Deng Lual Manyang - Director and CEO of CushTech',
      text: `🌟 "Akuila exceeded our expectations with the website design for CushTech.<br />
      His attention to detail and understanding of our needs were impressive.<br />
      The website has enhanced our online presence and streamlined our client interactions.<br />
      Fast and effective solutions, we are grateful!" 👌`
    },
  
    {
      id: 4,
      name: 'Charles Maino - CFO Afritechsgroup',
      text: `🚀 "The app Akuila and his team built has been a cornerstone of our digital outreach.<br />
      He worked tirelessly to bring our vision to life,<br />
      integrating features that allow seamless communication with our audience.<br />
      The results are fantastic, and we couldn\'t be happier!" 🔥`
    }
  ];

  return (
    <div className="flex flex-col items-start justify-center py-16 px-4" id='testimonials'>
      <h2 className="text-3xl font-extralight text-white mb-8 uppercase animate-pulse font-['IBM_Plex_Sans']">Satisfied Clients Remarks</h2>

      <div className="flex flex-col gap-10 items-start w-full">
        {remarks.map(({ id, name, text }) => (
          <div key={id} className="flex flex-col text-start">
            <h3 className="text-md md:text-lg lg:text-xl text-purple font-semibold mb-2 font-['IBM_Plex_Sans']">
              {name}
            </h3>
            <blockquote
              className="text-xs md:text-sm lg:text-base text-gray-400 font-['IBM_Plex_Sans'] font-light transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:text-lg hover:scale-105 leading-relaxed border-l-4 border-green-500 pl-4"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
