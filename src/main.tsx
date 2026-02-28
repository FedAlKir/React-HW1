import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { StrictMode } from 'react'
import { RestaurantsLayout } from './layouts/RestaurantsLayout/RestaurantsLayout'
import { WelcomePage } from './pages/WelcomePage/WelcomePage'
import { RestaurantLayout } from './layouts/RestaurantLayout/RestaurantLayout'
import { Menu } from './components/Menu/Menu'
import { ReviewList } from './components/ReviewList/ReviewList'

const root = createRoot(document.getElementById('root')!)
root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<WelcomePage />} />
                <Route path='/restaurants' element={<RestaurantsLayout />}>
                    <Route index element={<p>Choose restaurant</p>} />
                    <Route path=':id' element={<RestaurantLayout />} >
                        <Route index element={<Menu />} />
                        <Route path="reviews" element={<ReviewList />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)