// pages/api/users.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../drizzle.config';
import { users } from '../lib/schema';
 // Ajusta la ruta según donde lo guardes

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const userList = await db.select().from(users);
      res.status(200).json(userList);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
  } else if (req.method === 'POST') {
    const { name, email }: { name: string; email: string } = req.body;

    try {
      await db.insert(users).values({ name, email });
      res.status(201).json({ message: 'Usuario creado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear usuario', error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
