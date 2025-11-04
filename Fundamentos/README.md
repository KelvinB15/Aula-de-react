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
