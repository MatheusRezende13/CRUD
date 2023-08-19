import faunadb from "faunadb"
export const botafogoClient = new faunadb.Client({
    secret: process.env.BOTAFOGO
})