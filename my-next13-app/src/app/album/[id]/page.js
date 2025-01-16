"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SongsList from "../../components/albums/Songs"; // Import the SongsList component

async function fetchAlbumData(id) {
  const albums = [
    {
      id: "dj-christopher-johnson",
      title: "DJ Christopher Johnson",
      description: "Live set from UV Studio, USA",
      songs: [
        { name: "Track 1", writer: "Writer A", image: "/Images/album1.webp" },
        { name: "Track 2", writer: "Writer B", image: "/Images/album1.webp" },
        { name: "Track 3", writer: "Writer C", image: "/Images/album1.webp" },
      ],
      bannerImage: "/Images/album4.webp",
    },
    {
      id: "dj-sarah-parker",
      title: "DJ Sarah Parker",
      description: "Live set from NY Studio, USA",
      songs: [
        { name: "Track A", writer: "Writer X", image: "/Images/album1.webp" },
        { name: "Track B", writer: "Writer Y", image: "/Images/album1.webp" },
        { name: "Track C", writer: "Writer Z", image: "/Images/album1.webp" },
      ],
      bannerImage: "/Images/album3.webp",
    },
    {
      id: "dj-live-session",
      title: "DJ Live Session",
      description: "Special event mix",
      songs: [
        { name: "Mix 1", writer: "Writer M", image: "/Images/album1.webp" },
        { name: "Mix 2", writer: "Writer N", image: "/Images/album1.webp" },
        { name: "Mix 3", writer: "Writer O", image: "/Images/album1.webp" },
      ],
      bannerImage: "/Images/album1.webp",
    },
  ];

  return albums.find((album) => album.id === id) || null;
}

export default function AlbumPage({ params }) {
  const { id } = params;
  const router = useRouter();

  const [albumData, setAlbumData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAlbumData(id);
      if (!data) {
        router.push("/404");
      } else {
        setAlbumData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [id, router]);

  if (loading) {
    return (
      <div className="text-white text-center py-24">
        <p>Loading album data...</p>
      </div>
    );
  }

  if (!albumData) {
    return null;
  }

  return (
    <div className="text-white">
      {/* Banner */}
      <div
        className="relative h-[240px] lg:h-[410px] w-full"
        style={{
          backgroundImage: `url(${albumData.bannerImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70 rounded-lg"
          aria-hidden="true"
        ></div>
        <div className="relative z-20 top-16 lg:top-32 ">
          <div className="flex flex-col gap-4 items-center justify-center  ">
            <h3 className="exo-bold text-3xl lg:text-4xl text-white">
              {albumData.title}
            </h3>
            <h3 className="exo-200 text-lg lg:text-xl text-gray-300">
              {albumData.description}
            </h3>
          </div>
        </div>
      </div>

      {/* SongsList Component */}
      <SongsList songs={albumData.songs} />
    </div>
  );
}
