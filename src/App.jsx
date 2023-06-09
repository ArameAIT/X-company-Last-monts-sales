import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Result from './Result'

const Arr = [
  {id : 1,name : "կոշիկ",date: "01.05.2023",count : 24, price : 4000},
  {id : 2,name : "գուլպա",date: "01.05.2023",count : 30, price : 600},
  {id : 3,name : "տաբատ",date: "01.05.2023",count : 30, price : 8700},
  {id : 4,name : "վերնաշապիկ",date: "03.05.2023",count : 20, price : 6000},
  {id : 5,name : "հողաթափ",date: "03.05.2023",count : 20, price : 2300},
  {id : 6,name : "անդրավարտիք",date: "07.05.2023",count : 24, price : 1000},
  {id : 7,name : "գոտի",date: "07.05.2023",count : 10, price : 3000},
  {id : 8,name : "գլխարկ",date: "15.05.2023",count : 20, price : 1500},
  {id : 9,name : "բաճկոն",date: "15.05.2023",count : 10, price : 9900},
  {id : 10,name : "թիկնոց",date: "18.05.2023",count : 10, price : 5509},
  {id : 11,name : "շապիկ",date: "23.05.2023",count : 30, price : 3400},
  {id : 11,name : "վերարկու",date: "23.05.2023",count : 20, price : 15000},
  {id : 11,name : "ձեռնոց",date: "27.05.2023",count : 30, price : 900},
]
let priceResult = 0
let res = Arr.reduce((aggr, el)=>{
   return aggr += (el.count * el.price)
}, 0)
priceResult += res

function App() {

  return (
    <div className='main-container'>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>date</th>
            <th>count</th>
            <th>price</th>
            <th>totalAmount</th>
          </tr>
        </thead>
        <tbody>
          {
            Arr.map((el)=>{
              return <Product key={el.id} id={el.id} name={el.name} date={el.date} count={el.count} price={el.price}/>
            })
          }
          
        </tbody>
        <tfoot>
          <Result priceResult={priceResult}/>
        </tfoot>
      </table>
    </div>
  )
}

export default App
