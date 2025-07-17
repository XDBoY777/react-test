const products = Array.from({ length: 30 }, (_, index) => {
  const id = index + 1;
  return {
    id,
    name: `CyberPhone ${id}`,
    price: Math.floor(Math.random() * 900) + 100, // 100-999 közötti ár
    image: `https://dummyimage.com/150x150/000/fff&text=CyberPhone+${id}`,
    description: "Futuristic smartphone with cutting-edge technology.",
    keyFeatures: [
      { name: "Screen", value: "6.5 inch OLED" },
      { name: "Battery", value: "5000mAh" },
      { name: "Camera", value: `${Math.floor(Math.random() * 50) + 12}MP` },
      {
        name: "Storage",
        value: `${[64, 128, 256, 512][Math.floor(Math.random() * 4)]}GB`,
      },
      { name: "Weight", value: `${Math.floor(Math.random() * 200) + 100}g` },
    ],
  };
});

export default products;
