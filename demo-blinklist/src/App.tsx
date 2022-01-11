import { useState } from "react";
import MyLibraryHeading from "./components/atoms/mylibrary/MyLibraryHeading";
import ReadingTabs from "./components/molecule/ReadingTabs";
import FooterMain from "./components/molecule/footer/footer-main/FooterMain";
import ToolBarHeader from "./components/organism/header/ToolBarHeader";
import ExploreMenu from "./components/molecule/explore-items/explore-grid/ExploreMenu";
import MainBanner from "./components/molecule/banner-items/MainBanner";
import MainSearch from "./components/organism/main/MainSearch";
import Heading from "./components/atoms/headings/Heading";
import EnterprenurReading from "./components/template/EnterprenurReading";
import BookDetailsTabs from "./components/molecule/bookdetailstabs/BookDetailsTabs";
import BookDetailsGrid from "./components/organism/bookdetailsgrid/BookDetailsGrid";
import KeyIdeas from "./components/atoms/bookpagedetails/keyideas/KeyIdeas";
import book1 from "../src/components/atoms/assets/book1.png";
import book2 from "../src/components/atoms/assets/book2.png";
import book3 from "../src/components/atoms/assets/book3.png";
import book4 from "../src/components/atoms/assets/book4.png";
import book5 from "../src/components/atoms/assets/book5.png";
import book6 from "../src/components/atoms/assets/book6.png";
import book7 from "../src/components/atoms/assets/book7.png";
import book8 from "../src/components/atoms/assets/book8.png";
import book9 from "../src/components/atoms/assets/book9.png";
import bookimage from "../src/components/atoms/assets/bookimage.png";




let readingBooks= [{image:bookimage, name:"Beyond Entrepreneurship 2.0", author:"Erica Keswin", time :"13-minute read"},
  {image:book1, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read"},
  {image:book2, name:"Employee to Entrepreneur", author:"Steve Glaveski", time :"15-minute read"},
  {image:book3, name:`Doesn't Hurt to Ask`, author:"Trey Gowdy", time :"13-minute read"},
  {image:book4, name:"The Fate of Food", author:"Amanda Little", time :"12-minute read"},
  {image:book5, name:"Lives of the Stoics", author:"Ryan Holiday, Stephen Hansel", time :"13-minute read"}
];



let finishedBooks = [{image: book6,name: "Loving Your Business",author: "Debbie King",time: "13-minute read",},{image: book7,name: "The Lonely Century",author: "Noreena Hertz",time: "15-minute read",},
  {image: book8,name: "Eat Better, Feel Better",author: "Giada De Laurentiis",time: "13-minute read",},
  {image: book9,name: "Dropshipping",author: "James Moore",time: "12-minute read",},];





function App() {

  const handleFinish=(item:string)=>{
    let temp;
    temp=readingBooks.find((e)=>e.name===item);
    if(temp===undefined){
      temp={image: "",name: "",author: "",time: ""};
    }
    const a=readingBooks.filter(e=>e.name!==item);
    readingBooks=a;
    finishedBooks.push(temp);
    setevisible(!evisible);
  };


  const [visible, setvisible] = useState(false);
  const handleChange = () => {
    setvisible(!visible);
  };

  const [evisible, setevisible] = useState(false);
  const handlePage = () => {
    setevisible(!evisible);
    setvisible(!visible);
  };

  const handleLib=()=>{
    setlibvisible(!libvisible);
  }
  const [libvisible, setlibvisible] = useState(false);

  let comp = visible ? <ExploreMenu handlePage={handlePage} /> : undefined;

  return (
    <div className="App">
      <ToolBarHeader handleChange={handleChange} />
      {comp}

      {evisible ? (
        libvisible ? (
          <>
            <KeyIdeas />
            <BookDetailsGrid handleFinish={handleFinish}/>
            <BookDetailsTabs />
          </>
        ) : (
          <>
            <MainBanner />
            <MainSearch />
            <Heading />
            <EnterprenurReading handleLib={handleLib} />
          </>
        )
      ) : (
        <>
          <MyLibraryHeading />
          <ReadingTabs currentReading={readingBooks} finishedReading={finishedBooks} />
        </>
      )}

      <FooterMain />
    </div>
  );
}

export default App;
