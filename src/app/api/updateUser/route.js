import { updateUserInDatabase } from "@/app/lib/data"; // Adjust the import according to your project structure

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, username, post, doj, Team, EmployeeId } = req.body;

    try {
      const updatedUser = await updateUserInDatabase({ id, username, post, doj, Team, EmployeeId });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
