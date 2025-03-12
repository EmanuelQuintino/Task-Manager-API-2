import { sqliteConnection } from "../databases";

export const userRepository = {
  async create({ id, name, email, password }) {
    const db = await sqliteConnection();
    
    const query = `
      INSERT INTO users (id, name, email, password)
      VALUES (?, ?, ?, ?)
    `;

    await db.run(query, [id, name, email, password]);
  },
};
