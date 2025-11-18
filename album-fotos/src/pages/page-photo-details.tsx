import { useParams } from "react-router";
import Text from "../components/text";


export default function PagePhotoDetails() {
    const {} = useParams()

    return (
        <>
            <Text variant="heading-medium">Página detalhe das fotos</Text>
        </>
    )
}