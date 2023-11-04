import React from "react"
import { Route, Routes } from "react-router-dom"
import { LandingPage, Login, Dashboard, SignUp, Welcome, Adventures, MarketplacePage, AuctionPage, ArcadePage, WatchFacePage, WatchRingtonesPage, DashboardUserStats, JoinedAdventure, AuctionHistory, AdventureDetails, AuctionDetail, ArcadeDetail, WatchFacesDetail } from "./index"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<Adventures />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/arcade" element={<ArcadePage />} />
        <Route path="/watch-faces" element={<WatchFacePage />} />
        <Route path="/watch-ringtones" element={<WatchRingtonesPage />} />
        <Route path="/dashboard/content-library" element={<DashboardUserStats library={true} />} />
        <Route path="/dashboard/wishlist" element={<DashboardUserStats wishlist={true} />} />
        <Route path="/dashboard/favourites" element={<DashboardUserStats favourites={true} />} />
        <Route path="/dashboard/joined-campaigns" element={<JoinedAdventure />} />
        <Route path="/dashboard/auction-history" element={<AuctionHistory />} />
        <Route path="/campaigns/:id" element={<AdventureDetails />} />
        <Route path="/auction/:id" element={<AuctionDetail />} />
        <Route path="/arcade/:id" element={<ArcadeDetail />} />
        <Route path="/watch-faces/:id" element={<WatchFacesDetail />} />
      </Routes>

  )
}

export default App
