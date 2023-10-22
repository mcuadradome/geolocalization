--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 15.4

-- Started on 2023-10-21 14:46:08

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS geolocalization_bus;
--
-- TOC entry 4284 (class 1262 OID 259259)
-- Name: geolocalization_bus; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE geolocalization_bus WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';


ALTER DATABASE geolocalization_bus OWNER TO postgres;

\connect geolocalization_bus

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2 (class 3079 OID 259260)
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- TOC entry 4286 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry and geography spatial types and functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 260384)
-- Name: admins_park; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins_park (
    id bigint NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.admins_park OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 260383)
-- Name: admins_park_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.admins_park ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.admins_park_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 260348)
-- Name: bus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bus (
    code character varying(10) NOT NULL,
    passengers integer NOT NULL,
    conductor_fk bigint NOT NULL
);


ALTER TABLE public.bus OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 260367)
-- Name: car_park; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.car_park (
    id bigint NOT NULL,
    origen character varying(16),
    destino character varying(16),
    departure_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    arrival_time timestamp with time zone NOT NULL,
    time_of_stay double precision NOT NULL,
    bus_fk character varying(10) NOT NULL,
    municipality_fk bigint NOT NULL
);


ALTER TABLE public.car_park OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 260366)
-- Name: car_park_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.car_park ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.car_park_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 260354)
-- Name: conductor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conductor (
    id bigint NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.conductor OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 260353)
-- Name: conductor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.conductor ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.conductor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 260343)
-- Name: municipality; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.municipality (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    lat character varying(16) NOT NULL,
    lon character varying(16) NOT NULL,
    capacity integer NOT NULL,
    admin_fk bigint DEFAULT 1 NOT NULL
);


ALTER TABLE public.municipality OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 260342)
-- Name: municipality_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.municipality ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.municipality_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4278 (class 0 OID 260384)
-- Dependencies: 223
-- Data for Name: admins_park; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.admins_park (id, name) OVERRIDING SYSTEM VALUE VALUES (1, 'Admin 1');


--
-- TOC entry 4272 (class 0 OID 260348)
-- Dependencies: 217
-- Data for Name: bus; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.bus (code, passengers, conductor_fk) VALUES ('ABC123', 30, 1);


--
-- TOC entry 4276 (class 0 OID 260367)
-- Dependencies: 221
-- Data for Name: car_park; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4274 (class 0 OID 260354)
-- Dependencies: 219
-- Data for Name: conductor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.conductor (id, name) OVERRIDING SYSTEM VALUE VALUES (1, 'CONDUCTOR 1');


--
-- TOC entry 4271 (class 0 OID 260343)
-- Dependencies: 216
-- Data for Name: municipality; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (1, 'Chocontá', '5.146678', '-73.687044', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (2, 'Tibiritá', '5.051490', '-73.504577', 3, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (3, 'Jerusalén', '4.562677', '-74.695855 ', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (4, 'Ricaurte', '4.282114', '-74.767717', 3, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (5, 'Puerto Salgar', '5.466157', '-74.654130', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (6, 'La Vega', '4.992574', '-74.338211', 3, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (7, 'Útica', '5.185815', '-74.481177 ', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (8, 'Villeta', '5.013166', '-74.470477', 4, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (9, 'Guasca', '4.869582', '-73.874693 ', 3, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (10, 'Choachí', '4.526448', '-73.924819', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (11, 'Pacho', '5.140074', '-74.159068 ', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (12, 'Yacopí', '5.140074', '-74.159068 ', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (13, 'Cogua', '5.066298', '-73.979012', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (14, 'Cota', '4.807059', '-74.109258', 3, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (15, 'Sopó', '4.913516', '-73.941829', 4, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (16, 'Tocancipá', '4.967864', '-73.905176', 4, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (17, 'Facatativá', '4.819769', '-74.366498 ', 4, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (18, 'El Colegio', '4.582815', '-74.443732 ', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (19, 'Simijaca', '5.507497', '-73.848055', 2, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (20, 'Ubaté', '5.310340', '-73.819161', 3, 1);
INSERT INTO public.municipality (id, name, lat, lon, capacity, admin_fk) OVERRIDING SYSTEM VALUE VALUES (21, 'Bogotá D.C. ', '4.677584', '-74.147794', 8, 1);


--
-- TOC entry 4106 (class 0 OID 259577)
-- Dependencies: 211
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4287 (class 0 OID 0)
-- Dependencies: 222
-- Name: admins_park_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admins_park_id_seq', 1, true);


--
-- TOC entry 4288 (class 0 OID 0)
-- Dependencies: 220
-- Name: car_park_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.car_park_id_seq', 1, false);


--
-- TOC entry 4289 (class 0 OID 0)
-- Dependencies: 218
-- Name: conductor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conductor_id_seq', 1, true);


--
-- TOC entry 4290 (class 0 OID 0)
-- Dependencies: 215
-- Name: municipality_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.municipality_id_seq', 21, true);


--
-- TOC entry 4121 (class 2606 OID 260390)
-- Name: admins_park admins_park_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins_park
    ADD CONSTRAINT admins_park_pkey PRIMARY KEY (id);


--
-- TOC entry 4115 (class 2606 OID 260352)
-- Name: bus bus_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bus
    ADD CONSTRAINT bus_pkey PRIMARY KEY (code);


--
-- TOC entry 4119 (class 2606 OID 260372)
-- Name: car_park car_park_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car_park
    ADD CONSTRAINT car_park_pkey PRIMARY KEY (id);


--
-- TOC entry 4117 (class 2606 OID 260360)
-- Name: conductor conductor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conductor
    ADD CONSTRAINT conductor_pkey PRIMARY KEY (id);


--
-- TOC entry 4113 (class 2606 OID 260347)
-- Name: municipality municipality_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipality
    ADD CONSTRAINT municipality_pkey PRIMARY KEY (id);


--
-- TOC entry 4123 (class 2606 OID 260361)
-- Name: bus bus_conductor_fk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bus
    ADD CONSTRAINT bus_conductor_fk_fkey FOREIGN KEY (conductor_fk) REFERENCES public.conductor(id) ON DELETE CASCADE NOT VALID;


--
-- TOC entry 4124 (class 2606 OID 260373)
-- Name: car_park car_park_bus_fk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car_park
    ADD CONSTRAINT car_park_bus_fk_fkey FOREIGN KEY (bus_fk) REFERENCES public.bus(code) ON DELETE CASCADE;


--
-- TOC entry 4125 (class 2606 OID 260378)
-- Name: car_park car_park_municipality_fk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car_park
    ADD CONSTRAINT car_park_municipality_fk_fkey FOREIGN KEY (municipality_fk) REFERENCES public.municipality(id) ON DELETE CASCADE;


--
-- TOC entry 4122 (class 2606 OID 260391)
-- Name: municipality municipality_admin_fk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.municipality
    ADD CONSTRAINT municipality_admin_fk_fkey FOREIGN KEY (admin_fk) REFERENCES public.admins_park(id) ON DELETE CASCADE NOT VALID;


--
-- TOC entry 4285 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-10-21 14:46:09

--
-- PostgreSQL database dump complete
--

