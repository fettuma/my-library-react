#  MyLibrary – Gestion de Bibliothèque

##  Description
MyLibrary est une application web développée avec **React** et **Redux Toolkit** permettant de gérer une bibliothèque scolaire.

L’application permet :
- de consulter et rechercher des livres via l’API OpenLibrary,
- d’ajouter des livres manuellement via un formulaire,
- de visualiser les détails complets d’un livre,
- de marquer des livres comme lus,
- d'effectuer un achat simulé via Stripe,
- d’afficher des statistiques de lecture (nombre de livres lus, pages cumulées).

Ce projet a été réalisé dans le cadre d’un **mini-projet académique** en respectant une architecture **SPA (Single Page Application)**.

---

##  Technologies utilisées
- React (composants fonctionnels & Hooks)
- React Router
- Redux Toolkit
- Stripe API
- Node.js / npm
- API OpenLibrary
- CSS (design minimaliste, sans framework)

---

##  APIs utilisées
 **OpenLibrary API**
  - Recherche de livres
  - Récupération des informations (titre, auteur, description)
 **OpenLibrary Covers API**
  - Récupération dynamique des couvertures via coverId
 **Stripe API**
  - Intégration d’un bouton Purchase
  - Simulation de paiement sécurisé
  - Redirection vers Stripe Checkout

---

##  Installation et Lancement

1. Cloner le dépôt :
```bash
git clone https://github.com/fettuma/my-library-react.git

2. Accéder au dossier du projet :
cd react-library-app

3. Installer les dépendances :
npm install

4. Lancer l’application :
npm start

5. Ouvrir l’application dans le navigateur :
http://localhost:3000


## Team Members :
- Yasmine : UI components, styling, static pages     https://github.com/Yaasmiiine
- Fatima : Redux logic, core pages        https://github.com/fettuma

## Live Demo: 
https://my-library-react.vercel.app/