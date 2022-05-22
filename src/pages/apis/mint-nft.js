// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    // Savi's got here to mint the nft based on incoming data

    const data = JSON.parse(req.body)
    console.log(data)

    // once minted successfully return true (or false if fail, of object with error message etc)
    res.status(200).send(true)
  }