import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Stats from '../pages/Stats';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;