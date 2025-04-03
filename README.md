Based on [Electron Boilerplate](https://electron-react-boilerplate.js.org/docs/installation)

# Présentation

Ce projet a été réalisé dans le but de faire un [démonstrateur du véhicule Mobilize](https://drive.google.com/file/d/1M3qePveVEeYzz_DMiIxxZkllEe9W8Yuc/view?usp=sharing) dans les salons automobiles.

Comportement attendu de l'application : sous la forme d'un executable Windows, le projet doit proposer une application qui se lance au démarrage de Windows, en plein écran, sous les dimensions 1080x1920, sans possibilité pour l'utilisateur de fermez cette dernière.

# Installation

```bash
git clone git@github.com:peytanque/Mobilize.git
cd Mobilize
npm install
```

# Avant toute chose : ajout des Assets
Afin que le projet fonctionne, il vous sera **impératif de fournir les vidéos** que celui-ci requiert.

Pour se faire, rendez vous sur mon Drive personnel [en cliquant ici](https://drive.google.com/drive/folders/1mB1k1Tc1OJdbr0XTXw6fmVL7Li4USc1Q?usp=sharing)

Une fois téléchargées, glissez les dans le dossier `src/renderer/assets/videos`


***Il n'est pas dit qu'à l'avenir je vide mon Drive, il pourrait être donc judicieux de stocker ses vidéos dans un endroit plus adapté.***

# Bon à savoir
Ce projet n'est pas responsive.

Lorsque vous lancerez l'application, une première fenêtre appraitra. Elle correspond au comportement attendu sur les écrans tactiles. La définition de son comportement est présent dans le fichier `src/main/main.ts`

Dans le cas d'un développement local, cette fenêtre vous est inutile femez celle-ci à l'aide de **⌘ + Q** ou **Alt + F4** puis lancez votre navigateur préféré.

## Développer en local

Rendez vous sur l'url `http://localhost:1212`, clic droit "inspecter" et dans l'en tête des dimensions définissez `1080 x 1920` ainsi que le pourcentage à `"ajuster à la fenêtre"`.

## Curseur

Commenter/Décommenter `cursor: none;` depuis le fichier `src/renderer/App.css` en fonction de votre besoin :

- Conserver pour l'export. Vous ne souhaitez pas qu'un curseur apparaisse sur un écran tactile
- Commenter le lorsque vous développez afin qu'il soit visible dans votre navigateur

## Stack technique en vrac
- **Electron**
- **Typescript**
- **React Player** : player video custom
- **React Router** : routing de l'app
- **React Idle Timer** : redirection automatique
- **Material UI & Emotion** : slider de progression du player video
- **i18n** : traduction

# Lancement en local

Une fois que vous vous eêtes assuré d'avoir importé les vidéos, vous pouvez lancer le projet localement à l'aide de la commande

```bash
npm start
```

# Export

Assurer vous que le curseur n'est pas visible avant d'exporter.

```bash
npm run package:windows
```

Afin de récupérez votre éxécutable rendez vous dans le dossier `release/build`, ce dernier devrait être accesible sous le nom `Mobilize Setup 4.6.0.exe`
