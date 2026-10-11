# Maison Éclat — démonstration VirtoMedia

Site vitrine fictif en français, construit en HTML, CSS et JavaScript natifs, sans backend ni abonnement.

## Fichiers
- `index.html` — contenu, métadonnées et sections
- `styles.css` — design responsive
- `script.js` — menu mobile, galerie lightbox et configuration WhatsApp
- `favicon.svg` — icône du site

## Avant de présenter le site comme site d'un client
1. Dans `script.js`, remplacez `SALON_WHATSAPP_NUMBER = "213XXXXXXXXX"` par le vrai numéro international, chiffres seulement, sans `+`, espaces ni tirets.
2. Remplacez le nom, les textes et les tarifs d'exemple dans `index.html`.
3. Remplacez la ville/adresse et les horaires par des informations confirmées. Les liens de carte ouvrent actuellement une recherche générale d'Alger, pas une adresse inventée.
4. Remplacez les photos par des photos du salon ou des images dont l'utilisation est autorisée. Les photos Unsplash actuelles sont des images d'illustration et ne représentent pas des réalisations vérifiées du salon.
5. Actualisez le titre, la description et les métadonnées Open Graph dans `index.html`.

## Publier sur GitHub Pages
1. Téléversez les quatre fichiers du projet dans la racine du dépôt GitHub.
2. Ouvrez **Settings → Pages**.
3. Choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis enregistrez.
4. Attendez que GitHub Pages fournisse l'URL publiée. Le site n'est pas publié par ce projet seul.

Les photos et polices sont hébergées à distance et nécessitent une connexion internet. Les boutons WhatsApp affichent un avertissement tant que le numéro n'a pas été configuré.
