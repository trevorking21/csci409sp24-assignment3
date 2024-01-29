FROM python:3.12-alpine3.19
Label maintainer="Trevor King"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /tmp/requirements.txt
COPY ./api /api
WORKDIR /api
EXPOSE 8000

RUN python - m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    rm -rf /tmp &&\
    adduser \
        --disabled-password \
        --no-create-home \
        django-user

ENV PATH="/py/pin:$PATH"

USER django-user