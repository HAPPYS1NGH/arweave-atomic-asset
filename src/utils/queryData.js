import { queryGQL } from "arweavekit/graphql"

export async function getQueryData(txId) {
  const query = `
	query{
				transaction(id: "${txId}" ) {
				  tags{
					name
					value
				  }
				   data{
					size
					type
				  }
			  }
			  }
	`
  try {
    const res = await queryGQL(query, {
      gateway: "arweave.net",
      filters: {},
    })
    return res.data.transaction
  } catch (err) {
    console.log(err)
  }
}

export async function getAtomicAssetData(txArray) {
  console.log("txArray")
  console.log(txArray)
  try {
    const query = `
    query getTxns($ids: [ID!]) {
        transactions(first: 100, ids: $ids) {
            edges {
                node {
                    id
                    tags {
                        name
                        value
                    }
                }
            }
        }
    }
`

    const response = await queryGQL(query, {
      gateway: "arweave.net",
      filters: {
        ids: txArray,
      },
    })
    console.log("response")
    console.log(response.data.transactions.edges)
    const data = response.data.transactions.edges
    const proceseedData = {}
    data.map((item) => {
      const id = item.node.id
      const tags = item.node.tags
      const tagsObj = {}
      tags.map((tag) => {
        tagsObj[tag.name] = tag.value
      })
      proceseedData[id] = tagsObj
    })
    console.log("proceseedData")
    console.log(proceseedData)
    return proceseedData
  } catch (err) {
    console.log(err)
  }
}
