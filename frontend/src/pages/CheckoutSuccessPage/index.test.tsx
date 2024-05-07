import { render,screen } from "@testing-library/react"
import CheckoutSuccessPage from "."
import { BrowserRouter } from "react-router-dom"

describe("CheckoutSuccessPage",()=>{
    test("render all components correctly",()=>{
        render(
            <BrowserRouter><CheckoutSuccessPage /></BrowserRouter>)
        expect(screen.getByText("Checkout")).toBeInTheDocument;
    })
})