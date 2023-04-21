FROM node:19

WORKDIR /home
RUN npm install -g serve
COPY ./.vscode/ ./.vscode/

RUN git clone https://github.com/GawinGowin/react-sample.git

WORKDIR /home/react-sample
RUN npm install
ENTRYPOINT tail -f /dev/null