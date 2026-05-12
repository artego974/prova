import bcrypt from "bcrypt"

async function gerar() {
  const hash = await bcrypt.hash("12345", 10)
  console.log(hash)
}

gerar()