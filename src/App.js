import "./index.css";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import Home from "./Main-folder/Home";
import Product1 from "./Main-folder/bundleNo1";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: '/Black-Pearl', element: <Product1/>},
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
