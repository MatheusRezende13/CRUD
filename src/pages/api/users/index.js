import {query as botafogo1907} from "faunadb"
import { botafogoClient } from "@/utils/fauna"
export default async (req,res) => {

try {

const user = await botafogoClient.query(
    botafogo1907.Map(
        botafogo1907.Paginate(
            botafogo1907.Match(
                botafogo1907.Index(
                    "all_customers"
                )
            )
        ), (ref) => botafogo1907.Get(ref)
    )
) ;res.status(200).json(user.data)

} catch (e){
    res.status(500).json({error: "Flamengo"})
}

}