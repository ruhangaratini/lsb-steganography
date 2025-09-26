# LSB - Steganography

Esta atividade foi desenvolvida como parte da avaliação da disciplina de Segurança da Informação do
Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de São
Paulo, Campus Boituva

## Requisitos do Projeto

- Implementação de um algoritmo que permite inserir/ler textos utilizando imagens
- Programa executável via linha de comando
- Não é permitido a utilização de IA durante o processo de codificação

## Instruções
Os comandos devem ser executados a partir do diretório root do projeto

### Dependências
Com o Node.js instalado, execute o seguinte comando para instalar as dependências do projeto
```
npm install
```

### Escrita
```
node main.js -m write -i /caminho-para-imagem.jpg -t "Texto a ser inserido na imagem"
```

### Leitura
```
node main.js -m read -i /caminho-para-imagem.png
```



Desenvolvedor: Ruhan Garatini | 25/09/2025
