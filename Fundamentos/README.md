# 🧩 FRONT END — Componentização e Estrutura Visual

> 💡 Este documento explica **como dividir o front-end em componentes** reutilizáveis usando React e estilização baseada em variáveis.  
> A ideia é construir interfaces modulares, limpas e fáceis de manter, **usando divs, variáveis e hierarquia de componentes.**

---

## 🎯 O Que é Componentização

Componentização é o processo de **dividir a interface do usuário em partes menores e independentes**, chamadas **componentes**.

Cada componente:
- Controla **sua própria aparência e comportamento**;
- Pode ser **reutilizado** em várias partes do projeto;
- Facilita a **manutenção e evolução** do código.

---

## 🧱 Pensando em Blocos (Dividindo o Layout)

Imagine que a página é um **conjunto de blocos** (`div`s) organizados em níveis.  
Cada bloco pode virar um **componente React**:



+------------------------------------------------+
| <Header> |
+------------------------------------------------+
| <Sidebar> | <Main> |
| | +----------------------------+ |
| | | <Card> | |
| | | +---- <Text> ----+ | |
| | | | "Hello World" | | |
| | | +----------------+ | |
| | +----------------------------+ |
+------------------------------------------------+
| <Footer> |
+------------------------------------------------+

## 🪄 Ilustração Visual dos Componentes

<App>
 ├── <Text variant="heading">Título</Text>
 ├── <Card title="..." description="...">
 │      ├── <Text variant="muted">Descrição</Text>
 │      └── <Button>Saiba Mais</Button>
 └── ...

╔══════════════════════════════════════════╗
║ 🚀 Rocketseat - Fundamentos React        ║
╠══════════════════════════════════════════╣
║  Componentização                         ║
║  Divida o front em blocos reutilizáveis. ║
║                                          ║
║  [ Saiba Mais ]                          ║
╚══════════════════════════════════════════╝

## 🎨 CSS — Controle de Tamanho e Espaçamento dos Componentes

💡 Este documento explica como funcionam as propriedades de dimensão e espaçamento no CSS, como width, height, padding, margin e outras.
A ideia é entender como cada propriedade afeta a estrutura visual dos componentes no front-end.

### 🧱 Propriedades de Dimensão

As propriedades de largura (width) e altura (height) controlam o tamanho de um elemento na tela.
Elas determinam quanto espaço um componente ocupa dentro do layout.

╔══════════════════════════════════════════╗
║ 🚀 Exemplo                               ║
╠══════════════════════════════════════════╣
║  .card {                                 ║
║  width: 300px;       Largura             ║
║  height: 150px;      Altura              ║
║  background-color: #f5f5f5;  fundo       ║
║  border-radius: 8px;        bordas       ║
║  }                                       ║
╚══════════════════════════════════════════╝

📦 Nesse exemplo, o .card terá:

Largura fixa de 300px;

Altura fixa de 150px;

Um fundo cinza claro e bordas arredondadas.


#### padding — Espaçamento Interno
Define o espaço entre o conteúdo e a borda do elemento.

padding: 16px;        /* espaço igual em todos os lados */
padding: 8px 12px;    /* 8px em cima/baixo e 12px nas laterais */

[ █████ texto █████ ]
   ↑     ↑
   padding interno


### 🧩 Exemplo Prático com Componentes

<div class="flex gap-3">
  <button class="w-16 h-16">CE</button>
  <button class="w-16 h-16">C</button>
</div>


### 🪄 Ilustração Visual do Layout 

+---------------------------------------+
| <Card> width: 300px; height: 150px;   |
|  +---------------------------------+  |
|  | <Button class="w-16 h-16">CE</Button> |
|  | <Button class="w-16 h-16">C</Button>  |
|  +---------------------------------+  |
+---------------------------------------+


### Tabelo de Resumo CSS 

| Propriedade     | Função                          | Exemplo               |
| --------------- | ------------------------------- | --------------------- |
| `width`         | Largura                         | `width: 200px;`       |
| `height`        | Altura                          | `height: auto;`       |
| `padding`       | Espaço interno                  | `padding: 12px;`      |
| `margin`        | Espaço externo                  | `margin: 20px;`       |
| `border-radius` | Arredondar bordas               | `border-radius: 8px;` |
| `gap`           | Espaço entre filhos (flex/grid) | `gap: 10px;`          |

## Função + React


 const CalculatorContext = React.createContext();
       function CalculatorProvider({ children}){
        const [history, setHistory] = React.useState ([])

        function updateHistory (operation, parsedResult){
            setHistory((prev) => [...prev, `${operation} = ${parsedResult}`]);
        }
        return (
            <CalculatorContext.Provider value={{ history, updateHistory  }}>
                {children}
            </CalculatorContext.Provider>
        )
       }

### Mapa Mental 
🏠 CalculatorProvider
│
├── 🗃️ history (lista de contas feitas)
├── ✍️ updateHistory (função para adicionar contas)
│
└── 📡 Provider
     ├── envia "history" para as crianças
     ├── envia "updateHistory" também
     └── contém todas as 👶 children (componentes filhos)


+---------------------------------------------+
| 🏠 CalculatorProvider                        |
|---------------------------------------------|
| 🗃️ history: ["2 + 2 = 4", "3 + 5 = 8"]      |
| ✍️ updateHistory(op, result)                |
|---------------------------------------------|
| 📡 Provider                                 |
|   👧 Child1 (usa o histórico)               |
|   👦 Child2 (adiciona novas contas)         |
+---------------------------------------------+

