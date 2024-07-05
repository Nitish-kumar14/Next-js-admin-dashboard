export async function GET(req) {
    const token = req.cookies.get('authToken');
  
    if (token) {
      return new Response(null, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  