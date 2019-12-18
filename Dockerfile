FROM mhart/alpine-node:8.15.1 AS frontend

COPY ./frontend/package.json ./frontend/npm-shrinkwrap.json /tmp/

RUN cd /tmp/ && npm i --registry=https://registry.npm.taobao.org
RUN mkdir -p /usr/src/app && cp -rf /tmp/node_modules/ /usr/src/app/

WORKDIR /usr/src/app

COPY ./frontend/ .

RUN npm run build

FROM mhart/alpine-node:8.15.1 AS bms

ENV TZ=Asia/Shanghai
USER root

ARG ALPINE_VER=v3.9
ARG ALPINE_MIRROR=http://mirrors.tuna.tsinghua.edu.cn/alpine/${ALPINE_VER}

# Installs Chromium package.
RUN echo @${ALPINE_VER} ${ALPINE_MIRROR}/community >> /etc/apk/repositories \
    && echo @${ALPINE_VER} ${ALPINE_MIRROR}/main >> /etc/apk/repositories \
    && apk add --no-cache --upgrade \
    chromium@${ALPINE_VER} \
    harfbuzz@${ALPINE_VER} \
    nss@${ALPINE_VER} \
    freetype@${ALPINE_VER} \
    ttf-freefont@${ALPINE_VER} \
    tzdata@${ALPINE_VER} \
    && rm -rf /var/cache/* \
    && mkdir /var/cache/apk

# 设置时区
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" >  /etc/timezone

ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_PATH=/usr/lib/chromium/ \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY ./backend/package.json ./backend/package-lock.json /tmp/

RUN cd /tmp && \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org \
    npm i --registry=https://registry.npm.taobao.org

RUN mkdir -p /usr/src/app && cp -rf /tmp/node_modules/ /usr/src/app/

WORKDIR /usr/src/app

# 存放生成的临时 Excel
RUN mkdir -p ./app/temp
COPY ./backend ./
COPY --from=frontend /usr/src/app/dist/ ./app/public

EXPOSE 7002

CMD npm run start
