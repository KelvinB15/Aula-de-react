import Badge from "../componentes/badge";
import Button from "../componentes/button";
import ButtonIcon from "../componentes/button-icon";
import Card from "../componentes/card";
import Container from "../componentes/container";
import Icon from "../componentes/icon";
import InputCheckBox from "../componentes/input-check-box";
import InputText from "../componentes/input-text";
import Skeleton from "../componentes/skeleton";
import Text from "../componentes/text"; 
import trash from "../assets/icons/trash.svg?react"
import check from "../assets/icons/pencil.svg?react"
import pencil from "../assets/icons/plus.svg?react"
import plus from "../assets/icons/spinner.svg?react"
import x from "../assets/icons/x.svg?react"
import spinner from "../assets/icons/spinner.svg?react"



export default function PageComponents (){
    return (
    <Container>
    <div className="grid gap-3">
  <div className="flex flex-col gap-2">
    <Text variant="body-sm-bold" className="text-pink-base">
      ToDo List
    </Text>
    <Text variant="body-md-bold" className="text-shadow-green-dark">
      ToDo List
    </Text>
    <Text variant="body-md" className="text-green-light">
      ToDo List
    </Text>
  </div>
  <div className="flex gap-1">
    <Icon svg={trash} className="fill-pink-base"/>
    <Icon svg={check}/>
    <Icon svg={pencil}/>
    <Icon svg={plus}/>
    <Icon svg={spinner} className="animate-spin"/>
    <Icon svg={x}/>
  </div>
  <div className="flex gap-1">
    <Badge variant="secondary">5</Badge>
    <Badge variant="primary">2 de 5</Badge>
    <Badge loading>5</Badge>
  </div>
    <div>
      <Button icon={plus}>Nova tarefa</Button>
    </div>
    <div className="flex gap-1">
      <ButtonIcon icon={trash}/>
      <ButtonIcon icon={trash} variant="secondary"/>
      <ButtonIcon icon={trash} variant="tertiary"/>
      <ButtonIcon icon={trash} loading />
    </div>
    <div>
      <InputText/>
    </div>
    <div>
      <InputCheckBox/>

      <InputCheckBox loading/>
    </div>
    <div>
      <Card>Opa </Card>
    </div>
    <div className="space-y-2">
    <Skeleton className="h-6"/>
    <Skeleton className="h-6"/>
    <Skeleton className="w-96 h-6"/>
    </div>
</div>
</Container>
  )
}