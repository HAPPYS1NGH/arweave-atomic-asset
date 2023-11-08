export default async function getTransactionData(txId) {
  try {
    const response = await fetch(`https://arweave.net/${txId}/data`)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
