import "../App.css";
import Card from "./Card";

import { useState } from "react";
import CategoryBar from "./CategoryBar";

import makananImg from "../assets/makanan.jpeg";
import snackImg from "../assets/snack.jpeg";
import minumanImg from "../assets/minuman.jpeg";
import snack2Img from "../assets/snack2.jpg";

export default function HighlightSection() {
  const [filter, setFilter] = useState("all");
  const products = [
    {
      id: 1,
      image: makananImg,
      title: "Nasi Katsu",
      desc: "Nasi dengan ayam katsunya enak dan bikin kenyang",
      category: "makanan",
    },
    {
      id: 2,
      image: snackImg,
      title: "Cimol Pedes Gurih",
      desc: "Dengan cita rasa pedas yang nampol",
      category: "snack",
    },
    {
      id: 3,
      image: minumanImg,
      title: "Jus Nipis Asem",
      desc: "Rasa asemnya bikin melek dan seger",
      category: "minuman",
    },
    {
      id: 4,
      image: snack2Img,
      title: "Udang Timun Fresh",
      desc: "Perpaduan udang dan timun ini sangat cocok",
      category: "snack",
    },
  ];

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="highlight">
      <CategoryBar onFilter={setFilter} />

      <div className="card">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            desc={product.desc}
            category={product.category}
          />
        ))}
      </div>
      <br />
      <div className="ads">
        <h6>Ads</h6>
        <video controls width="600">
          <source src="../assets/video.mp4" type="video/mp4" />
        </video>
        <br />
        <audio src="src/assets/audio.mp3" controls></audio>
        <hr />
      </div>
    </div>
  );
}
