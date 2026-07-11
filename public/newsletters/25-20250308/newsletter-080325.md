# Mars 2025

Bonjour tout le monde !

On espère que tout va pour le mieux : de notre côté, les robots commencent à prendre forme (*heureusement, c'est dans
trois mois*) !

Voilà quelques semaines que nos rythmes de vie à chacun sont établis, ce qui nous permet de caler des créneaux de
travail en groupe plus réguliers, avec de belles avancées, et des phases de tests plus courtes que celles auxquelles
nous sommes habitués depuis octobre, ce qui re-motive les troupes et apporte une belle satisfaction à nos longues
journées de labeur d'ingénieurs. Place au récit de nos récentes aventures et avancées !

![Ousmane et Martin en appel, Sébastien et Charlie au QG ](attachments/19b95a70-cb86-477f-8c19-79c508007018.jpg "right-50 =190x253")

## Le retour à l'ESCAL

Fin janvier, avant le début des stages, de chacun, nous avons contacté le club de robotique de l'ESCAL afin de
rencontrer les jeunes qui ont pris la relève pour le Trophée : une équipe plutôt intéressée par nos divers parcours,
avec pas mal d'idées. Rémi et Sébastien ont mis la main à la pâte avec des explications et de l'aide sur leurs systèmes.
Et une super photo devant l'ESCAL pour les souvenirs !

| ![](attachments/815ebe5c-b97a-4731-863c-94f337a85a3e.jpg "right-50 =190x338") | ![](attachments/d91f1070-6096-417e-8610-c73f360e7c6c.jpg "left-50 =190x338") | ![](attachments/cbf87de6-bd8d-4c37-b167-b2e649fc3693.png "left-50 =190x338") |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|

## Calibration et tests des capteurs de distance du PAMI ROS

Enfin un peu d'informatique facilement explicable !

Vous l'avez peut-être remarqué, le PAMI ROS utilise deux capteurs de distance pour faciliter la détection d'un petit mur
derrière lui (et donc éviter de tomber de la scène - *ça ferait un moins bon concert*).

