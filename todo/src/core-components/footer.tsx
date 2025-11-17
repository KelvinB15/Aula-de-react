import  { NavLink } from "react-router";
import Text from "../componentes/text";

export default function Footer() {
    return (
        <footer className="my-5 md:mt-10">
            <nav className="flex items-center justify-center gap-4">
                <NavLink to="/">
                    <Text variant="body-sm-bold" className="text-gray-300">
                        Home
                    </Text>
                </NavLink>
                 <NavLink to="/componentes">
          <Text variant="body-sm-bold" className="text-gray-300">
            Componentes
          </Text>
        </NavLink>
            </nav>
        </footer>
    )
}