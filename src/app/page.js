import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login"> Go to Admin dashboard 
        username = Admin , password = password , <span style={{color: "red"}}> cick here </span>
       </Link>
       <p>
        and create .env.local and put your mongourl <span style={{coler: "pink"}}> check a api and and lib files and put your database name and your-collection-name and instal packeges </span>
       </p>
    </div>
  );
}
