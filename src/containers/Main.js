import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import Footer from "../components/footer/Footer"
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";


export default function Main(propss) {
    return (
        <Router>
          <main className="py-3">
            <Container>
            <Route
              path="/"
              exact
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            </Container>
          </main>
          <Footer theme={propss.theme} />
        </Router>
      )
}
