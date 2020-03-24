const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, resp, next) {
    const ongs = await connection('ongs').select('*');
  
    return resp.json(ongs);
  },
  async create(req, resp, next) {
    const {name, email, whatsapp, city, uf} = req.body;
    
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    
    return resp.json({ id });
  }
}