interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
    AAa: (item: string) =>void;
    handleAdd: (event: React.FormEvent) => void;
}
import { useState } from "react";

function ListGrup({items, heading, onSelectItem, AAa, handleAdd}: Props) {
// Hook : vol dir que te dades que poden canviar tota l'estona
const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
        <h1>{heading}</h1>
        <form >
        <input type="text" placeholder="Introdueix el que has de fer" />
        <button onClick={handleAdd} type="submit">Afagir</button>
        </form>
        {items.length === 0 && <p>Items not found</p>} 
        <ul className="list-group">
            {items.map((item, index) => (
            <li 
                className={ /*selectedIndex === index ? 'list-group-item ': */'list-group-item'} 
                key={item} 
                onClick={() => {
                    setSelectedIndex(index);
                    /*onSelectItem(item)*/
                    AAa(item);
                }} 
            >
            {item}
                </li>
            ))}
        </ul>
    </>
    );
}

export default ListGrup;
