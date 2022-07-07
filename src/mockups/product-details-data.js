var date = new Date();
const productList = [
  {
    name: "Joomra Whitin Men's Supportive Running Shoes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 100,
    score: 4,
    image: "images/shoes/shoe-1.jpg",
    currency: "$",
    slug: "product-1",
    date: date.setDate(date.getDate() + 1),
    totalComments: 2,
  },
  {
    name: "Converse Women's Chuck Taylor All Star Lift Sneakers",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 200,
    score: 3,
    image: "images/shoes/shoe-2.jpg",
    currency: "€",
    slug: "product-2",
    date: date.setDate(date.getDate() + 1),
    totalComments: 2,
  },
  {
    name: "Nike Men's Court Legacy Gymnastics Shoe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 350,
    score: 5,
    image: "images/shoes/shoe-3.jpg",
    currency: "€",
    slug: "product-3",
    date: date.setDate(date.getDate() + 1),
    totalComments: 2,
  },
  {
    name: "Women's Slip on Shoes Fashion",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 150,
    score: 2,
    image: "images/shoes/shoe-4.jpg",
    currency: "$",
    slug: "product-4",
    date: date.setDate(date.getDate() + 1),
    totalComments: 2,
  },
  {
    name: "Amazon Essentials Women's Water Shoe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 100,
    score: 3,
    image: "images/shoes/shoe-5.jpg",
    currency: "$",
    slug: "product-5",
    date: date.setDate(date.getDate() + 1),
    totalComments: 2,
  },
];
export default productList;
