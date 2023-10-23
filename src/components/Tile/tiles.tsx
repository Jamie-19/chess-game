import './tiles.css';

interface Props{
    image:string
    number: number
}

export default function Tile({number,image}:Props){
    if(number % 2 === 0){
        return (
        <div className='black-tiles'>
            <img src={image}/>
            </div>
        );    
}   
    else{
        return  (
            <div className='white-tiles'>
                <img src={image}/>
                </div>
            );  
    }
    
}