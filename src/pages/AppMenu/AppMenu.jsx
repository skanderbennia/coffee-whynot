import React, { useContext, useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import modalContext from "../../context/modalContext";
import "./AppMenu.css";
const listCategory = [
  { title: "Pates", image: "pate.jpg" },
  { title: "Desserts", image: "dessert.jpeg" },
  {
    title: "Pizza",
    image: "piza.jpeg",
    subArticle: [
      {
        title: "Pizza Neptune",
        ingrediant: "Sauce,Fromage,Olive",
        prix: 10
      },
      {
        title: "Pizza Margherita",
        ingrediant: "Sauce,Fromage,Olive",
        prix: 10
      },
      {
        title: "Pizza Indienne",
        ingrediant: "Sauce,Fromage,Olive",
        prix: 20
      },
      {
        title: "Pizza 4 Saison",
        ingrediant: "Sauce,Fromage,Olive",
        prix: 20
      },
      {
        title: "Pizza 4 Fromage",
        ingrediant: "Double pate , Escalope Pané, Jambon Peperoni,Champigon, Thon, Sauce, Créme légumes sauté , Olive",
        prix: 50
      }
    ]
  },
  { title: "Entrees Froides", image: "entree_froide.jpg" },
  { title: "Entrees Chaudes", image: "entree_chade.jpg" },
  { title: "Ojja", image: "ojja-tunisienne.jpeg" },
  { title: "Plat Viande", image: "viande.jpeg" },
  { title: "Makloub", image: "makloub.jpg" },
  { title: "Baguette Farcie", image: "dessert.jpeg" },
  { title: "Tacos", image: "tacos.jpeg" },
  { title: "Burger", image: "burger.jpg" },
  { title: "Libanais", image: "Libanais.png" },
  { title: "Panini", image: "panini.jpeg" },
  { title: "Plan B", image: "sandawich.jpg" },
  { title: "Pilote", image: "pilote.jpeg" },
  { title: "Plat Poisson", image: "poisson.jpg" },
  { title: "Plat Volaille", image: "volaille.jpg" },
  { title: "Crèpe Sucré", image: "crepe_sucre.jpeg" },
  { title: "Crèpe Salé", image: "crepe_sale.jpg" }
];
const host = window.location.href;
function AppMenu() {
  const { setModalInformation } = useContext(modalContext);
  console.log(setModalInformation);
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true);
    }, 2000);
  }, []);

  return (
    <div>
      {!loadingPage && (
        <div
          style={{
            display: "flex",
            position: "absolute",
            zIndex: 20,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "grey"
          }}
        >
          <img height={150} width={250} src={host + "/assets/images/logo.png"} alt={"logo"} />
          <Loader />
        </div>
      )}
      <Navbar />
      <div className=" appMenu container grid">
        {listCategory.map((elem) => {
          return (
            <Article
              title={elem.title}
              image={host + "assets/images/categories/" + elem.image}
              onClick={() => {
                setModalInformation({ title: elem.title, subArticle: elem.subArticle });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AppMenu;
