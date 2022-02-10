import { BeerType } from './component/beer/Beer'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/'
})


interface ServerData {
  getAll: (page:number) => Promise<BeerType[]>
}

const Server = (): ServerData => {

  async function getAll(page:number): Promise<BeerType[]> {
    return api.get(`beers?page=${page}`).then(e => e.data)
  }

  return { getAll }
}

export type { BeerType }
export { Server }