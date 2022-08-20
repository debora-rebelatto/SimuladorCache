# Organização de Computadores 2021.2

## Introdução

### O que é?

### Como iniciar?
```
npm i
npm run start
```

## Simulador Cache
Mapeamento Direto-escrita em ambas

- ❌ Número de células na MP: 128;
- ❌ Tamanho do bloco: 4 células;
- ❌ Número de linhas na cache: 8;
- ❌ Tamanho da célula: 8 bits;
- ❌ Tamanho do conjunto: 2 ou 4 linhas (definida pelo número entre parênteses ao lado da política de cada grupo);

Cada dupla deve implementar a política de mapeamento, substituição e escrita conforme especificado na folha a seguir.

Na tela do programa deve ser apresentado todo o conteúdo da memória principal, da memória cache, da próxima localização que será substituída (de acordo com a política definida), além de um menu que de acesso às seguintes operações:
- ❌ ler o conteúdo de um endereço da memória;
- ❌ escrever em um determinado endereço da memória;
- ❌ apresentar as estatísticas de acertos e faltas (absolutos e percentuais) para as três situações: leitura, escrita e geral;
- ❌ encerrar o programa.

OBS1: Os valores e endereços devem ser apresentados em hexadecimal ou binário.
OBS2: Ao ler um endereço deve informar se encontrou na cache ou não. Qual o
número do bloco a que se refere o endereço, qual o quadro na cache que está
mapeado e o deslocamento do mesmo.
OBS3: A memória principal deve ser preenchida com valores aleatórios (entre 0x00 e
0xFF) no início da execução.
OBS4: Os contadores da política de substituição possuem 3 bits.

<p align="center">
  Made with 🤔
</p>
