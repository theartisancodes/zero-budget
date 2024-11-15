import { withApiAuthRequired, getSession, Session } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  user?: Session['user'];
  error?: string;
};

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const session = await getSession(req, res);

    if (!session) {
      return res.status(401).json({
        message: 'Authentication required',
        error: 'Unauthorized'
      });
    }

    res.status(200).json({
      message: 'This is a protected API route',
      user: session.user
    });
  }
);
