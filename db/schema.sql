DROP DATABASE IF EXISTS tuner_api;
CREATE DATABASE tuner_api;

\c tuner_api;

CREATE TABLE tuner (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);