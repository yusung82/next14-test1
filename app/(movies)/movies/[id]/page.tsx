import { Suspense } from "react";
import MovieVInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { 
    id : string 
  }
}

export async function generateMetadata({params: {id}}: IParams) {
  const movie = await getMovie(id)

  return {
    title: movie.title,
  }
}


export default async function MovieDetail({ 
  params: {id}, 
}: IParams){

  return (
    <div>
      <h1>Detail page</h1>

      <Suspense fallback={<h2>Loading movie info</h2>}>
        <MovieVInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}