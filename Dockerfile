FROM node:16-bullseye

ENV DIR=/src
ENV TASK=dev

WORKDIR /src

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]

CMD npm --prefix="$DIR" run $TASK
