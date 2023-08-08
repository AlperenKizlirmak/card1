import './App.css';
import Card from './Card.js';

function App() {
  return (
    <div className="wrapper">
      <Card  
      img="https://cdn.vox-cdn.com/thumbor/OhRgTL232xHKcJsUuEet-w4l2Ns=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23099830/Screen_Shot_2021_12_15_at_3.57.28_PM.png"
      title="Azula"
      description="Azula, Ateş Ulusu'nun bir prensesi, Ateş Lordu Ozai ile Ursa'nın kızı, Zuko'nun küçük kız kardeşi ve Kiyi'nin üvey ablasıdır."
      />
      <Card
      img="https://a-static.besthdwallpaper.com/avatar-the-legend-of-korra-amon-wallpaper-2880x1800-75935_8.jpg"
      title="Amon"
      description= "Noatak olarak doğan Amon, Eşitlikçiler olarak bilinen bükücü karşıtı devrimci bir grubun karizmatik ve gizemli lideriydi."
      />
      <Card
      img="https://i.pinimg.com/originals/bd/b4/d4/bdb4d44c2e702caa5c683ecea2bcb6ee.jpg"
      title="Zaheer"
      description="Zaheer, Beyaz Lotus Düzeni, dört ulus veya Avatar olmadan yeni bir dünyanın kurulmasına şiddetle inanan bir dövüş sanatları uzmanı ve bir anarşist olan Red Lotus'un lideridir."
      />
    </div>
  );
}

export default App;