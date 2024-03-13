import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>

          <a href="#">Acerca de</a>
        </nav>

        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Fernando Trejo Mejía TI03SM-22</h2>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYGaGumhvFzt8TQz9HbhC0sLq9SYDQLJdag&usqp=CAU"
              alt="Perro con orejas de colores "
              width={400}
              height={300} // Agrega la propiedad height aquí
            />
          </div>
        </div>
      </div>
    </main>
  );
}
