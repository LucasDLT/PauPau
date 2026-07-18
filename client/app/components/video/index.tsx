export const Video = () => {
  return (
    <video
      src="/VideoHero.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-200 h-120 object-fill mask-[linear-gradient(to_bottom,transparent_1%,black_35%,black_65%,transparent_100%)] md:border-x"
    />
  );
};
