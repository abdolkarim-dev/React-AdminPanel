export default function OneIsToOne() {
  return (
    <div className="overflow-hidden rounded-lg aspect-square">
      <iframe
        src="/videos/Example.mp4"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
