import React from 'react'
import Gastos from '../components/gastos/Gastos'
import Ingresos from '../components/ingresos/Ingresos'
import Ahorros from '../components/ahorros/Ahorros'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Gastos />
        </div>
        <div className="col">
          <Ingresos />
        </div>
        <div className="col">
          <Ahorros />
        </div>
      </div>
    </div>
  )
}

export default Home
