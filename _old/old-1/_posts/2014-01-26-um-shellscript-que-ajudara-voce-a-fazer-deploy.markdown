---
layout: post
title: "Um shellscript que ajudará você a fazer deploy"
date: 2014-01-26 14:11:44
categories: posts programacao deploy
---

Em 2012, eu utilizava *FTP* - geralmente com a ajuda do [Filezilla][filezilla] - para fazer deploy de alguns projetos que eu trabalhava. Isso realmente era demorado e complicado, pois, se houvesse alguma alteração a ser feita em muitos arquivos por exemplo, eu teria de identificá-los e assim, mandá-los para o servidor um a um via Filezilla (ou tudo de novo, para evitar que eu esquecesse de algum). Este realmente é um processo terrível e demorado, já que toda vez você terá que pensar no que enviar, terá ainda que certificar-se qual arquivo modificado é preciso ser enviado. Sei que muitos ainda tem o FTP em seu *workflow* e a você que se encaixa nesta descrição eu digo: "Deixe isso urgentemente!".

Sendo assim, procurei na web soluções melhores para fazer deploys simples (para projetos simples) e achei muitas opções, entre elas o [Rsync][rsync], no qual optei usar pela simplicidade e pela possiblidade de integração com *SSH* oferecida.

Então, a quatro meses criei um script shell que uso diariamente para fazer meus deploys de forma rápida e simplificada utilizando *Rsync* e SSH. O script é composto de dois arquivos: `config` e `deployit.sh`.

config

```

file_or_directory, ssh_data, destination

```

deployit.sh

```bash

#!/bin/bash

file_or_directory=`awk -F", " '{print $1}' config`;
ssh_data=`awk -F", " '{print $2}' config`;
destination=`awk -F", " '{print $3}' config`;

deployit () {
  if [[ $file_or_directory && $ssh_data && $destination ]]; then
rsync -avz -e ssh $file_or_directory $ssh_data:$destination
  else
echo -e "Missing parameter (s).";
  fi
}

initializer() {
  deployit;
}

initializer;

```

Como podem observar acima, o procedimento adotado é bem simples: o arquivo `deployit.sh` lê o arquivo `config` que possui as configurações básicas do SSH e a localização do (s) arquivo (s) de origem e destino. Por exemplo, eu quero enviar todos os arquivos do diretório que o `deployit.sh` está para a pasta `public_html` de um servidor qualquer. O arquivo `config` ficará dessa forma:

config

```

*, usuariofoo@ftp.example.com, ~/public_html/

```

Logo, você executará via terminal o comando `./deployit` para enviar os arquivos alterados apenas (automagicamente :-) ).

Caso a porta do SSH não seja a padrão você pode substituir a linha `8` por está aqui:

```bash

rsync -avz -e 'ssh -p porta_aqui' $file_or_directory $ssh_data:$destination

```

Bom galera é isso. Caso tenha alguma dúvida podem me contactar via e-mail. Caso queira contribuir faça um fork do projeto no GitHub.

[Deployit - https://github.com/marcker/deployit][deployit]

[filezilla]: https://filezilla-project.org/
[rsync]: http://rsync.samba.org/
[deployit]: https://github.com/marcker/deployit
