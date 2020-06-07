import Home from "../containers/home";
import { RouteProps } from "react-router-dom";
import Sobre from "../containers/sobre";
import Combustivel from "../containers/combustivel";

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, component: Home, exact: true },
  { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
  { path: `${publicUrl}/combustivel`, name: 'Combustível', component: Combustivel, exact: true },
  { path: `${publicUrl}/sobre`, name: 'Sobre', component: Sobre, exact: true },
];
