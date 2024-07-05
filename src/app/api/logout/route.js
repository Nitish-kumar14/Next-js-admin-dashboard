export async function POST(req, res) {
    return new Response(JSON.stringify({ message: 'Logout successful' }), {
      status: 200,
      headers: {
        'Set-Cookie': 'authToken=; HttpOnly; Path=/; Max-Age=0',
        'Content-Type': 'application/json'
      }
    });
  }
  