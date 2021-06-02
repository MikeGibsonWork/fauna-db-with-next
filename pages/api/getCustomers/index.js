/*jshint esversion: 8 */

//console.log("starting");
//const faunadb = require('faunadb');

//const secret = "1234566789"; //process.env.FAUNADB_SECRET_KEY;
//console.log(secret);
//const q = faunadb.query;
//console.log(q);
// const client = new faunadb.Client({ secret });
// console.log(client);

// module.exports = async (req, res) => {
//     try {
//         console.log("trying");
//         const dbs = await client.query(
//             q.Map(
//                 q.Paginate(
//                     q.Match(
//                         q.Index('all_customers')
//                     )
//                 ),
//                 ref = q.Get(ref)
//             )
//         );
//         res.status(200).json(dbs.data);
//     } catch(error) {
//         res.status(500).json({ error: error.message }
//         );
//     }
// };