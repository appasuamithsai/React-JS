import CardMui from "./components/organism/CardMui";
import book1 from "./components/assets/book1.png";
import book2 from "./components/assets/book2.png";
import book3 from "./components/assets/book3.png";
import book4 from "./components/assets/book4.png";
import book5 from "./components/assets/book5.png";
import book6 from "./components/assets/book6.png";
import book7 from "./components/assets/book7.png";
import book8 from "./components/assets/book8.png";
import book9 from "./components/assets/book9.png";

const books= [
  {image:book1, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read"},
  {image:book2, name:"Employee to Entrepreneur", author:"Steve Glaveski", time :"15-minute read"},
  {image:book3, name:`Doesn't Hurt to Ask`, author:"Trey Gowdy", time :"13-minute read"},
  {image:book4, name:"The Fate of Food", author:"Amanda Little", time :"12-minute read"},
  {image:book5, name:"Lives of the Stoics", author:"Ryan Holiday, Stephen Hansel", time :"13-minute read"},
  {image:book6, name:"Loving Your Business", author:"Debbie King", time :"13-minute read"},
  {image:book7, name:"The Lonely Century", author:"Noreena Hertz", time :"15-minute read"},
  {image:book8, name:"Eat Better, Feel Better", author:"Giada De Laurentiis", time :"13-minute read"},
  {image:book9, name:"Dropshipping", author:"James Moore", time :"12-minute read"}
];


function App() {
 
  return (
    <div> 
      <CardMui details={books} />
    </div>
  );
}

export default App;




