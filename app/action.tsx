import AnimeCard, { AnimeProp } from "@/components/AnimeCard"
import axios from "axios"

export const fetchAnime=async (param:number)=>
{
   const {data} =await axios.get(`https://shikimori.one/api/animes?page=${param}&limit=8&order=popularity`)
   

   return data.map((item: AnimeProp, index:number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ))
}