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
