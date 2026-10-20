
  <h1>☁️ TP3 : CI/CD avec GitHub Actions et Render</h1>
  <p><strong>Pipeline d'Intégration Continue (CI) et de Déploiement Continu (CD)</strong></p>
  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</div>

<br>

> **Objectif :** Mettre en place une usine logicielle (CI/CD) complète pour une application Node.js/Express/TypeScript.

<div align="center">
  <br>
  🔗 <strong>Application en production :</strong> <a href="https://tp3-ci-cd.onrender.com">https://tp3-ci-cd.onrender.com</a>
  <br><br>
  📄 <strong><a href="./TP3_partie1.pdf">Télécharger le rapport complet du TP3 (PDF)</a></strong>
  <br><br>
</div>

---

## 🚀 1. Préparation Locale et Premier Déploiement

![Setup Local](captures/01-setup-local.png.jpg)
![App Locale](captures/02-app-locale.png.jpg)
![Package JSON](captures/03-package-json.png.jpg)
![NPM Verify](captures/04-npm-verify.png.jpg)
![Push Initial](captures/05-git-push-initial.png.jpg)
![Création Render](captures/06-render-create.png.jpg)
![Render Deploy](captures/07-render-first-deploy.png.jpg)
![App Render](captures/08-render-app.png.jpg)

---

## ⚙️ 2. Mise en place de l'Intégration Continue (CI)

![GitHub Actions YML](captures/09-github-actions-yml.png.jpg)
![PR Créée](captures/10-pr-created.png.jpg)
![PR Mergée](captures/11-pr-merged.png.jpg)

---

## 🛡️ 3. Sécurisation et Automatisation du Déploiement

![Auto Deploy](captures/12-render-autodeploy.png.jpg)
![GitHub Ruleset](captures/13-github-ruleset.png.jpg)
![Update App](captures/14-app-ts-update.png)
![Push Update](captures/15-git-push-update.png.jpg)

---

## 🚦 4. Démonstration d'un Échec de Test

![PR Echouée](captures/16-pr-failed.png.jpg)
![Fix App](captures/17-app-ts-fix.png.jpg)
![PR Réussie](captures/18-pr-passed.png)
![API Version](captures/19-api-version.png.jpg)

---

## 🔍 5. Environnements de Prévisualisation (Previews)

![Render Previews](captures/20-render-previews.png.jpg)

**URL de Preview :**
![URL Preview](captures/21-preview-url.png.jpg)

**URL de Production :**
![URL Production](captures/22-production-url.png.jpg)

---
*Réalisé par [Arij Belaid](https://github.com/arijbelaid) dans le cadre du cours de DevOps.*
