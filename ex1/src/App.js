import Header from "./components/Header/Header";
import MainSection from "./components/MainSection";
import Notice from "./components/Notice";
import MenuSection from "./components/MenuSection";
import styles from "./components/css/default.module.css";
import News from "./components/News";

function App() {

  const menuSection=[
    {
      header: 'Jätteet',
      description:'Rikossyytteessä oleva marjatilayrittäjä siivoaa nyt jätevuorta mailtaan viranomaisen valvonnassa – pian selviää, onko työ tehty oikein'
    },
    {
      header: 'Ihmissuhteet',
      description:'Ihastuitko työtoveriin tai ystävään vaikka olet parisuhteessa? Uuden tutkimuksen mukaan tunteesta voi olla sinulle hyötyä'
    },
    {
      header: 'POGOSTANTAUTI',
      description:'Harvinainen pogostantauti ei ole enää vain Itä-Suomen vitsaus – syynä on runsas hyttys- ja metsäkanalintukesä, kenties myös korona'
    },
    {
      header: 'Valtioiden rajat',
      description:'Rajakivestä löytyi "hymiö", jonka alkuperää ei tiedetä – kyseessä voi olla 300 vuotta vanha ruotsalaisvitsi'
    },
    {
      header: 'HYVYYS',
      description:'Jari Ehrnroothin kolumni: Miksi hyvyyden julistajat kylvävät riitaa?'
    },
    {
      header: 'SYNNYTYS',
      description:'Anniina Liedes, 25, synnytti olohuoneessa, ja tuleva isä sai puhelimessa ohjeen katsoa, näkyykö pää – "Tuli vähän epätodellinen olo: tapahtuiko todella näin?"'
    },
    {
      header: 'NAAPURIRIIDAT',
      description:'Äijä-koiran haukkuminen toi omistajalle tuomion kotirauhan rikkomisesta – poikkeuksellista naapuririitaa käsitellään hovioikeudessa asti'
    }

  ];

  const listNews=[
    {
      img:'test.jpg',
      topic:'HAMPPU',
      title: 'Suomessa alkoi kesällä kevytkannabistuotteen myynti – hampun kukintoa voinee kohta ostaa jopa kivijalkakaupoista, viranomaisen mukaan tuote on laiton',
      text:'Suo­ma­lai­so­mis­ta­jien Virossa toimiva Halfway Crooks on myynyt verk­ko­kaup­pan­sa kautta kä­sit­te­le­mä­tön­tä teol­li­suus­ham­pun kukintoa kesästä lähtien Suomeen. Kuivattua kukintoa on tarkoitus ryhtyä myymään pian myös ki­vi­jal­kakau­pois­sa. Valvovan viranomaisen Fimean mukaan myynti olisi laitonta. ',
      time:'14.9.'
    },
    {
      img:'test.jpg',
      topic:'KANNABIKSEN LAILLISTAMINEN',
      title: 'Vähenisivätkö kannabiksen haitat, ja vapautuisiko poliisin resursseja? Näin asiantuntijat vastaavat kahdeksaan väitteeseen laillistamisen hyödyistä',
      text:'Keskustelu kannabiksen laillistamisen hyödyistä ja haitoista nousi pintaan, kun vihreät ilmoitti sunnuntaina ajavansa aloitetta.',
      time:'14.9.'
    },
    {
      img:'test.jpg',
      topic:'KANSANPERINNE',
      title: 'Ruska karkottaa kalat ja vihreiden lehtien päälle satava lumi viittaa kuolemaan – syksyyn liittyy saamelaisessa perinnetiedossa synkkiä sävyjä',
      text:'Perimätiedon mukaan vasta ruskan jälkeen kala taas liikkuu. Utsjokelainen sääharrastaja Sverre Porsanger kehottaa panemaan merkille, millä tavalla lehti putoaa, sillä siitä voi ennustaa syksyn säätä.',
      time:'14.9.'
    },
    {
      img:'test.jpg',
      topic:'VALAAT',
      title: 'Australiassa iloitaan ryhävalaskannan elpymisestä, yli sadan ryhävalaan liikkeet tallentuivat videolle maan itärannikolla',
      text:'Australiassa oli 1960-luvulla jäljellä enää muutama sata ryhävalasta. Asiantuntijan mukaan maan itärannikolla havaittu lauma tuo lisää toivoa kannan elpymisestä',
      time:'14.9.'
    }
  ]
  return (
  <>
  <div className={styles.container} >
  <Header> </Header>
  <Notice></Notice>
  <div className={styles.body}>

  <div className={styles.content}>
  <div className={styles.mainsection}>
  
  
  
  {listNews.map(element=><News key={element.topic} data={element}/>) }

  </div>
  <div className={styles.menusection}>
  <div style={{fontWeight:'bold', fontSize:'20px'}}>Luetuimmat</div>
  {menuSection.map(element=><MenuSection key={element.header} header={element.header} description={element.description}/>) }
  </div>
  </div>
  </div>
  </div>
  </>
 
  );
}

export default App;
