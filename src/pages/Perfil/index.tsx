import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ItemList from '../../components/ItemList'
import Item from '../../models/Item'
import Modal from '../../components/Modal'

import Cart from '../../components/Cart'

const Categories = () => {
  const { id } = useParams<{ id: string }>()
  const [menuItems, setMenuItems] = useState<Item[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [restaurantInfo, setRestaurantInfo] = useState({
    nome: '',
    tipo: '',
    capa: '',
  })
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [isCartOpen, setCartOpen] = useState<boolean>(false)

  const fetchMenu = async () => {
    try {
      const response = await axios.get(
        'https://fake-api-tau.vercel.app/api/efood/restaurantes'
      )
      const data = response.data

      const restaurant = data.find(
        (restaurante: any) => restaurante.id === parseInt(id || '0')
      )

      if (restaurant) {
        setRestaurantInfo({
          nome: restaurant.titulo,
          tipo: restaurant.tipo,
          capa: restaurant.capa,
        })

        const formattedData = restaurant.cardapio.map(
          (item: any) =>
            new Item({
              id: item.id,
              titulo: item.nome,
              descricao: item.descricao,
              capa: item.foto,
              buttonText: 'Mais detalhes',
              porcao: item.porcao,
              preco: item.preco,
            })
        )
        setMenuItems(formattedData)
      }
    } catch (error) {
      console.error('Erro ao buscar os dados do cardápio:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleItemClick = (item: Item) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedItem(null)
  }

  const toggleCart = () => {
    setCartOpen(!isCartOpen)
  }

  useEffect(() => {
    fetchMenu()
  }, [id])

  return (
    <div>
      <Header variant="categories" onCartClick={toggleCart} />
      <Hero
        capa={restaurantInfo.capa}
        titulo={restaurantInfo.nome}
        tipo={restaurantInfo.tipo}
      />
      {loading ? (
        <p className="isloading">Carregando...</p>
      ) : (
        <ItemList
          items={menuItems}
          columns={3}
          variant="categories"
          onItemClick={handleItemClick}
        />
      )}
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={
          selectedItem
            ? {
                id: selectedItem.id,
                capa: selectedItem.capa,
                titulo: selectedItem.titulo,
                descricao: selectedItem.descricao,
                porcao: selectedItem.porcao || '',
                preco: selectedItem.preco || 0,
              }
            : null
        }
      />
      <Cart isOpen={isCartOpen} onClose={toggleCart} />{' '}
    </div>
  )
}

export default Categories
