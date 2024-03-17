import { Client } from '@elastic/elasticsearch'


  const client = new Client({
    cloud: { id: 'My_deployment:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRkODVlNTM5OGZjN2Q0ZWUyOTVlMWI1Y2RhZmU1MTNlNiQ4MGZlMjdmZjYzMTQ0ZmFlOGQzYjY2MTY0Y2NlNWRlOA==' },
    auth: { apiKey: 'WlBndFNJNEJSbUVaMXJEbE5NOWY6TVVEQ0g1QTZTeTY2R0tBMVV6d3NkUQ==' }
  })


export async function CheckConn() {
  const result = await client.ping()
  console.log(result)
  if (result == true) {
    console.log('Connected to ElasticSearch')
  }
}

export async function indexFile<T>(index: string, document: T) {
  const result = await client.index({
    index,
    body: document
  })
  console.log(result)
}
