import React, { useContext, useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import modalContext from "../../context/modalContext";
import "./AppMenu.css";
const listCategory = [
  {
    title: "Princesse",
    image: "8813.jpg",
    subArticle: [
      {
        title: "Je t'aime",
        ingrediant: "Je t'aime pour tout ce que tu es, tout ce que tu m'apportes, tout ce que l'on sera. C'est à tes côtés que je me sens le mieux. Tu n'imagines pas à quel point, c'est un bonheur de partager la vie à tes côtés. Merci d'être entré dans ma vie.",
      },
    ]
  },
  {
    title: "Princess",
    image: "9766.jpg",
    subArticle: [
      {
        title: "Une éternité avec toi ne me suffira pas…",
        ingrediant: "Quand je t’ai rencontré, j’ai entendu ton éclat de rire et je me suis dit qu’une éternité avec toi ne serait pas suffisante pour apprécier ce bonheur et après ces années ensemble je le confirme encore plus, une éternité ne me suffira pas pour te donner tout mon amour.",
      },
    ]
    
  },

  {
    title: "أميرة ",
    image: "10069.jpg"
  },

  {
    title: "Prinzessin",
    image: "11469.jpg"
  },
  {
    title: "princeps",
    image: "1.jpg"
  },
  {
    title: "principessa",
    image: "2.jpg"
  },
  {
    title: "prens",
    image: "8825.jpg"
  },
  {
    title: "princesa",
    image: "3.jpg"
  },
  {
    title: "księżniczka",
    image: "kk.jpg"
  },
  {
    title: "prenses",
    image: "4.jpg"
  },
  {
    title: "princeps",
    image: "5.jpg"
  },
  {
    title: "princeza",
    image: "hh.jpeg"
  },
  {
    title: "ޕްރިންސަސް",
    image: "6.png"
  },
  {
    title: "princezna",
    image: "7.jpg"
  },
  {
    title: "राज-कुमारी",
    image: "aa.jpg"
  },
  {
    title: "princino",
    image: "bb.jpg"
  },
  {
    title: "puteri",
    image: "cc.jpg"
  }
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
