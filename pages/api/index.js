
import { executeQuery } from './db';

const handler = async (req, res) => {
  // DESC(내림차순), ASC(오름차순)
  const { method, body } = req;

  const seletData = async () => {
    try {
      let data = await executeQuery('select * from user order by id DESC', []);
      res.json(data)
    } catch (err) {
      res.send(err);
    }
  }

  const insertData = async () => {
    let { name, email, tel } = body;

    let data = await executeQuery(
      'insert into user (name,email,date) value (?,?,?)',
      [name, email, tel]
    );
    res.json(data)
  }

  switch (method) {
    case "GET": seletData(); break;
    case "POST": insertData(); break;
  }
}

export default handler;

