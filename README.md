# ⚡ A Corrida pelas Esmeraldas do Caos

<div align="center">

![Sonic](https://img.shields.io/badge/Sonic-The%20Hedgehog-0066FF?style=for-the-badge&logo=sega)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Uma aventura algorítmica inspirada no universo do Sonic!** 🎮💎

[Demo ao Vivo](https://github.com/luizfxdev/desafio_311) | [Exemplos](EXEMPLOS.md) | [Reportar Bug](https://github.com/luizfxdev/desafio_311/issues)

</div>

---

## 📖 Sobre o Desafio

Sonic, o ouriço azul mais veloz do multiverso, está em uma missão urgente para salvar **Green Hill Zone** de uma ameaça robótica criada por Dr. Robotnik! No caminho, estão escondidas as lendárias **Esmeraldas do Caos**, essenciais para liberar todo o potencial de Sonic e garantir a paz na região.

### 🎯 Objetivo

Sua missão é identificar coordenadas especiais no cenário pixelado de Green Hill Zone. Uma **Esmeralda do Caos** está presente em uma coordenada se a **soma dos valores da tupla é um número primo**!

---

## 🚀 Como Funciona

### Regras do Desafio

1. Você recebe uma lista de tuplas com coordenadas: `[(x1, y1), (x2, y2), ...]`
2. Para cada tupla, some os dois números
3. Verifique se a soma é um número primo
4. Se for primo, a coordenada contém uma Esmeralda do Caos! 💎

### Exemplo Prático

**Entrada:**
```javascript
[(1, 2), (3, 5), (4, 6), (5, 7)]
```

**Processamento:**
- `(1, 2)` → 1 + 2 = **3** → É primo? ✓ **SIM** 💎
- `(3, 5)` → 3 + 5 = **8** → É primo? ✗ Não
- `(4, 6)` → 4 + 6 = **10** → É primo? ✗ Não
- `(5, 7)` → 5 + 7 = **12** → É primo? ✗ Não

**Saída:**
```javascript
[(1, 2)]
```

---

## 🎨 Características do Projeto

### Visual e Tema
- 🎮 **Background Animado:** Vídeo do clássico Green Hill Zone do Sonic The Hedgehog
- 🎵 **Trilha Sonora:** Green Hill Zone Theme (música icônica do jogo)
- 💎 **Design Retro-Futurista:** Inspirado nos gráficos pixel art dos anos 90
- ⚡ **Animações Suaves:** Efeitos de brilho e transições modernas

### Funcionalidades
- ✅ Validação de entrada em tempo real
- ✅ Cálculo detalhado passo a passo
- ✅ Interface responsiva (mobile-friendly)
- ✅ Controles de áudio integrados
- ✅ Feedback visual para resultados

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com Flexbox, animações e glassmorphism
- **JavaScript (ES6+)** - Lógica de validação e cálculos
- **Design Responsivo** - Mobile-first approach

---

## 📦 Estrutura do Projeto

```
desafio_311/
├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica do desafio
├── assets/
│   ├── background.mp4  # Vídeo do Green Hill Zone
│   └── sonic-theme.mp3 # Trilha sonora (opcional)
├── EXEMPLOS.md         # Exemplos de teste
└── README.md           # Este arquivo
```

---

## 🎮 Como Usar

### 1. Clone o Repositório
```bash
git clone https://github.com/luizfxdev/desafio_311.git
cd desafio_311
```

### 2. Adicione os Arquivos de Mídia
Coloque os seguintes arquivos na pasta `assets/`:
- `background.mp4` - Vídeo do Green Hill Zone
- `sonic-theme.mp3` - Música tema (opcional)

### 3. Abra no Navegador
```bash
# Usando Live Server (VSCode)
# Ou simplesmente abra o index.html no navegador
```

### 4. Digite as Coordenadas
```
[(1, 2), (3, 5), (4, 6), (5, 7)]
```

### 5. Clique em CALCULAR
Veja a mágica acontecer! ⚡💎

---

## 💡 Exemplos de Teste

Confira o arquivo [EXEMPLOS.md](EXEMPLOS.md) para ver 3 exemplos completos com:
- Entrada
- Análise detalhada
- Saída esperada
- Explicações passo a passo

---

## 🧮 Algoritmo de Números Primos

O projeto utiliza um algoritmo eficiente para verificar números primos:

```javascript
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
```

**Complexidade:** O(√n) - Otimizado para performance

---

## 🎯 Recursos Adicionais

### Números Primos Comuns
```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53...
```

### Dicas para Criar Testes
1. Para garantir uma esmeralda: escolha números que somem um primo
2. Exemplo: `(1, 1)` → 2 (primo!)
3. Exemplo: `(2, 1)` → 3 (primo!)
4. Exemplo: `(2, 3)` → 5 (primo!)

---

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- 🖥️ **Desktop:** Container fixo à esquerda
- 💻 **Tablet:** Layout centralizado
- 📱 **Mobile:** Stack vertical, botões em coluna

---

## 🎨 Paleta de Cores

Inspirada no universo Sonic:

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Sonic | `#00d4ff` | Títulos, bordas principais |
| Verde Esmeralda | `#00ff88` | Resultados positivos |
| Vermelho Alerta | `#ff6b6b` | Erros e resultados negativos |
| Dourado | `#ffd700` | Destaques especiais |
| Fundo Escuro | `#0a0518` | Background do container |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/luizfxdev)
- Portfolio: [Clique aqui](https://luizfxdev.com.br)

---

## 🎮 Créditos

- **Sonic The Hedgehog** - © SEGA
- **Green Hill Zone** - © SEGA
- Background e música são propriedade da SEGA e usados apenas para fins educacionais

---

## ⭐ Mostre seu Apoio

Se este projeto te ajudou, considere dar uma ⭐ no repositório!

---

<div align="center">

**Feito com 💙 e muita velocidade supersônica!** ⚡

[Voltar ao Topo](#-a-corrida-pelas-esmeraldas-do-caos)

</div>
