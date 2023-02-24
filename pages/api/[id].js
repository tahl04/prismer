// [id].js

import { executeQuery } from './db';

const handler = async (req, res) => {
  const { method, body, query } = req;


  const seletDataId = async () => {
    let data = await executeQuery('select * from data where id=?', [query.id]);
    res.json(data);
  }

  const updateDataId = async () => {
    let { name, email, date } = body;
    let data = await executeQuery(
      "update data set name=?, email=?, date=? where id=?",
      [name, email, date, query.id]);
    res.json(data);
  }

  const deleteDataId = async () => {
    let data = await executeQuery("delete from data where id=?", [query.id]);
    res.json(data);
  }

  switch (method) {
    case "GET": seletDataId(); break;
    case "PUT": updateDataId(); break;
    case "DELETE": deleteDataId(); break;
  }
  //get[id], put, delete
}

export default handler;

