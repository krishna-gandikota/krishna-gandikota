 import data from './data'

 //api/trending
 export default function handler(req:any,res:any){
    const { Trending } = data;
    if(Trending) return res.status(200).json(Trending)
    return res.status(404).json({error:"Data Not Found"})
 }