useState([]) → cria uma caixinha pra guardar o histórico 🗃️

updateHistory() → coloca novas contas dentro da caixinha ✍️

Provider → deixa todo mundo dentro da casinha usar essa caixinha 📡


### Tabela Sintaxe
| Parte                           | O que faz                                 | Exemplo                             |
| :------------------------------ | :---------------------------------------- | :---------------------------------- |
| `history.map(...)`              | percorre cada item da lista               | percorre ["2 + 2 = 4", "3 + 5 = 8"] |
| `(item, index)`                 | pega o valor do item e sua posição        | 1️⃣ item = "2 + 2 = 4", index = 0   |
| `<Text as="li">...</Text>`      | cria um elemento visual (como `<li>`)     | `<li>2 + 2 = 4</li>`                |
| `{item}`                        | insere o texto do item dentro do elemento | mostra “2 + 2 = 4”                  |
| `key={`history-item-${index}`}` | dá uma “identidade única” ao item         | key="history-item-0"                |

### PROPS

🧩 Exemplo com React

function BotaoMagico(props) {
  return <button {...props} />;
}

<BotaoMagico cor="azul" tamanho="grande" texto="Clica aqui!" />

O que acontece por dentro é como se o React dissesse:
“Ok! Vou abrir essa mochila de props e colocar tudo dentro do botão!”
Então o botão vira algo assim:

<button cor="azul" tamanho="grande" texto="Clica aqui!" />

🎨 Ilustração

Mochila props 🎒
 ├─ cor: azul
 ├─ tamanho: grande
 └─ texto: "Clica aqui!"

Botão recebe ...props ✨
 → Agora o botão tem tudo isso dentro dele!

 ### Tabela Props


| Parte                                           | O que faz                                                                            |
| ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| `children`                                      | Conteúdo dentro do componente                                                        |
| `className`                                     | Classe CSS                                                                           |
| `...props`                                      | Pega **todas as outras props** e as espalha no elemento (como `id`, `onClick`, etc.) |
| `React.createElement(as, {...props}, children)` | Cria dinamicamente o elemento com as props passadas                                  |



### Input CheckBox

const inputCheckboxWrapperVariants = cva(`
   `inline-flex items-center justify-center`
    `cursor-pointer` 
    `relative`
    `group`
`)

“Fiquem alinhadinhos e centralizados!” (`inline-flex items-center justify-center`)

“Pode clicar em mim!” (`cursor-pointer`)

“Eu posso ter coisinhas posicionadas dentro de mim.” (`relative`)

“Eu tenho um grupo de amiguinhos!” (`group`)

+---------------------+
|     [ ] Texto aqui  |
+---------------------+
Esse quadradinho [ ] vai dentro do “wrapper”.



------------------------------------------------------------------------------------

const inputCheckBoxVariants = cva(`
    appearance-none peer flex items-center justify-center
    border-2 border-solid transition overflow-hidden
    `border-green-base`
    `hover:border-green-dark hover:bg-green-dark/20`
    checked:border-green-base 
    `checked:bg-green-base`
    `group-hover:checked:border-green-dark` 
    group-hover:checked:bg-green-dark
`,
{
    variants: {
        `size:` {
            `md:` "w-5 h-5 rounded-sm"
        },
        `disabled:` {
            `true:` "pointer-events-none"
        }
    },
    defaultVariants: {
        size: "md",
        disabled: false
    }
})

“Eu sou uma caixinha com bordas verdes.” (`border-green-base`)

“Se alguém passa o mouse em mim, eu fico um pouquinho mais escura.” (`hover:border-green-dark hover:bg-green-dark/20`)

“Quando eu estou marcada (checked), eu fico toda verde!” (`checked:bg-green-base`)

“Quando o mouse está sobre mim e eu estou marcada, fico ainda mais escurinha.” (`group-hover:checked:bg-green-dark`)

E ela tem tamanhos e modos:

`size: "md"` → Tamanho médio (5x5)

`disabled: true` → Se for verdade, ninguém pode clicar nela.

[ ] [ ] ← borda fica mais escura [✓] ← fica verde
------------------------------------------------------------------------------------

const inputCheckoxIconVariants = cva(`
   `absolute top-1/2 left-1 -translate-y-1/2`
    `hidden` 
    `peer-checked:block` 
    `fill-white`
`,
{
    variants: {
        size: {
            md: "w-3 h-3"
        }
    },
    defaultVariants: {
        size: "md"
    }
})

“Eu fico exatamente no meio da caixinha.” (`absolute top-1/2 left-1 -translate-y-1/2`)

“Normalmente, eu me escondo…” (`hidden`)

“…mas quando a caixinha é marcada, eu apareço!” (`peer-checked:block`)

“Eu sou branquinho.” (`fill-white`)


Antes: [ ]  Depois que marca: [✓]


------------------------------------------------------------------------------------

| Parte                          | O que faz                                     | Analogia                              |
| ------------------------------ | --------------------------------------------- | ------------------------------------- |
| `inputCheckboxWrapperVariants` | A moldura que segura tudo junto               | Uma caixinha que segura o botão       |
| `inputCheckBoxVariants`        | A caixinha que muda de cor e pode ser marcada | O botão quadradinho que a gente marca |
| `inputCheckoxIconVariants`     | O “✓” que aparece quando marcamos             | O tique branco dentro da caixinha     |