![Capteurs de distance à l'arrière du robot pour détecter le mur.](attachments/c3750741-dd0b-4a19-958f-6fe4b3c719ce.png " =257x185")

L'utilisation de deux capteurs de chaque côté du robot permet de s'assurer que le robot avance bien tout droit et ne
risque pas de tomber sur un côté.

Mais… pour que cela fonctionne, il faut que le capteur donne une mesure juste (proche de la vraie valeur) et ait une
bonne fidélité (que la valeur ne change pas lorsqu'on mesure la même chose). Lorsqu'on combine ces deux
caractéristiques, on parle d'exactitude.

Seulement voilà… Lorsque le capteur est calibré à 35 cm, on obtient le graphe ci-dessous. En abscisse, la distance
réelle entre le capteur et l'obstacle et en ordonnée, la distance que le capteur mesure.

![L'écart entre les courbes orange et bleue est l'erreur de mesure.](attachments/8b52fb51-46c2-4bd5-8e0c-78aad47db6e3.png " =342x257")

Ce qui est encore plus ~~drôle~~ triste, c'est que si la calibration est faite à une autre distance (la procédure de
calibration prend en compte la distance au moment de la calibration, elle ne devrait doc pas être impactée
significativement par cette distance), la courbe des erreurs "se déplace" et donne désormais le graphe ci-dessous.

![Désormais le pic d'erreur est de 6 cm à 35 cm de distance au lieu de 11 cm à 10 cm de distance.](attachments/3b984c2e-2be0-494f-8d00-f255eb979f0f.png " =385x289")

Heureusement, il y a plusieurs possibilités d'amélioration : pour la première, le capteur utilisé avait été précédemment
modifié électroniquement, ce qui pourrait affecter la mesure, peut-être que les capteurs tout neufs seront plus justes
dans leur mesure. Pour la seconde, il est possible avec des petites fonctions mathématiques de perdre en fidélité, mais
gagner en justesse puis, en utilisant plusieurs mesures, de regagner en fidélité (magie magie !!).

*Suite au prochain épisode*

## La banderole avance à grands pas

La banderole, élément essentiel de la promotion de notre spectacle, connait de grandes avancées : plusieurs impressions
et re-designs ont eu lieu ces dernières semaines : le design montré ci-dessous n'est donc pas la version finale mais
explique bien le concept. Notre robot principal tiendra notre banderole pliée, avant de la lâcher au-dessus du rebord de
la table, pour qu'elle se déplie par la force de l'élastique qui la retient fermée à l'arrière. Le nouveau design
contient 2 bras qui se déplient symétriquement pour assurer qu'elle ne bascule pas lors de sa chute.

![première impression fonctionnelle avec accroche du tissu](attachments/955cd0cf-6d8f-467b-b813-a38d097c6d61.gif " =380x257")

Pour le contenu affiché sur la banderole, c'est en cours de réflexion et de conception, mais tous les membres de
l'équipe ont pu participer à la conception en apportant une petite idée personnelle qui y figurera.

## Validation du fonctionnement de la communication avec le servomoteur

Après quelques péripéties (beaucoup de débrouillardise), il a été possible de valider que la carte de contrôle (la
Raspberry Pi) peut contrôler les AX12 (l'un de nos types de servomoteurs) !

Pour cela, on a dû inverser la connexion de deux connecteurs pour qu'un petit "mixeur" de signal soit correctement
connecté. Ce petit "mixeur" est nécessaire puisque le AX12 n'a qu'un seul canal de communication à la fois pour recevoir
des instructions et y répondre tandis que la Raspberry Pi a un canal pour envoyer et un pour recevoir.

![Les signaux bleu et rouge se combinent pour former le signal violet en fonction du signal jaune.](attachments/36ec5713-ef5e-4bfe-98b6-f78b9c74f9a8.png " =342x424")

Ensuite, il faut faire attention à bien synchroniser les envois d'instructions. En particulier parce que la carte de
contrôle doit envoyer un 3eme signal au "mixeur" : ce signal indique lequel, entre l'envoi et la réception, doit être
utilisé. La synchronisation de ce 3eme signal est crucial : si sa valeur est changée trop tôt, l'instruction envoyée par
la Raspberry ne sera pas encore terminée (et sera coupée, donc incompréhensible pour l'AX12), tandis que si elle est
changée trop tard, ce sera le même problème mais pour la réponse du AX12 (qui sera cette fois-ci incompréhensible pour
la Raspberry).

En choisissant bien les paramètres de communication (notamment le délai de réponse du AX12), on peut obtenir la
communication sur l'image ci-dessous.

![Le signal jaune décide si c'est la Raspberry pi ou l'AX12 qui envoie (l'autre écoute). S'il est en haut alors c'est la Raspberry Pi qui envoie l'instruction. Le signal violet est le signal pour envoyer et recevoir les instructions.](attachments/50ec0ef3-db46-4581-bd91-3b58ad2b343d.png " =428x181")

Ainsi, la première instruction est celle envoyée par la Raspberry Pi. Une fois décodée, on lit FFFF040201F8.
Chaque groupe de 2 "chiffres" a une signification particulière, par exemple 04 est l'identifiant du moteur et 01 est l'
action à réaliser. Dans le cas présent, ce message peut se traduire par "moteur n°4 tu es là ?". Le moteur répond alors
FFFF040200F9, voulant dire "moi, moteur n°4, je vais bien". Toute cette communication va très vite, ici l'envoi et la
réponse prennent 0,00011 seconde, et le délai entre la fin de l'envoi et la réponse est de 0,00039 seconde.

Avec toutes ces vérifications, on est parés pour faire tourner le moteur (voir ci-dessous) ! Cela permet aussi de
vérifier que la carte électronique envoie bien les bonnes tensions (en Volts) et intensité (en Ampères).

![](attachments/a710ed13-4799-4491-80cd-3e06502ffe32.gif " =200x200")

Cette fois-ci, pas de Mékèquecé : on a déjà raconté plein de choses !

Merci pour votre lecture attentive :)

A très vite,

Les CDROMS 📀