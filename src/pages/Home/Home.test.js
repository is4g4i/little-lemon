import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

// Mock the section components
jest.mock("../../componentsHero/Hero", () => () => <div data-testid="hero-section"></div>);
jest.mock("../../components/Specials/Specials", () => () => <div data-testid="specials-section"></div>);
jest.mock("../../components/Testimonials/Testimonials", () => () => <div data-testid="testimonials-section"></div>);
jest.mock("../../components/About/About", () => () => <div data-testid="about-section"></div>);

describe("Home component", () => {
  test("renders the Hero, Specials, Testimonials, and About Components", () => {
    render(<Home />);

    // Check if the Hero section is rendered
    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();

    // Check if the Specials section is rendered
    const specialsSection = screen.getByTestId("specials-section");
    expect(specialsSection).toBeInTheDocument();

    // Check if the Testimonials section is rendered
    const testimonialsSection = screen.getByTestId("testimonials-section");
    expect(testimonialsSection).toBeInTheDocument();

    // Check if the About section is rendered
    const aboutSection = screen.getByTestId("about-section");
    expect(aboutSection).toBeInTheDocument();
  });
});
