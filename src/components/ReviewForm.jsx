import '../App.css'
import { useState } from "react";

export default function ReviewForm() {
    const [review, setReview] = useState({
        category: "makanan",
        title:"",
        rate:"",
        date:"",
        desc:"",
        image: null
    });

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
            setReview ((prev) => ({
                ...prev,
                [name]: 
                type === "file"
                ? files[0]
                : value
            }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Review: ", review);

        if (review.image) {
            console.log("Foto:", review.image.name);
        }

        setReview({
            category: "makanan",
            title:"",
            rate:"",
            date:"",
            desc:"",
            image: null
  });
    }

    return(
        <div className='reviewform'>
            <h2>Tulis Review</h2>
            <h4>Kirim review kamu untuk membantu banyak orang!</h4>

            <form onSubmit={handleSubmit} className="review" id="review" action="" method="post" encType="multipart/form-data"
            >
                <div className="form">
                    <label for="kategori">Kategori apa yang ingin kamu ulas?</label><br/>
                    <select id="kategori" name="category" value={review.category} onChange={handleChange}>
                        <option value="makanan">Makanan</option>
                        <option value="minuman">Minuman</option>
                        <option value="snack">Snack</option>
                    </select><br/>
                </div>

                <div className="form">
                    <label for="nama">Apa namanya?</label><br/>
                    <input type="text" id="nama" name="title" value={review.title} onChange={handleChange}/>
                </div>

                <div className="form">
                    <label for="rate">Berapa penilaianmu?</label><br/>
                    <input type="number" id="rate" name="rate" value={review.rate} onChange={handleChange}/>
                </div>

                <div className="form">
                    <label for="tanggal">Kapan kamu memakannya?</label><br/>
                    <input type="date" id="tanggal" name="date" value={review.date} onChange={handleChange}/><br/>
                </div>

                <div className="form">
                    <label for="ulasan">Bagaimana ulasanmu?</label><br/>
                    <textarea id="ulasan" name="desc" rows="4" cols="50" value={review.desc} onChange={handleChange}></textarea>
                </div>

                <div className="form">
                    <label for="foto">Tambahkan foto</label><br/>
                    <input type="file" id="foto" name="image" accept="image/*" onChange={handleChange}/>
                </div>

                <button type="submit">Kirim ulasan</button>
            </form>

            <aside>
                <h4>Tips Menulis</h4>
                <p>Gunakan kata-kata deskriptif, misalnya gurih, creamy, segar, dan sebagainya.</p>
            </aside>
        </div>
    )
}