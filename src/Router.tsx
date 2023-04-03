import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { Home } from './pages/Home'
import { OtherPage } from './pages/OtherPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Route>
    </Routes>
  )
}
