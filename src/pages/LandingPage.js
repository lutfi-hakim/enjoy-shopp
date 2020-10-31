import React, { Component } from 'react'

import Header from "parts/Header";
import Hero from 'parts/Hero';
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

import landingPage from "json/LandingPage.json";

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero {...this.props}></Hero>
                <MostPicked data={landingPage.mostPicked} />
                <Categories data={landingPage.categories} />
            </>
        )
    }
}
