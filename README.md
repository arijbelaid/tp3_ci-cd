<div align="center">
  <h1>☁️ TP3 : CI/CD avec GitHub Actions et Render</h1>
  <p><strong>Pipeline d'Intégration Continue (CI) et de Déploiement Continu (CD)</strong></p>
  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</div>

<br>

> **Objectif :** Mettre en place une usine logicielle (CI/CD) complète pour une application Node.js/Express/TypeScript. Chaque `git push` déclenche des tests automatisés, et le déploiement sur Render n'a lieu que si les tests passent.

<div align="center">
  <br>
  🔗 <strong>Application en production :</strong> <a href="https://tp3-ci-cd.onrender.com">https://tp3-ci-cd.onrender.com</a>
  <br><br>
  📄 <strong><a href="./TP3_partie1.pdf">Télécharger le rapport complet du TP3 (PDF)</a></strong>
  <br><br>
</div>

---

## 🚀 1. Préparation Locale et Premier Déploiement

### Vérification de l'environnement
Installation des dépendances (`npm ci`) et lancement de l'application en local.
![Setup Local](captures/01-setup-local.png)

### L'application en local
L'application tourne correctement sur le port 3000 de la machine locale.
![App Locale](captures/02-app-locale.png)

### Ajout du script de vérification
Ajout de la commande `verify` dans le `package.json` pour automatiser le typecheck, les tests et le build.
![Package JSON](captures/03-package-json.png)

### Test de la commande verify
Exécution locale réussie de la commande `npm run verify`.
![NPM Verify](captures/04-npm-verify.png)

### Premier envoi sur GitHub
Initialisation du dépôt Git et `push` du code source sur la branche `main`.
![Push Initial](captures/05-git-push-initial.png)

### Création du service sur Render
Configuration du Web Service sur la plateforme Render, connecté au dépôt GitHub.
![Création Render](captures/06-render-create.png)

### Logs de déploiement
Le premier déploiement est un succès, le service est marqué comme "Live".
![Render Deploy](captures/07-render-first-deploy.png)

### L'application en production
Le site est accessible publiquement via l'URL fournie par Render.
![App Render](captures/08-render-app.png)

---

## ⚙️ 2. Mise en place de l'Intégration Continue (CI)

### Configuration du Workflow
Création du fichier `.github/workflows/ci.yml` pour définir les étapes de la CI sur GitHub Actions.
![GitHub Actions YML](captures/09-github-actions-yml.png)

### Création de la Pull Request
Ouverture d'une PR pour déclencher le pipeline et vérifier le bon fonctionnement des tests.
![PR Créée](captures/10-pr-created.png)

### Validation du pipeline
Les tests passent au vert, la Pull Request est mergée dans la branche principale.
![PR Mergée](captures/11-pr-merged.png)

---

## 🛡️ 3. Sécurisation et Automatisation du Déploiement

### Configuration de l'Auto-Deploy
Sur Render, le déploiement est configuré sur `After CI Checks Pass` (déployer uniquement si la CI passe).
![Auto Deploy](captures/12-render-autodeploy.png)

### Protection de la branche main
Création d'un *Ruleset* sur GitHub bloquant les merges si le check `Verify` n'est pas validé.
![GitHub Ruleset](captures/13-github-ruleset.png)

### Modification de l'application
Ajout de texte dans le code source (`src/app.ts`) pour tester le flux de travail complet.
![Update App](captures/14-app-ts-update.png)

### Push de la mise à jour
Envoi des modifications sur une nouvelle branche pour créer une Pull Request.
![Push Update](captures/15-git-push-update.png)

---

## 🚦 4. Démonstration d'un Échec de Test

### Blocage par la CI
Introduction volontaire d'une erreur : le test échoue (croix rouge) et le bouton "Merge" est bloqué.
![PR Echouée](captures/16-pr-failed.png)

### Correction du code
Ajout de la route manquante (`/api/version`) dans le code pour corriger l'erreur.
![Fix App](captures/17-app-ts-fix.png)

### Succès du pipeline
La correction fait repasser le test au vert, permettant ainsi de merger la Pull Request.
![PR Réussie](captures/18-pr-passed.png)

### Vérification de l'API
Test du nouvel endpoint déployé en production, qui renvoie bien le JSON attendu.
![API Version](captures/19-api-version.png)

---

## 🔍 5. Environnements de Prévisualisation (Previews)

### Activation des Previews
Configuration de Render pour générer automatiquement des environnements temporaires pour les Pull Requests.
![Render Previews](captures/20-render-previews.png)

### URL de Preview
L'environnement de prévisualisation affiche le nouveau texte ("Test Preview Final") de manière isolée.
![URL Preview](captures/21-preview-url.png)

### URL de Production
La production conserve l'ancienne version du site tant que la Pull Request n'est pas mergée.
![URL Production](captures/22-production-url.png)

---
*Réalisé par [Arij Belaid](https://github.com/arijbelaid) dans le cadre du cours de DevOps.*
