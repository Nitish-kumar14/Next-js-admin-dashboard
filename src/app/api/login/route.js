export async function POST(req, res) {
    const { username, password } = await req.json();
  
    // Replace this with your own authentication logic
    if (username === 'admin' && password === 'password') {
      // Set a cookie
      return new Response(JSON.stringify({ message: 'Login successful' }), {
        status: 200,
        headers: {
          'Set-Cookie': 'authToken=your_token; HttpOnly; Path=/',
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  