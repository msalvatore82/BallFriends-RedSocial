#  <div align="center" > ![image](/src/Asset/logoconletras.png) ![image](/src/Asset/MERN.png) </div> 


## Índice

- Sobre el proyecto
  - Instalacion y despliegue
  - Tecnologias Usadas
  - Requerimientos
  - Desafios que se presentaron
  - Autor

## Sobre el proyecto

En este proyecto se unifica todo lo aprendido durante el bootcamp en the bright talent valencia.  
En este proyecto se desarrollará una red social en la que los usuarios se registrarán, logearán y publicarán utilizando la API de la red social que creó anteriormente.


### 💫 Instalacion y despliegue

Para descargar el repositorio, en Visual Studio, abra una terminal y ejecute el siguiente comando:

BallFriends frontend:

```
$ git clone https://github.com/msalvatore82/BallFriends-RedSocial.git
```

A continuación, deberá descargar los módulos externos. Para hacer esto, ejecute el siguiente comando:

```
$ npm i
```

Luego, inicie la interfaz React-redux.

```
$ npm start
```
<p align="center" > Ahora podrá navegar a través de la interfaz </p>


### 💻 Tecnologias usadas

- HTML
- Sass
- React
- Redux
- React-Router
- NodeJS
- MongoDB
- Sequelize
- VERCEL / AWS Web Service (Para el despliegue)
- Axios
- Ant-Design
- Guards

### ⚔️ Requisitos

Crear el Frontend de la API desarrollado con ateorioridad.

- Registro de usuarios.
- Login de usuarios.
- Que se pueda ver las publicaciones y crear nuevas.
- Que se puedan editar y eliminar las publicaciones que hace el usuario logeado
- Dar/quitar Like a post.
- Buscador de perfiles de usuario o de posts
- Que en tu perfil puedas ver tus datos y tus posts
- Que puedas comentar en las publicaciones
- El usuario puede dar likes a los comentarios de los posts.
- El usuario en su perfil puede ver el número de seguidores y número de a cuantos sigue
- El usuario puede ver quien le sigue y a quién sigue
- El usuario en su perfil puede ver los posts a los que le ha dado like
- Implementación de guards

#### ⚔️ Componentes mínimos:

- Register
- Login
- Home
- Posts(publicaciones)
    - Post
    - AddPost
- PostDetail
    - AddComment
- Perfil. Vista perfil con los datos del usuario logeado y sus posts
- Header
- Footer

## Desafios que se presentaron

En la etapa de maquetación diseñé un estructura que con el pasar del tiempo se fue volviendo inviable, empecé a tener muchos problemas de relaciones, por lo tanto tuve que repensar el mapeo de la misma y corregir los errores cometidos.
Al principio me costó mucho tiempo entender el flujo de la información entre componentes, y como traer y llevar la información, una vez que logre descifrar el flujo y las herramientas, los componentes fueron fluyendo.
Otro de los desafíos que me surgió fue la de debuggear sin errores a la vista, ya que tuve algunos bugs que no se mostraban por consola.
Creo que el mayor desafío que se me presento fue la de trabajar solo, sin la ayuda de los tutores, pero hemos tenido algunas charlas con #[Alex](https://github.com/radikalex)  que me ayudó mucho en un parón importante que tuve.

## Implementacion a futuro

- El usuario puede seguir a otros usuarios y tener seguidores
- CRUD de los comentarios
- Que solo puedas editar y eliminar los comentarios que tu creas.
- El usuario puede subir fotos en los posts o cambiar su foto de perfil.
- Que sea responsive

<!-- Si QUIERE CONTRIBUIR -->

## contribuir

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas es **muy apreciada**.

Si tiene una sugerencia que mejoraría esto, bifurque el repositorio y cree una solicitud de extracción. También puede simplemente abrir un problema con la etiqueta "mejora".
¡No olvides darle una estrella al proyecto! ¡Gracias de nuevo!

1. Bifurcar el proyecto
2. Cree su rama de características (`git checkout -b feature/YourName`)
3. Confirme sus cambios (`git commit -m 'Add some YourName'`)
4. Empuje a la sucursal (`git push origin feature/YourName`)
5. Abra una solicitud de extracción

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- LICENCIA -->
## Licencia

Este proyecto está bajo licencia de Matias Salvatore

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


## Authors

### [Matias](https://github.com/msalvatore82)
