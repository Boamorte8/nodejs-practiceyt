<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- <div align="center">

  <a href="">[![Contributors][contributors-shield]][contributors-url]</a>
  <a href="">[![Forks][forks-shield]][forks-url]</a>
  <a href="">[![Stargazers][stars-shield]][stars-url]</a>
  <a href="">[![Issues][issues-shield]][issues-url]</a>
  <a href="">[![MIT License][license-shield]][license-url]</a>
</div> -->

<div align="center">
  <h1>Node.JS Youtube Practice</h1>
</div>

<!-- BUILT WITH -->

## About The Project

# Gestión de usuarios

## Resumen

Desarrollar una aplicación para la gestión de usuarios de una aplicación web.

La comunicación con la aplicación se deberá realizar a través de una API REST (HTTP).
La aplicación persistirá los datos, de forma que si se para todos los cambios deberán permanecer guardados

El objetivo de esta aplicación es practicar los conceptos que hemos ido desarrollando a lo largo de la serie de videos del curso de Node.

La idea es que utilicéis las herramientas que hemos ido viendo a lo largo de los videos, pero dejo la práctica abierta a modificaciones y ampliaciones

## Definición de entidades

- **Usuario**: Usuario registrado en la plataforma, todos los campos son obligatorios.
  - Nombre: Mínimo de 2 caracteres y un máximo 20 (Todos los caracteres serán válidos)
  - Apellidos: Mínimo de 4 y máximo de 50 (Todos los caracteres serán válidos)
  - Email: Deberá cumplir el [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt)
  - Contraseña: Mínimo de 10 caracteres y máximo de 25 (Al menos una minúscula, mayúscula y un número)

## Requisitos funcionales

- El usuario podrá registrarse en la aplicación, introduciendo los datos necesarios.
  - El email debe ser único por cada usuario.
- El usuario podrá autenticarse ante la aplicación utilizando su email y contraseña.
  - Si la autenticación es válida, la aplicación le devolverá al usuario un identificador que le servirá para demostrar su identidad ante la aplicación cuando quiera cambiar/eliminar sus datos.
- El usuario podrá obtener todos sus datos exceptuando su contraseña, utilizando su identificador.
- El usuario podrá actualizar su nombre y apellidos, será necesario el identificador.
- El usuario podrá actualizar su email, será necesario el identificador y la contraseña actual.
- El usuario podrá actualizar su contraseña, será necesario el identificador y la contraseña actual.
- El usuario podrá eliminar todos sus datos de la plataforma, será necesario el identificador y la contraseña actual.

## Requisitos no funcionales

- La aplicación deberá poderse ejecutar con la versión LTS de Node.JS(16).
- Se puede utilizar cualquier base de datos, aunque es recomendable utilizar Mongo.DB ya que es la que hemos explicado en los videos.

<!-- BUILT WITH -->

## Built With

A number of tools have been added to improve the development experience and provide a good structure for any type of project.

- [ESLint](https://eslint.org/) -> Statically analyzes your code to quickly find problems
- [Standard.js](https://standardjs.com/) -> Configuration template for ESLint
- [Prettier](https://prettier.io/) -> Opinionated code formatter
- [Nodemon](https://www.npmjs.com/package/nodemon) -> Simple monitor script for use during development
- [Lint-staged](https://www.npmjs.com/package/lint-staged) -> Runs linter and formatter before commits

<!-- USAGE -->

## Usage

```
👍 Click on USE THIS TEMPLATE button 👍
```

In this way you will create your project based on the following template

After creating the repository and cloning it locally

```bash
npm i
```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.
