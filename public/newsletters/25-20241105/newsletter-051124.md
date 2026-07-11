# Novembre 2024

Bonjour à tous,

Nous vous présentons aujourd'hui la première édition *(et avec un peu de chance pas la dernière)* des newsletters ! En
effet, l'année a commencé il y a un peu plus d'un mois pour nous, et il est temps de faire le point sur les objectifs de
l'année et les avancements de chacun.

![Logo "The Show Must Go On" de l'édition 2025](attachments/6d56f2ec-141a-4f24-9732-9f99f7f4cca4.png "right-50 =121x171")

[Le règlement](https://www.eurobot.org/wp-content/uploads/2024/10/Eurobot2025_Rules.pdf) de la Coupe de France de
Robotique édition 2025 est paru en septembre. Le thème de l'année est "The Show Must Go On", les actions sont donc en
rapport avec l'organisation d'un concert. À partir du règlement, nous avons pu déterminer les actions à effectuer en
priorité, en fonction de leur complexité à nos yeux et du nombre de points rapportés.

Ci-dessous, vous trouverez les visuels de la table de jeu de cette année :

| ![](attachments/1bc291d7-25e9-481e-ab24-fcf179f0ddfc.png " =253x109") | ![](attachments/a6aa7bb4-b5a8-44c0-8b61-0b0d4a27d814.png " =211x135") | ![](attachments/3c79c881-83ec-4a35-a390-0987424d5075.png " =253x78") |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------|----------------------------------------------------------------------|

Les actions listées ci-dessous sont nos priorités, pour leur rapport complexité-apport de points.

### Banderole

La banderole (dimensions : 50 cm de long, 25 cm de haut, minimum) est déployée au début du match sur le devant de la
table appartenant à notre équipe. Elle fait donc partie du périmètre non-déployé du robot.

Les premières idées reprenaient le concept des tentes dépliables Decathlon, comme expliqué ci-dessous.

![](attachments/713119d0-90c1-4947-b24c-4e6bd1c62ed8.png " =338x215")

Ce design a été abandonné après avoir remarqué que les arceaux ne seraient pas assez flexibles, d'autres pistes de
réflexion ont été creusées, notamment avec plusieurs parties métalliques reliées par des élastiques, suivant ce
principe : les bras de la banderole seront repliés dans le périmètre de départ du robot, puis relâchés lorsque le robot
arrive au bord de la table, pour former la banderole entière, le tissu enroulé jusqu'alors se déroulera et notre
banderole sera prête.

| ![Idée des bras replié et déplié avec des elastiques.](attachments/71ab6f68-04b4-4d74-a5eb-a869f71301a1.png " =191x291") | ![L'idée appliquée sur un prototype en carton (avec un peu de chance seulement au sens propre et pas au sens figuré).](attachments/a4d622e1-ce03-4fe1-8747-615d3ff921e0.gif " =169x301") |
|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

### Groupies

Les groupies sont des petits robots qui, après la 85ᵉ seconde, doivent, en 15s, se déplacer de la zone 4 de l'équipe
jusqu'au-devant de la scène. Une fois arrivés devant la scène, ils doivent activer un actionneur visible depuis le
public.

![Haut de la table avec les zones 4 des deux équipes (départ des groupies) et les trois zones (a, b et c) devant la scène (arrivé des groupies)](attachments/d1ac5f01-ce37-433f-b7c8-3288275a1cc7.png " =802x219")

Initialement, réaliser cette action n'était pas prévu *(surtout pour des raisons budgétaires)* mais après réflexion,
elle paraît faisable en utilisant les pièces que l'on a déjà en stock *(et rapporte beaucoup de points)*.

On a donc décidé de partir sur un petit robot (pour laisser le plus de place possible à la superstar) utilisant des
petits moteurs, un petit servomoteur, un capteur ultrason et des Arduinos.

| ![Des petits moteurs (un peu nuls mais qui feront largement l'affaire).](attachments/33155cc1-0736-45fb-8da5-ea2f966dd7a1.png " =191x191") | ![Petit servomoteur pour faire bouger un actionneur après la 100ᵉ seconde.](attachments/274c35c3-2434-4756-b311-e76a19df66b2.png " =191x191") | ![Capteur ultrason qui permet de calculer la distance à l'obstacle le plus proche devant le robot (pour éviter de rentrer dans un autre robot).](attachments/884deb27-5571-4e48-9b1e-d295cd0758a1.png " =169x169") | ![La carte Arduino programmable qui contrôlera le robot](attachments/00f22b5d-70e9-442c-96cb-9eec07f952e7.png " =191x191") |
|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|

Tous ces composants mis ensemble donnent une première version du modèle 3D pour le robot:

![Le servomoteur et le bouton d'arrêt d'urgence n'ont pas encore été ajoutés.](attachments/d07af23f-a4d8-4cc7-b9c3-c1dec43dc385.png " =573x457")

### Superstar

La superstar est aussi un robot qui, après la 85ᵉ seconde, en 15s, part depuis la zone 4 de l'équipe, mais elle doit
cette fois-ci rejoindre la scène (une plateforme surélevée de 5,5 cm). Pour marquer un maximum de points, elle doit être
au plus proche du bord de la scène.

![L'accès à la scène de l'équipe jaune](attachments/daf4bfd8-9d61-4100-8480-2e537e2b84ea.png " =255x286")

L'idée pour ce robot est d'utiliser, à l'arrière, deux capteurs de distance infrarouge _(même principe de fonctionnement
que les ultrasons, mais avec de la lumière)_. Pour pouvoir mesurer une distance, un mur serait ajouté dans la partie de
calcul déporté pour avoir un obstacle à détecter.

![La scène et, en jaune et bleu, derrière la scène, la zone de calcul déporté des deux équipes.](attachments/537ac060-92c9-4a1d-9027-45a517ac186e.png " =573x214")

### Le robot principal

Son rôle principal est de déposer la banderole en début de match, et idéalement pousser des conserves surmontées d'une
planche en bois dans des zones de construction pour former des estrades, ainsi que de finir en zone d'arrivée (zone n°2)
avant la fin du match, c'est-à-dire avant la 100ᵉ seconde écoulée.

La conception du PCB du robot principal _(qui sera aussi utilisé par la superstar)_ est quasiment terminé !

| ![](attachments/de9b1b12-7366-47b0-83dc-5e96feb03d4d.png " =319x301") | ![](attachments/92d44062-ed48-474e-a511-02007a66efe1.png " =446x285") |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------|

Concernant le modèle 3D, il a été décidé de se concentrer sur les robots secondaires (groupies et superstar) le temps de
prototyper la banderole. Enfin, le début des tests du code du robot principal vont très bientôt commencer.

![Le branchement des composants en préparation des tests.](attachments/f19056bc-a739-471c-81bb-a394bdfda197.png " =295x235")

Et c'est sur ceci que la newsletter se termine ! On espère qu'elle aura été intéressante à lire et on vous remercie de
nous avoir lu !

*À bientôt,*

Les CDROMS 📀
