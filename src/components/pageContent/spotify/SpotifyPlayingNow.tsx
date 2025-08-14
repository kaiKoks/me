"use client";
import React from "react";
import SongLoadingPlaceholder from "./songComponents/SongLoadingPlaceholder";
import NothingPlaying from "./songComponents/NothingPlaying";
import Song from "./songComponents/Song";
import { useQuery } from "@tanstack/react-query";

interface PlayingSong {
  name: string;
  title: string;
  albumImageUrl: string;
  artist: string;
  songUrl: string;
}
interface NothingPlaying {
  isNothingPlaying: true;
}
export default function SpotifyPlayingNow() {
  const updateNowPlaying = async (): Promise<PlayingSong | NothingPlaying> => {
    const res = await fetch("/api/spotify");
    const data = await res.json();
    return data.body;
  };
  const {
    data: song,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["spotify"],
    queryFn: updateNowPlaying,
    refetchInterval: 30000,
    refetchOnWindowFocus: true,
    staleTime: 20000,
  });

  if (isLoading) return <SongLoadingPlaceholder />;
  if (typeof song === "undefined" || error || "isNothingPlaying" in song)
    return <NothingPlaying />;
  return <Song song={song} />;
}
