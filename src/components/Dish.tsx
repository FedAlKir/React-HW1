export interface DishProps{
    id: string;
    name: string;
    price: Number;
    ingredients: [string];
}

export const Dish: React.FC<DishProps> = ({name, price, ingredients}) => {
    return (
        <div>
            <h4>{`Name: ${name}`}</h4>
            <p>{ingredients}</p>
            <p>{`Price: ${price}`}</p>
        </div>
    );
}