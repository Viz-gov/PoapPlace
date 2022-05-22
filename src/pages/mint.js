import Link from 'next/link'

export default function Home() {

  async function mint() {
    const formData = {
      title: 'hey just an example'
      
    }

    fetch('/api/mint-nft', {
      method: 'POST',
      headers: {
        ContentType: 'application/json'
      },
      body: JSON.stringify(formData)
    })

  }
    return (
      <div>
          
        <h1>Mint</h1>
        <Link href="/">back home</Link>
        <button onClick={mint}>Send mint information</button>
        <form action="/api/mint-nft" method="post">
            <label htmlFor="first"> Upper Text</label>
            <input type="text" id="upper text" name="upper text" required />

            <label htmlFor="last">Bottom Text</label>
            <input type="text" id="bottom text" name="bottom text" required />

            <button type="submit">Submit</button>
        </form>
        <form action="/api/mint-nft" method="post">
            <label htmlFor="Color"> Color</label>
            <input type="color" id="Color" name="Color" required />

            <label htmlFor="Background">Background</label>
            <input type="image" id="background" name="background" required />

            <button type="submit">Submit</button>
        </form>
      </div>

    )
  }