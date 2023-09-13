import {query as botafogo1907} from "faunadb"
import { botafogoClient } from "@/utils/fauna"
export default async (req,res) => {

    const {firstName, lastName, telephone}= req.body

    try {
        await botafogoClient.query(
            botafogo1907.Create(botafogo1907.Collection("customers"), {
                data: {
                    firstName,
                    lastName,
                    telephone
                }
            })
        )
    
     } catch (error)
     {
        res.status(500).json({error: error.message})
     }
}