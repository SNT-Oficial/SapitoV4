###| Dockerfile |###
###|> Usa Docker para poder ejecutar TheMystic-Bot-MD en cualquier plataforma! <|###

FROM    node:current-bullseye
###|> Especificando la imagen docker a usar <|###

RUN     apt-get update \
        && apt-get install -y ffmpeg imagemagick webp
        # && rm -rf /var/lib/apt/lists/*
###|> Instalando requisitos <|###

COPY    package.json .
###|> Clonando 'package.json' al directorio actual <|###

RUN     npm i
        # && npm i qrcode-terminal \
###|> Instalando dependencias <|###

COPY . .
###|> Clonando todos los archivos al directorio actual <|###

EXPOSE 3000
###|> Exponiendo puerto para iniciar el servidor web <|###

CMD ["node", "index.js", "--server"]
###|> Iniciando TheMystic-Bot-MD en modo serbidor <|###