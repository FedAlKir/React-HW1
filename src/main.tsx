import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { StrictMode } from 'react'
import { RestaurantsLayout } from './layouts/RestaurantsLayout/RestaurantsLayout'
import { WelcomePage } from './pages/WelcomePage/WelcomePage'
import { RestaurantLayout } from './layouts/RestaurantLayout/RestaurantLayout'
import { Menu } from './components/Menu/Menu'
import { ReviewList } from './components/ReviewList/ReviewList'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Basket } from './components/Basket/Basket'

const root = createRoot(document.getElementById('root')!)
root.render(
    <Provider store={store}>
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
                    <Route path='/basket'>
                        <Route index element={<Basket />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    </Provider>
)