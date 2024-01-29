import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  console.time("videos");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  console.timeEnd("videos");
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const vidoes = await getVideos(id);
  return (
    <div className={styles.container}>
      {vidoes.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
        />
      ))}
    </div>
  );
}
