'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('products', [
    {
      image_url: "/assets/camiseta_1.jpg",
      title: "Camisa Palmeiras I 21/22 Torcedor Puma Masculina",
      text: 250.00,
      id: "1",
      category: "camiseta",
    },
    {
      image_url: "/assets/tenis_1.jpg",
      title: "Tênis Nike Lebron Witness V",
      text: 200.00,
      id: "2",
      category: "tenis",
    },
    {
      image_url: "/assets/camiseta_2.jpg",
      title: "Camisa Palmeiras I 21/22 Torcedor Puma Masculina",
      text: 300.00,
      id: "3",
      category: "camiseta",
    },
    {
      image_url: "/assets/blusa_1.jpg",
      title: "Blusa Palmeiras Puma Manga Longa Branca",
      text: 400.00,
      id: "4",
      category: "blusa",
    },
    {
      image_url: "/assets/acessorio_1.jpg",
      title: "Mochila Palmeiras SEP BP 2017/2018",
      text: 500.00,
      id: "5",
      category: "acessorio",
    },
    {
      image_url: "/assets/blusa_2.jpg",
      title: "Blusa Palmeiras Puma Manga Longa Verde",
      text: 410.00,
      id: "6",
      category: "blusa",
    },
    {
      image_url: "/assets/blusa_3.jpg",
      title: "Blusa Moletom Treino Palmeiras Branca Adidas",
      text: 200.00,
      id: "7",
      category: "blusa",
    },
    {
      image_url: "/assets/camiseta_3.jpg",
      title: "Camisa Palmeiras Palestra Pattern Masculina",
      text: 300.00,
      id: "8",
      category: "camiseta",
    },
    {
      image_url: "/assets/acessorio_2.jpg",
      title: "Mala Puma Palmeiras Liga Medium",
      text: 400.00,
      id: "9",
      category: "acessorio",
    },
    {
      image_url: "/assets/camiseta_4.jpg",
      title: "Camisa Palmeiras 1996 Retrô - Verde",
      text: 500.00,
      id: "10",
      category: "camiseta",
    },
    {
      image_url: "/assets/bermuda_1.jpg",
      title: "Bermuda Palmeiras Adidas Treino Masculina",
      text: 80.00,
      id: "11",
      category: "bermuda",
    },
    {
      image_url: "/assets/bermuda_2.jpg",
      title: "Bermuda Palmeiras Microfibra Masculina",
      text: 80.00,
      id: "12",
      category: "bermuda",
    },
  ], {}),
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
