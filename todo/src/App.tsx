import Text from "./componentes/text";
import trash from "./assets/icons/trash.svg?react";
import check from "./assets/icons/check.svg?react";
import pencil from "./assets/icons/pencil.svg?react";
import plus from "./assets/icons/plus.svg?react";
import spinner from "./assets/icons/spinner.svg?react";
import x from "./assets/icons/x.svg?react";
import Icon from "./componentes/icon";
import Badge from "./componentes/badge";
import Button from "./componentes/button";
import ButtonIcon from "./componentes/button-icon";
import InputText from "./componentes/input-text";
import InputCheckBox from "./componentes/input-check-box";

export default function App() {
  return (
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
  <div>
    <Badge variant="secondary">5</Badge>
    <Badge variant="primary">2 de 5</Badge>
  </div>
    <div>
      <Button icon={plus}>Nova tarefa</Button>
    </div>
    <div className="flex gap-1">
      <ButtonIcon icon={trash}/>
      <ButtonIcon icon={trash} variant="secondary"/>
      <ButtonIcon icon={trash} variant="tertiary"/>
    </div>
    <div>
      <InputText/>
    </div>
    <div>
      <InputCheckBox/>
    </div>
</div>
  )
}