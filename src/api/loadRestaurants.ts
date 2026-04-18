export const loadRestaurants = async () => {
  const response = await fetch("http://localhost:3000/restaurants");
  return response.json();
};