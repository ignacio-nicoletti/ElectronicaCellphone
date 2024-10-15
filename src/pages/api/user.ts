import { db } from '@/db';
import { users } from '@/db/schema';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const allUsers = await db.select().from(users);
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    try {
      const newUser = await db.insert(users).values({ name, email, password }).returning();
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
