import Link from 'next/link';

export default function Home() {
  return (
    <div style={{padding: '20px'}}>
      <h1>This is my main page</h1>

      <p>
        <Link href={{pathname: '/subpage'}}>
          my link with urlobject
        </Link>
      </p>

      <p>
        If I call `http://local.next.fr:3000`,
        I get the error:
      </p>

      <em>
      Warning: Prop `href` did not match. Server: "https://qa.next.fr/subpage" Client: "/subpage"
      </em>

      <p>
        <Link href={'/subpage'}>
          my link with string
        </Link>
      </p>
    </div>
  )
}
