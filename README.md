<div align="center">
  <h1>☁️ TP3 : CI/CD avec GitHub Actions et Render</h1>
  <p><strong>Pipeline d'Intégration Continue (CI) et de Déploiement Continu (CD)</strong></p>
  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</div>

<br>

> **Objectif :** Mettre en place une usine logicielle (CI/CD) complète pour une application Node.js/Express/TypeScript. Chaque `git push` déclenche des tests automatisés, et le déploiement sur Render n'a lieu que si les tests passent. L'environnement inclut également des déploiements de prévisualisation (Previews).

<div align="center">
  <br>
  🔗 <strong>Application en production :</strong> <a href="https://tp3-ci-cd.onrender.com">https://tp3-ci-cd.onrender.com</a>
  <br><br>
  📄 <strong><a href="./TP3.pdf">Télécharger le rapport complet du TP3 (PDF)</a></strong>
  <br><br>
</div>

---

## 🚀 1. Préparation Locale et Premier Déploiement

### Initialisation du projet
Installation des dépendances et lancement de l'application en local.
![Setup Local](captures/01-setup-local.png)
![Setup Local](captures/01-setup-local1.png)
![Setup Local](captures/01-setup-local3.png)
![Setup Local](captures/01-setup-local4.png)

![App Locale](captures/02-app-locale.png)

### Ajout de la commande de vérification
Ajout du script `verify` dans le `package.json` pour lancer les tests, le typecheck et le build.
![Package JSON](captures/03-package-json.png)
![NPM Verify](captures/04-npm-verify.png)

### Premier Push et Déploiement Render
Envoi du code sur GitHub et création du service Web sur Render.
![Push Initial](captures/05-git-push-initial.png)
![Création Render](captures/06-render-create.png)

Le premier déploiement est un succès, l'application est en ligne !
![Render Deploy](captures/07-render-first-deploy.png)
![App Render](captures/08-render-app.png)

---

## ⚙️ 2. Mise en place de l'Intégration Continue (CI)

### Configuration de GitHub Actions
Création du workflow `.github/workflows/ci.yml` pour automatiser les tests.
![GitHub Actions YML](captures/09-github-actions-yml.png)

### Validation via Pull Request
Création d'une Pull Request pour vérifier que le pipeline fonctionne.
![PR Créée](captures/10-pr-created.png)
![PR Mergée](captures/11-pr-merged.png)

---

## 🛡️ 3. Sécurisation et Automatisation du Déploiement

### Configuration de Render
Le déploiement automatique est configuré pour ne se lancer **qu'après** le succès des tests CI (`After CI Checks Pass`).
![Auto Deploy](captures/12-render-autodeploy.png)

### Protection de la branche `main` sur GitHub
Mise en place d'un *Ruleset* exigeant que le check `Verify` passe avant de pouvoir merger.
![GitHub Ruleset](captures/13-github-ruleset.png)

### Mise à jour de l'application
Modification du code source, push sur une branche et Pull Request.
![Update App](captures/14-app-ts-update.png)
![Push Update](captures/15-git-push-update.png)

---

## 🚦 4. Démonstration d'un Échec de Test

Nous avons volontairement introduit une erreur (route `/api/version` manquante) pour prouver que le pipeline bloque le déploiement.

### Échec de la Pull Request
Le check `Verify` échoue (croix rouge) et le bouton "Merge" est bloqué par la règle de protection.
![PR Echouée](captures/16-pr-failed.png)

### Correction et Succès
Ajout de la route manquante dans `src/app.ts`, ce qui relance les tests avec succès.
![Fix App](captures/17-app-ts-fix.png)
![PR Réussie](captures/18-pr-passed.png)

### Vérification de l'API
Test du nouvel endpoint en production.
![API Version](captures/19-api-version.png)

---

## 🔍 5. Environnements de Prévisualisation (Previews)

Activation des Previews sur Render pour tester les branches avant de les fusionner.

![Render Previews](captures/20-render-previews.png)

### Comparaison Preview vs Production
L'URL de Preview affiche le nouveau texte ("Test Preview Final"), tandis que la Production garde l'ancien code tant que la PR n'est pas mergée.

**URL de Preview :**
![URL Preview](captures/21-preview-url.png)

**URL de Production :**
![URL Production](captures/22-production-url.png)

---
*Réalisé par [Arij Belaid](https://github.com/arijbelaid) dans le cadre du cours de DevOps.*
