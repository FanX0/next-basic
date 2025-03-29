import AboutPage from "@/app/about/page";
import AboutLayout from "@/app/about/layout";
import SidebarAbout from "@/app/about/SidebarAbout";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("About Page", () => {
  it("should render", () => {
    const page = render(
      <AboutLayout>
        <SidebarAbout />
        <AboutPage />
      </AboutLayout>
    );
    expect(page).toMatchSnapshot;
  });
});
