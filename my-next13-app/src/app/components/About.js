import React from "react";

function About() {
  return (
    <div className="text-center py-24 bg-white text-black px-8 md:px-12 xl:px-40">
      <h1 className="text-[26px] lg:text-[38px] font-bold ">WHO WE ARE</h1>
      <h3 className=" text-md text-gray-600 mt-4">
        Our team uniquely integrates words, performance, and music to make the
        audiences leave the events feeling inspired. Here's how we make it
        happen:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        <div className="text-sm ">
          We speak with words that have something to say. Loyal readers can call
          on Kaushalya Records lyricists to write songs that touch the heart of
          individuals for our company. Whether it is tender and romantic or
          powerful and inspiring, the emotions that our team composes lyrics
          for, feels alive and real. Whether you need to find the lyrics for
          love songs or need catchy songs for your energetic performance, our
          lyricists translate your ideas into perfect verses for your songs.
        </div>
        <div className="text-sm ">
        It's interesting to see how music can be given such a splendid feel when used together with good pictures. Our best actors guarantee that every record you shoot, every concert you perform, and each creative job will carry unparalleled drive, emotion, and credibility. Using every element of filmmaking from the script to the performances, we work with our artists to tell a story that makes the song even more magical.

        </div>{" "}
        <div className="text-sm ">
        With modern tools and experience, we create the tones that are bright, smooth, and professional . Whether it is writing musical ideas from scratch or recording them, arranging and finalizing the tracks, we bring ideas to life. Our music producers assist whoever they are – artist, band, filmmaker – to create impactful soundtracks. Altogether, we are not only a company that records and produces music, we are the artists, the visionaries, and the voices behind your visions.

        </div>
      </div>
    </div>
  );
}

export default About;
