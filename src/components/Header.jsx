import '../App.css'

export default function Header() {
  return (
    <nav className="wrapper">
      <div className="logo"><a href=''>ReFood</a></div>
      <div className="menu">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="ulasan.html">Ulasan</a></li>
          <li><a href="about.html">Tentang Kami</a></li>
        </ul>
      </div>
    </nav>
  )
}
