import React, { useContext, useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import modalContext from "../../context/modalContext";
import "./AppMenu.css";
const listCategory = [
  {
    title: "Pates",
    image: "pate.jpg",
    subArticle: [
      {
        title: "Spaghetti bolognaise",
        prix: 14
      },
      {
        title: "Tagliatelles aux saumons",
        ingrediant: "           Sauce blanche",
        prix: 18
      },
      {
        title: "Tagliatelles aux poulets",
        ingrediant: "           Sauce rouge",
        prix: 15
      },
      {
        title: "Spaghetti 4 fromages",
        prix: 15
      },
      {
        title: "Spaghetti Fruit de mer",
        prix: 24
      },
      {
        title: "Raviolli",
        prix: 13
      },
      {
        title: "Lasagne",
        prix: 12
      }
    ]
  },

  {
    title: "Desserts",
    image: "dessert.jpeg",
    subArticle: [
      {
        title: "Assiette de fruits",
        prix: 8
      },
      {
        title: "3 Boules de glace",
        prix: 6
      },
      {
        title: "Tiramisu",
        prix: 5
      },
      {
        title: "Café express",
        prix: 2.5
      },
      {
        title: "Boisson",
        prix: 2.5
      },
      {
        title: "Boisson énergitique",
        prix: 6
      },
      {
        title: "Eau 1L",
        prix: 2
      },
      {
        title: "Eau 0.5L",
        prix: 1
      }
    ]
  },

  {
    title: "Pizza",
    image: "piza.jpeg",
    subArticle: [
      {
        title: "Pizza Margherita",
        ingrediant: "Sauce, Fromage, Olive",
        prix: 9
      },
      {
        title: "Pizza Neptune",
        ingrediant: "Sauce tomate, Fromage, Olive, Oignon",
        prix: 12
      },
      {
        title: "Pizza Indienne",
        ingrediant: "Sauce à la créme, Oignon, Fromage, Champignon, Jombon fumé",
        prix: 13
      },
      {
        title: "Pizza Pepperoni",
        ingrediant: "Sauce tomate, Pepperoni, Fromage, Olive",
        prix: 11
      },
      {
        title: "Pizza 4 Saison",
        ingrediant: "Sauce tomate, Légume, Fromage, Olive",
        prix: 13
      },
      {
        title: "Pizza 4 Fromage",
        ingrediant: "Sauce Fromage ou Sauce Rouge, Gruyère, Roquefort, Cheddar",
        prix: 16
      },
      {
        title: "Pizza Toscana",
        ingrediant: "Sauce Rouge, Viande hachés, champignon, Olive, Poivre, Oignon",
        prix: 15
      },
      {
        title: "Pizza Poulet",
        ingrediant: "Sauce à la créme, Poulet, Fromage, Oignon, Olive",
        prix: 13
      },
      {
        title: "Pizza Caraibes",
        ingrediant: "Sauce rouge, Poulet panées, Fromage, Tomate fraiche, Olive",
        prix: 14
      },
      {
        title: "Pizza Fruit de mer",
        ingrediant: "Sauce rouge, Crevette, Calamar, Moule, Fromage, Olive",
        prix: 20
      },
      {
        title: "Why Not !",
        ingrediant: "Double pate , Escalope Pané, Jambon Peperoni,Champigon, Thon, Sauce, Créme légumes sauté , Olive",
        prix: 22
      }
    ]
  },
  {
    title: "Entrees Froides",
    image: "entree_froide.jpg",
    subArticle: [
      {
        title: "Salade tunisienne",
        prix: 6
      },
      {
        title: "Salade césare",
        ingrediant: "         4 fromage",
        prix: 10
      },
      {
        title: "Hors d'oeuvre",
        prix: 9
      }
    ]
  },

  {
    title: "Entrees Chaudes",
    image: "entree_chade.jpg",
    subArticle: [
      {
        title: "Brike à l'oeuf",
        prix: 4
      },
      {
        title: "Brik aux chevrettes",
        prix: 6
      },
      {
        title: "Brik thon",
        prix: 5
      },
      {
        title: "Soupe chevrette",
        prix: 7
      },
      {
        title: "Calamar doré sauce tartare",
        prix: 10
      },
      {
        title: "Chevrette sautés à l'ail",
        prix: 12
      },
      {
        title: "Moule à la provençale",
        prix: 8
      }
    ]
  },

  {
    title: "Ojja",
    image: "ojja.jpg",
    subArticle: [
      {
        title: "Ojja merguez",
        prix: 13
      },
      {
        title: "Ojja chevrettes",
        prix: 16
      },
      {
        title: "Ojja Fruits de mer",
        prix: 20
      }
    ]
  },
  {
    title: "Plat Viande",
    image: "viande.jpeg",
    subArticle: [
      {
        title: "Grillade mixte",
        prix: 28
      },
      {
        title: "Filet boeuf sauce champignon",
        prix: 27
      },
      {
        title: "Filet boeuf sauce 5 poivres",
        prix: 26
      },
      {
        title: "Parfait de foie caramélisé",
        prix: 23
      },
      {
        title: "Emincé boeuf à la stroganoff",
        prix: 25
      },
      {
        title: "Agneaux à la gargoulette",
        prix: 40
      },
      {
        title: "Garnitures aux choix",
        ingrediant:"aa, bbbbbbbbbb, cccccccccc"
      }
    ]
  },
  {
    title: "Makloub",
    image: "makloub.jpg",
    subArticle: [
      {
        title: " thon",
        prix: 6
      },
      {
        title: " escalope grillés",
        prix: 7
      },
      {
        title: " panés",
        prix: 8
      },
      {
        title: " jambon",
        prix: 6
      },
      {
        title: " viande",
        prix: 10
      },
      {
        title: " chevrette",
        prix: 10
      },
      {
        title: " WHY NOT !",
        ingrediant: " Sauce fromage, Jambon",
        prix: 12
      }
    ]
  },
  {
    title: "Baguette Farcie",
    image: "baguet.jpg",
    subArticle: [
      {
        title: " thon",
        prix: 7
      },
      {
        title: " escalope grillés",
        prix: 8
      },
      {
        title: " panés",
        prix: 9
      },
      {
        title: " jambon",
        prix: 7
      },
      {
        title: " viande",
        prix: 11
      },
      {
        title: " chevrette",
        prix: 11
      },
      {
        title: " WHY NOT !",
        ingrediant: " Sauce fromage, Jambon",
        prix: 13
      }
    ]
  },
  {
    title: "Tacos",
    image: "tacos.jpeg",
    subArticle: [
      {
        title: " escalope grillés",
        prix: 8
      },
      {
        title: " escalope panés",
        prix: 9
      },
      {
        title: " Cordon bleu",
        prix: 10
      },
      {
        title: " viande",
        prix: 11
      },
      {
        title: " merguez",
        prix: 9
      },
      {
        title: " Pepperoni",
        prix: 8
      },
      {
        title: " Chevrette",
        prix: 11
      },
      {
        title: " WHY NOT !",
        prix: 13
      }
    ]
  },
  {
    title: "Burger",
    image: "burger.jpg",
    subArticle: [
      {
        title: "Burger Beef",
        prix: 8
      },
      {
        title: "Big Burger Beef",
        prix: 10
      },
      {
        title: "Burger Chicken",
        prix: 7
      },
      {
        title: "Big Burger Chicken",
        prix: 9
      },
      {
        title: "Cheese Beef",
        prix: 9
      },
      {
        title: "Big Cheese Beef",
        prix: 10
      },
      {
        title: "Cheese Chicken",
        prix: 9
      },
      {
        title: "Burger WHY NOT !",
        prix: 12
      }
    ]
  },
  {
    title: "Libanais",
    image: "libanai.jpg",
    subArticle: [
      {
        title: "Thon",
        prix: 6
      },
      {
        title: " escalope grillés",
        prix: 7
      },
      {
        title: " panés",
        prix: 8
      },
      {
        title: " jambon",
        prix: 6
      },
      {
        title: " viande",
        prix: 10
      },
      {
        title: " chevrette",
        prix: 10
      },
      {
        title: " WHY NOT !",
        ingrediant: " Sauce fromage, Jambon",
        prix: 12
      }
    ]
  },
  {
    title: "Panini",
    image: "panini.jpeg",
    subArticle: [
      {
        title: "Escalope grillés",
        prix: 6
      },
      {
        title: "Escalope panés",
        prix: 7
      },
      {
        title: "Viande",
        prix: 9
      },
      {
        title: "CHevrette",
        prix: 9
      }
    ]
  },
  {
    title: "Plan B",
    image: "planb.jpg",
    subArticle: [
      {
        title: "Escalope grillés",
        prix: 10
      },
      {
        title: "Escalope panés",
        prix: 10
      },
      {
        title: "Viande",
        prix: 12
      },
      {
        title: "Chevrette",
        ingrediant: " Fromage à raclette",
        prix: 12
      }
    ]
  },
  {
    title: "Pilote",
    image: "pilote.jpeg",
    subArticle: [
      {
        title: "Pilote",
        prix: 11
      },
      {
        title: "Pilote WHY NOT !",
        ingrediant: "Escalope panés amandes",
        prix: 14
      }
    ]
  },
  {
    title: "Plat Poisson",
    image: "poisson.jpg",
    subArticle: [
      {
        title: "Daurade grillés",
        prix: 20
      },
      {
        title: "Loup grillés",
        prix: 23
      },
      {
        title: "Filet Daurade pané sauce à l'ail",
        prix: 223
      },
      {
        title: "Filet Loup pané sauce à l'ail",
        prix: 26
      },
      {
        title: "Fruits de mer à la gargoulette",
        prix: 38
      },
      {
        title: "Synphonie WHY NOT !",
        ingrediant: " Daurade, Loup, Sauce Rouge, Chevrette, Calamar, Crevette",
        prix: 75
      }
    ]
  },
  {
    title: "Plat Volaille",
    image: "volaille.jpg",
    subArticle: [
      {
        title: "Escalope pané aux amandes",
        prix: 16
      },
      {
        title: "Escalope grillés",
        prix: 12
      },
      {
        title: "Emincé d'escalope sauce champignon",
        prix: 15
      },
      {
        title: "Cuisse de poulet grillées",
        prix: 10
      },
      {
        title: "Cailles grillées",
        prix: 16
      },
      {
        title: "Emincé d'escalope sauce rouge",
        prix: 13
      },
      {
        title: "Escalope cordon bleu",
        prix: 18
      }
    ]
  },
  {
    title: "Crèpe Sucré",
    image: "crepe_sucre.jpeg",
    subArticle: [
      {
        title: "Nutellae Supréme",
        ingrediant: "Nutelle, Mousline, Noisette, Ferrero rocher",
        prix: 8
      },
      {
        title: "Scickers",
        ingrediant: "Nutelle, mousline, Beure de cacahuète, Caramel, Cacahète",
        prix: 11
      },
      {
        title: "Tutti Frutti",
        ingrediant: "Nutelle, Chantilly, 3 Fruits de saison, Mousline",
        prix: 11
      },
      {
        title: "Banane split",
        ingrediant: "Nutelle, Chantilly, Bananes, Mousline, Amandes",
        prix: 10
      },
      {
        title: "Pistachio",
        ingrediant: "Nutelle, Créme de pistache, Pistache Concassee",
        prix: 12
      },
      {
        title: "Choco WHY NOT !",
        ingrediant: "Nutelle, Chocolat blanche, Milka, Oréo, Kinder, Beurre caramel, Beure biscuit",
        prix: 14
      }
    ]
  },
  {
    title: "Crèpe Salé",
    image: "crepe_sale.jpg",
    subArticle: [
      {
        title: "Mistral",
        ingrediant: "Thon, Mozza, Sauce piquante, Tomate",
        prix: 8
      },
      {
        title: "Sicile",
        ingrediant: "Jambon de Boeuf fumé, Gruyère, Sauce légumes",
        prix: 9
      },
      {
        title: "Bombay",
        ingrediant: "Escalope, Gruyère, Champignon, légumes",
        prix: 12
      },
      {
        title: "Pizza",
        ingrediant: "Thon, Mozza, Sauce , Olive noir",
        prix: 9
      },
      {
        title: "4 Fromage",
        ingrediant: "Mozza, Gruyère, Roquefort, Mozza arbi",
        prix: 12
      },
      {
        title: "WHY NOT !",

        prix: 14
      }
    ]
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
