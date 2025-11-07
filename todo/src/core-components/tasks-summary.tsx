import Badge from "../componentes/badge";
import Text from "../componentes/text";


export default function TasksSummary() {
    return <>
        <div className="flex items-center gap-2">
            <Text variant="body-sm-bold" className="text-gray-300!">
                Tarefas criada
            </Text>
            <Badge variant="secondary" size={"sm"}>
                5
            </Badge>
        </div>
        <div className="flex items-center gap-2">
            <Text variant="body-sm-bold" className="text-gray-300!">
                Concluidas
            </Text>
            <Badge variant="primary" size={"sm"}>
                2 de 5
            </Badge>
        </div>
    </>
}