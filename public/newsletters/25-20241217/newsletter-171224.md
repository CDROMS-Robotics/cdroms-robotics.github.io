# Décembre 2024

Bonjour à tous !

Nous vous souhaitons la bienvenue dans cette nouvelle newsletter des CDROMS. Quelques semaines se sont écoulées
depuis la dernière édition, et nous avons utilisé ce temps à bon escient : le projet avance de tous les côtés !

### Identité visuelle

On a choisi pour nom d'équipe CDROMS, et avec ce p'tit nom, voici le tout nouveau logo de l'équipe :

![Le nouveau logo CDROMS](attachments/97c36253-610d-435e-b783-4fee4687f567.png " =418x418")

Un subtil mélange entre un disque et un engrenage, le tout orné d'un mignon visage souriant. Peut-être que cette petite
bouille pourrait même avoir un nom prochainement ? En attendant, il reste très content d'avoir pu trouver sa place au
sein du PCB principal :

![Le logo sur le PCB](attachments/223fb9e3-fb36-4319-b0f7-ccded3fc8caa.png)

### Banderole

Du côté de la banderole, quelques avancées sont à souligner : le design décrit lors de la première newsletter a été
modifié pour mieux correspondre à nos contraintes, et des tests d'impression 3D ont été effectués, afin de modifier à
nouveau le design pour mieux coller à nos besoins. Il ne restera donc que des tests de déploiement pour s'assurer que la
banderole s'ouvre correctement et qu'elle est assez solide. Les différentes étapes (modélisation et tests d'impression
3D) sont décrites ci-dessous :

| ![Le design : 2 bras reliés par un pivot, avec des attaches à une extrémité pour accrocher l'élastique afin de déployer la banderole](attachments/cb04eeda-a9d6-4f85-8523-663ba832a900.png " =228x433")           | ![Les impressions 3D : tests sur la partie pivot, impression de tronçons de 5cm pour vérifier le modèle](attachments/25364bf6-fefd-4326-9120-03c9e2b46183.png " =342x437")                                                                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](attachments/3ddf656c-820a-435e-89b5-efac0b7350f5.png " =304x215") ![Améliorations pour la partie pivotante (haut) et la partie pivot (bas)](attachments/e62d0c29-7205-4264-82fd-6ed31e7fa008.png " =304x181") | ![Les impressions 3D : ajout d'une partie bloquante afin d'arrêter la rotation de la banderole, déplacement du sillon sur le pivot pour garder l'élastique autour des bras](attachments/f3a687e2-d9f4-46b3-9a56-d34a691c3c0c.png " =380x376") |

### PAMI ROS

Pour le PAMI ROS (celui qui sera notre superstar), la modélisation a bien avancé ! Il ne manque plus qu'à mettre à jour
le modèle des roues, ajouter deux-trois boutons et un actionneur qui tournera à la fin du match (pour valider l'action)
et le tour est joué. En parallèle, les impressions 3D des pièces vont pouvoir commencer, ce qui permettra ensuite de
faire des tests plus poussés de navigation et du code.

![Le magnifique PAMI ROS](attachments/3587c61f-687d-460b-a6b8-453b98449819.png " =385x279")

### PAMI Arduino

Quant aux PAMIs Arduino (ceux qui feront les groupies), les tests du code ont commencé. Il y a encore des améliorations
à y apporter, mais ça avance petit à petit. Malheureusement, il n'y a pas grand-chose de visuel à montrer…

![Je recommande le shampooing de Rémi. Ah et, en jaune, les moteurs ; au milieu entouré de fils, le contrôleur des moteurs ; à droite, la carte Arduino.  ](attachments/27d247cf-31d4-410e-93e1-ba389ae342c5.png " =453x330")

### Mékèquecé *ROS*

:::info
Comme il n'est pas toujours très facile de trouver des choses visuelles et parlantes pour le code du robot, *Mékèquecé*
*(mais
qu'est-ce que c'est)* une section qui tente de vulgariser des sujets en lien avec le développement du code du
robot.
:::

ROS a déjà été mentionné plusieurs fois, voici donc une courte explication de ce que c'est et à quoi ça sert. ROS 
(*Robot Operating System*) est, formellement, un *middleware*. Comprendre un logiciel, entre le système d'exploitation
(par exemple Windows, Linux ou MacOS) et d'autres logiciels, qui simplifie la communication de ces logiciels entre eux.
Et… c'est à peu près tout ! Utiliser ROS2 (la "2ᵉ" version de ROS) n'ajoute qu'un formalisme pour "découper" les
différentes tâches que le robot doit effectuer et des protocoles pour faire communiquer ces différentes tâches.

Par exemple, l'une des tâches que le robot doit effectuer est de contrôler les moteurs des roues. Il y a donc une tâche,
que ROS appelle *node*, qui écoute sur un canal de communication les commandes de direction du robot. Quand cette node
reçoit un message disant "Tout droit avec une vitesse de 10 cm/s", elle calcule la vitesse de rotation adéquate pour la
roue gauche et la roue droite puis envoie ces valeurs aux moteurs. Et pouf ! Le robot se met à rouler ! Bien sûr, pour
que ça marche, il faut une autre node qui décide la vitesse du robot en fonction de l'action à faire. Cette node
utilisera, alors, le canal de communication pour indiquer la vitesse nécessaire pour aller là où il faut.

Bon, je dois avouer que j'ai un peu menti… Bien que gérer la communication entre les différentes tâches soit encore plus
utile que vous ne l'imaginez (si si, encore en plus que ça), ROS a (beaucoup) d'autres avantages. Déjà, c'est un
logiciel énormément utilisé : du très connu [Turtlebot 3](https://www.turtlebot.com/turtlebot3/),
à [Pepper](https://aldebaran.com/en/pepper), en passant par le
terrifiant [Warthog](https://clearpathrobotics.com/warthog-unmanned-ground-vehicle-robot/),
une [longue liste de robots](https://robots.ros.org/) utilisent ou sont compatibles avec ROS. Encore plus intéressant,
la communauté de chercheurs en robotique et de passionnés partagent leurs codes. Il est donc possible d'utiliser toutes
ces ressources pour apprendre, s'en inspirer, ou les réutiliser !

C'est ainsi que cette deuxième newsletter se termine, on espère que sa lecture aura été intéressante et on vous remercie
encore de nous avoir lus !

*À bientôt,*

Les CDROMS 📀