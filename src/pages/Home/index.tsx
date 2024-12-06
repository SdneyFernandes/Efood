import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ItemList from '../../components/ItemList'
import Item from '../../models/Item'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Item[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        'https://fake-api-tau.vercel.app/api/efood/restaurantes'
      )
      const data = response.data

      const formattedData = data.map(
        (item: any) =>
          new Item({
            id: item.id,
            titulo: item.titulo,
            descricao: item.descricao,
            capa: item.capa,
            buttonText: 'Saiba mais',
            destacado: item.destacado ? 'Destaque da Semana' : '',
            tipo: item.tipo,
            avaliacao: item.avaliacao,
          })
      )

      setRestaurants(formattedData)
    } catch (error) {
      console.error('Erro ao buscar os restaurantes:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  return (
    <div>
      <Header variant="home" />
      {loading ? (
        <p className="isloading">Carregando...</p>
      ) : (
        <ItemList items={restaurants} columns={2} variant="home" />
      )}
      <Footer />
    </div>
  )
}

export default Home
