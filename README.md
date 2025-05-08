# Ejemplo de Github Actions para Servidores FACE UBB

Este es un proyecto sencillo en Node.js que renderiza una página web con un mensaje de prueba. Ademas presenta un ejemplo de workflow de github action para realizar pruebas y despliegues a los sevidores locales de la FACE UBB.

## Estructura del Proyecto

```
.
├── .github
│   └── workflows
│       └── deploy-production.yml # Workflow para subir a produccion.
├── src
│   ├── index.js          # Punto de entrada de la aplicación
│   ├── index.test.js     # Pruebas automáticas
│   └── views
│       └── index.html    # Página HTML que se renderiza
├── package.json
├── .gitignore
└── README.md
```

## Requisitos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.
Para trabajar en el workflow desde VSCode es recomendable instalar la extensión "Github Actions". Tambien se puede trabajar directamente en el editor de [Github](https://github.com)

## Instalación y ejecución

1. Clona el repositorio o descarga el código fuente.
2. Navega al directorio del proyecto:
   ```
   cd ejemplo-github-actions-ubb
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Para iniciar la aplicación, ejecuta el siguiente comando:
   ```
   npm start # Por defecto en "http://localhost:5020"
   ```
5. Para iniciar los tests, ejecuta el siguiente comando:
   ```
   npm test
   ```

## Workflow

Para conectarse a los servidores de la FACE UBB es necesario conectarse a la VPN de la misma. Para mas detalle de la coneccion test y despliegue automatico revise el workflow presente en [.github/workflows/test_deploy_faceubb.yml](.github/workflows/test_deploy_faceubb.yml).
