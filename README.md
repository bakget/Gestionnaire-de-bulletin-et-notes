# SMART BNEPP — Bulletins de Notes des Enseignants du Préscolaire et du Primaire

## Minimum nécessaire
Le dépôt n'a besoin que de `index.html` (racine) et `.github/workflows/build.yml` : le build crée lui-même `package.json`, `capacitor.config.json`, l'icône et embarque la clé de signature. Les autres fichiers du zip sont facultatifs.

## Générer l'APK
1. Créez un dépôt GitHub **public** (les liens de téléchargement, l'annonce et les archives doivent être lisibles par les utilisateurs) et envoyez-y tout ce dossier (y compris `.github`, `signing`, `version.txt`, `annonce.json`).
2. Dépôt > Settings > Secrets and variables > Actions > New repository secret : nom `SIGNING_PASSPHRASE`, valeur = la phrase secrète fournie avec ce projet (elle déchiffre la clé de signature `signing/debug.keystore.enc`). Ne la publiez jamais.
3. Onglet Actions > « Build APK » > Run workflow. Version vide = automatique (V2.0.0, puis V2.0.1...). Pour imposer un numéro : saisissez-le (ex. V2.1.0).
4. L'APK et le ZIP sont publiés dans « Releases ».

## Administration (dans l'application)
- Annonce de mise à jour : version, liens, message, « Publier sur GitHub ».
- Zone d'archives : ajout de documents, publication du catalogue (`archives.json`), validation des paiements et codes de déblocage.
- Jeton GitHub (créé par vous) : droits « Contents : lecture/écriture » limités à ce dépôt ; il reste sur l'appareil de l'administrateur.

## Hors ligne et GitHub Pages
- **APK** : tout est embarqué (bibliothèques PDF, lecteur de documents) : fonctionne sans réseau.
- **Fichier « -hors-ligne.html »** (dans Releases) : application en un seul fichier, entièrement autonome ; ouvrez-le dans Chrome, même sans Internet.
- **Site GitHub Pages** (facultatif) : Settings > Pages > Source : « GitHub Actions ». Le site s'installe comme une application (menu Chrome > Installer) et fonctionne ensuite hors ligne.
- Seuls l'envoi WhatsApp/e-mail, la réception des annonces/catalogue et la publication GitHub demandent du réseau.

## Impression
Boutons « 👁 Aperçu », « 🖨 Imprimer » et « ⬇ PDF » sur la feuille d'évaluation, la moyenne annuelle et les bulletins. Dans l'APK, « Imprimer » ouvre l'aperçu d'impression d'Android (choix de l'imprimante ou « Enregistrer au format PDF »). Si l'export PDF échoue, l'impression s'ouvre automatiquement.
