import { Routes, Route } from 'react-router-dom'
import { Home, About, Skills, Projects, Contact } from '../page/index.js'
import RootLayout from '../layout/RootLayout.js';

function Router() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default Router;