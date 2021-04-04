CREATE DATABASE "exampleDB",

CREATE TABLE public."Personas"
(
    nombre character varying COLLATE pg_catalog."default",
    id integer NOT NULL DEFAULT nextval('"Personas_id_seq"'::regclass),
    edad integer NOT NULL,
    email character varying COLLATE pg_catalog."default",
    CONSTRAINT "Personas_pkey" PRIMARY KEY (id)
)