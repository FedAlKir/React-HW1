interface RestaurantProps{
    name: string;
    onClick: () => void;
}

export const Restaurant: React.FC<RestaurantProps> = ({name, onClick}) => {
    return (
        <button onClick={onClick}>{name}</button>
    );
}