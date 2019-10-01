---
layout: post
title: "Sprites com ImageMagick"
date: 2014-01-30 09:53:34
categories: posts processamento imagens
---

Muitas vezes em meu [trabalho][grupo-maua-e-regiao], recebo do designer gráfico -- ou web designer -- um conjunto de imagens que irão compor um novo projeto ou uma correção: ícones, *layouts* e outros itens que não poderão ser construídos por meio de códigos (HTML e CSS).

Sendo assim, opto por agrupar os ícones em um mesmo arquivo de imagem (geralmente `.png`) -- imagem esta conhecida como [sprite][wiki-sprites]. O *conceito de sprites* não é novo, pois, já o utilizavam/utilizam em jogos para criar a ilusão de movimento de algum item (por exemplo, em personagens). Cada parte da imagem é então a representação de movimento.

Para a web, sprites são utilizados a fim de se evitar que muitas requisições sejam feitas ao servidor, evitando-se também o consumo de banda que estas requisições causam.

Mas então? Como criar estas imagens? A princípio você pode utilizar um editor de imagens de sua prefêrencia e agrupar estas imagens uma a uma, criando uma composição. Porém, este método será trabalhoso e demorado, e muitas vezes você não obterá o resultado esperado, pois, "não somos designers!"

Assim, você poderá optar pela ferramenta [ImageMagick][imagemagick] para criar os seus sprites via linha de comando (eu uso [Konsole][konsole] com [Zsh][zsh] e [Prezto][prezto]):


```bash

mkdir sprites && montage * \
  -monitor \
  -geometry +5+5 \
  -background none \
  sprites/sprite-icones.png

```

O comando `mkdir sprites` indica que criamos uma pasta chamada **sprites** e em seguida utilizamos o comando `montage`, que pertence a suíte de software ImageMagick. No comando `montage` aplicamos alguns parâmetros:

* `-monitor` - mostra o que está sendo processado e a porcentagem de sucesso;
* `-geometry`- indique a posição de cada imagem, no nosso caso aplicamos `+5+5`, ou seja, cada imagem será separada por `5px` (horizontalmente e verticalmente);
* `-background` - indicamos `none`, pois, não desejamos nenhum fundo para o nosso sprite;
* `sprites/sprite-icones.png` - e por fim, indicamos a pasta `sprites` e um nome para o arquivo e seu formato.

Ao executar este comando, após algum tempo, o sprite será criado e você já poderá utilizá-lo em seus projetos. Simples assim.

**Adendo**: aqui abordei o comando `montage` de forma simplificada. Você pode explorar mais o assunto no website do ImageMagick: há diversas opções e ele possui muitas *API*s para linguagens de programação. Bom estudo!

[grupo-maua-e-regiao]: http://grupomauaeregiao.com.br/
[wiki-sprites]: http://pt.wikipedia.org/wiki/Sprite_%28gr%C3%A1fico%29
[imagemagick]: http://www.imagemagick.org/script/index.php
[konsole]: http://konsole.kde.org/
[zsh]: http://www.zsh.org/
[prezto]: https://github.com/sorin-ionescu/prezto
