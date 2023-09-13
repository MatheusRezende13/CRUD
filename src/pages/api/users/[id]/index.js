import {query as botafogo1907} from "faunadb"
import { botafogoClient } from "@/utils/fauna"
export default async (req,res) => {

    const {query:{id}}= req

    try {
        const user = await  botafogoClient.query(
            botafogo1907.Get(botafogo1907.Ref(botafogo1907.Collection("customers"), id))
            )
    res.status(200).json(user.data)
     } catch (error)

     {
        res.status(500).json({error: error.message})
     }
}  