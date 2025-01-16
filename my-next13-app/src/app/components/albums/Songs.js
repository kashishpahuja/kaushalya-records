import React, { useState } from "react";
import { FaCross } from "react-icons/fa";

export default function SongsList({ songs }) {
  const [popupSong, setPopupSong] = useState(null);

  return (
    <div>
      {/* Songs List */}
      <div className="py-12 px-4 lg:px-20">
        <h2 className="text-2xl font-bold mb-6">Songs</h2>
        <div className="grid grid-cols-1 gap-6">
          {songs.map((song, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center p-4 h-[400px] gap-24 w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full lg:1/2 h-[100%] ">
                <img
                  src={song.image}
                  alt={song.name}
                  className=" w-full h-[100%] rounded-lg object-cover"
                />
              </div>

              <div className="w-full lg:1/2 flex flex-col gap-6 items-center justify-center">
                <h3 className="exo-bold text-3xl ">{song.name}</h3>
                <p className="exo-200 text-lg text-gray-400 ">
                  Lyrics : {song.writer}
                </p>
              <button
                onClick={() => setPopupSong(song)}
                className="exo-bold p-2 lg:px-6 lg:py-4  border-white hover:border-black hover:text-black hover:bg-white w-fit text-white border "
              >
               Watch Here
              </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {popupSong && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="border mx-6 rounded-lg w-[300px] md:w-[500px] lg:w-[800px] h-[400px] md:h-[500px] relative mt-8">
            {/* Close Icon */}
            <button
              onClick={() => setPopupSong(null)}
              className="absolute top-2 right-4 text-white text-3xl hover:text-red-600"
            >
              &times;
            </button>

            {/* Embedded YouTube Video */}
            <div className="w-full h-[100%]">
              <iframe
                src={`https://www.youtube.com/embed/${popupSong.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-[100%] object-cover"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
