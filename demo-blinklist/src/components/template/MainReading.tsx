
import CardMui from "../organism/cards/CardMui";

interface Books {
  currentReading: {
    image: string;
    name: string;
    author: string;
    time: string;
  }[];
}

const main = (props:Books) => {
    return <div>
        <CardMui details={props.currentReading} />
    </div>;
}

export default main;