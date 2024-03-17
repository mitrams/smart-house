import { Injectable } from '@angular/core';
import { Client } from '@elastic/elasticsearch'
import { estypes } from '@elastic/elasticsearch'
import { estypesWithBody } from '@elastic/elasticsearch'

export class ESdatabase {
  client: Client
  constructor() {
    this.client = new Client({
      cloud: { id: 'My_deployment:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRkODVlNTM5OGZjN2Q0ZWUyOTVlMWI1Y2RhZmU1MTNlNiQ4MGZlMjdmZjYzMTQ0ZmFlOGQzYjY2MTY0Y2NlNWRlOA==' },
      auth: { apiKey: 'WlBndFNJNEJSbUVaMXJEbE5NOWY6TVVEQ0g1QTZTeTY2R0tBMVV6d3NkUQ==' }
    })
  }
  async CheckConn() {
    const result = await this.client.ping()
    console.log(result)
    if (result == true) {
      console.log('Connected to ElasticSearch')
    }

  }
  async indexFile<T>(index: string, document: T) {
    const result = await this.client.index({
      index,
      body: document
    })
    console.log(result)
  }
}
