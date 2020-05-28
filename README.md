# Pokemon API

## Getting started

Dans le dossier du projet, executer les commandes suivantes:

### `npm install`

### `npm start`

## Quelques explications

à partir du fichier [pokemon.csv](https://gist.github.com/armgilles/194bcff35001e7eb53a2a8b441e8b2c6#file-pokemon-csv-L4):

- conversion et transformation des données en json (index.js)
  * suppression de l'en-tête du fichier csv
  * rajout d'une colonne _id_

> Note:   
> J'ai essayé de gérer les id mais il se peut que selon l'ordre dans lequel vous testez il y ait des problemes lors du getById et de l'affichage de la page React.

- J'ai ajouté le fichier *Pokemon.postman_collection.json* dans le dossier data pour les requêtes sur postman.
