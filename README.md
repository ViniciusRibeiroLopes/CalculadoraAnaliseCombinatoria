# 🔢 Calculadora de Análise Combinatória

> Ferramenta web minimalista para cálculo de operações de Análise Combinatória, desenvolvida como projeto acadêmico para a disciplina de **Matemática Discreta**.

<br>

## 📐 Operações Suportadas

| Operação | Fórmula | Descrição |
|---|---|---|
| **Permutação Simples** | `P(n) = n!` | Número de formas de arranjar **n** elementos distintos |
| **Permutação com Repetição** | `P(n; r₁, r₂...) = n! / (r₁! × r₂! × ...)` | Permutação com grupos de elementos repetidos |
| **Arranjo Simples** | `A(n, p) = n! / (n-p)!` | Sequências ordenadas de **p** elementos retirados de **n** |
| **Combinação Simples** | `C(n, p) = n! / (p! × (n-p)!)` | Subconjuntos de **p** elementos retirados de **n** (sem importar a ordem) |

<br>

## ✨ Funcionalidades

- **Interface por abas** — navegação intuitiva entre as quatro operações
- **Tema Claro / Escuro** — alternância com um clique, sem recarregar a página
- **Precisão com BigInt** — suporta cálculos com números fatoriais muito grandes sem perda de precisão
- **Exibição da fórmula** — mostra a expressão matemática utilizada em cada cálculo
- **Validação de entrada** — mensagens de erro claras para entradas inválidas ou matematicamente impossíveis
- **Design responsivo** — funciona em dispositivos móveis e desktops
- **Animações suaves** — transição entre abas e animação de resultado

<br>

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica com suporte a acessibilidade (`aria-*`)
- **CSS3** — variáveis CSS para temas, animações com `@keyframes`, layout responsivo com media queries
- **JavaScript (Vanilla)** — lógica de cálculo com `BigInt` nativo para precisão arbitrária
- **Google Fonts** — tipografia com a família `Inter`

<br>

## 📁 Estrutura do Projeto

```
CalculadoraAnaliseCombionatoriaMD/
├── index.html    # Estrutura da interface (abas, inputs, resultado)
├── style.css     # Estilos e temas (claro/escuro)
├── script.js     # Lógica de cálculo e interação com o DOM
└── README.md     # Documentação do projeto
```

<br>

## 🚀 Como Usar

1. Abra o arquivo `index.html` no navegador (não é necessário servidor)
2. Selecione a operação desejada nas abas superiores
3. Preencha os campos com os valores de `n` e/ou `p`
4. Clique em **Calcular** para ver o resultado e a fórmula aplicada

> **Permutação com Repetição:** insira as quantidades de elementos repetidos separadas por vírgula no campo de repetições (ex: `2, 3, 1`).

<br>

## 📚 Conceitos Matemáticos

### Fatorial
Base de todos os cálculos combinatórios. Definido como:

```
n! = n × (n-1) × (n-2) × ... × 1
0! = 1
```

### Permutação Simples — P(n)
Conta o número de formas de ordenar **n** elementos distintos:
```
P(n) = n!
```
*Exemplo: P(4) = 4! = 24 formas de ordenar {A, B, C, D}*

### Permutação com Repetição — P(n; r₁, r₂...)
Quando existem elementos repetidos, evita contar arranjos idênticos:
```
P(n; r₁, r₂...) = n! / (r₁! × r₂! × ...)
```
*Exemplo: anagramas de "BANANA" → P(6; 3, 2) = 6! / (3! × 2!) = 60*

### Arranjo Simples — A(n, p)
Sequências **ordenadas** de **p** elementos distintos escolhidos entre **n**:
```
A(n, p) = n! / (n-p)!
```
*Exemplo: A(5, 2) = 5! / 3! = 20 (pódio de 2 lugares com 5 atletas)*

### Combinação Simples — C(n, p)
Subconjuntos de **p** elementos sem importar a ordem:
```
C(n, p) = n! / (p! × (n-p)!)
```
*Exemplo: C(5, 2) = 10 (times de 2 jogadores de um grupo de 5)*

<br>

## 🎓 Contexto Acadêmico

Projeto desenvolvido para a disciplina de **Matemática Discreta**, abordando conteúdos de **Análise Combinatória** — ramo da matemática que estuda técnicas de contagem de possibilidades em conjuntos finitos.

<br>

---

<p align="center">Feito com 🧠 para Matemática Discreta</p>