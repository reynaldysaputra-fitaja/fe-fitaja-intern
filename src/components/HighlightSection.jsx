import '../App.css'
import Card from './Card'

import { useState } from "react";
import CategoryBar from './CategoryBar';

export default function HighlightSection() {
    const [filter, setFilter] = useState("all");
    const products = [
        { 
            id: 1, 
            image:"src/assets/makanan.jpeg",
            title:"Nasi Katsu",
            desc:"Nasi dengan ayam katsunya enak dan bikin kenyang",
            category:"makanan"
        },
        { 
            id: 2, 
            image:'src/assets/snack.jpeg',
            title:'Cimol Pedes Gurih',
            desc:'Dengan cita rasa pedas yang nampol',
            category:'snack'
        },
        { 
            id: 3, 
            image:'src/assets/minuman.jpeg',
            title:'Jus Nipis Asem',
            desc:'Rasa asemnya bikin melek dan seger',
            category:'minuman'
        },
        { 
            id: 4, 
            image:'src/assets/snack2.jpg',
            title:'Udang Timun Fresh',
            desc:'Perpaduan udang dan timun ini sangat cocok',
            category:'snack'
        },
    ];

    const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div>
        <CategoryBar onFilter={setFilter} />

        <div className='card'>
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
        <br/>
            <div className='ads'>
                <h6>Ads</h6>
                <video controls width="600">
                    <source src="/src/assets/video.mp4" type="video/mp4"/>
                </video><br/>
                <audio src="src/assets/audio.mp3" controls></audio>
                <hr/>
            </div>
    </div>
  )
}