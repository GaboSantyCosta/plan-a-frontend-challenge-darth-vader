export interface Movie {
    adult: boolean,
    budget: number,
    id: number,
    original_language: string,
    original_title: string,
    genres: Genre[],
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    status: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

interface Genre {
    id: number,
    name: string
}