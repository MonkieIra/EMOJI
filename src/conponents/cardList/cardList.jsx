import './cardList.css';
import Card from '../card/card';


function CardList({data}) {
    return ( 
        <div class="emojiList">
            <div class="container emojiListContainer">
                {data.map((card)=>{
                    return <Card 
                        symbol={card.symbol}
                        title={card.title}
                        keywords={card.keywords}
                    />
                })}
            </div>
        </div>
     );
}

export default CardList;