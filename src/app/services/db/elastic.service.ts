import { Injectable } from '@angular/core';
import { Client } from '@elastic/elasticsearch'
import { estypes } from '@elastic/elasticsearch'
import { estypesWithBody } from '@elastic/elasticsearch'

const client = new Client({
  cloud: { id: 'dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJGQ4NWU1Mzk4ZmM3ZDRlZTI5NWUxYjVjZGFmZTUxM2U2JDgwZmUyN2ZmNjMxNDRmYWU4ZDNiNjYxNjRjY2U1ZGU4' },
  auth: { apiKey: 'WF9nYlNJNEJSbUVaMXJEbFZjX3M6MUQ2QWk1ZXpTUmE1aE54Q1p4MnJqZw==' }
})

@Injectable({
  providedIn: 'root'
})
export class ElasticService {

  constructor() { }
}


