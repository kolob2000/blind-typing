import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./Components/Layout.jsx";
import {Main} from "./Components/index.js";
import {ErrorPage} from "./Components/index.js";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Main/>,
                },
                {
                    path: "*",
                    element: <ErrorPage/>,
                }
            ]
        },
    ]);
    return (
        <RouterProvider router={router}/>


    )
}

export default App
