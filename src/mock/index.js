import { mock } from 'mockjs';

mock('http://localhost:8080/api/entries',()=>{
  return require('./json/home/entries.json')
})

mock('http://localhost:8080/api/restaurants',()=>{
  return require('./json/home/restaurants.json')
})

mock('http://localhost:8080/api/detail',()=>{
  return require('./json/detail/shop.json')
})