import { mock } from 'mockjs';

mock('http://localhost:8080/api/entries',()=>{
  return require('./json/home/entries.json')
})