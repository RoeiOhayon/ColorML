import App from "./App";
import UploadImage from "./pages/UploadImage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/uploadImage",
        element: <UploadImage />,
      },
      {
        path: "/About",
        element: <UploadImage />,
      },
    ]
  },
];

export default routes;