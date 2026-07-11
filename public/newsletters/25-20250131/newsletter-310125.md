# Janvier 2025

Bonjour à tous et à toutes,

Tous nos vœux pour cette nouvelle année ! Après des fins d'études, départs en stage, retours en France et autres
aventures d'étudiants ingénieurs, il est temps de lancer la troisième édition de la newsletter des CDROMS ! Les vacances
de Noël nous ont permis de nous reposer, mais aussi de bien avancer sur des sujets divers : mécanique, administratif,
électronique, commandes de composants…

### Commandes, livraison et début des soudures pour les [PCB](https://fr.wikipedia.org/wiki/Circuit_imprim%C3%A9)s

Nos magnifiques PCBs ont pu être commandés et sont arrivés !

![Charlie, Rémi et Sébastien se sont retrouvés pour faire la commande des PCBs et avancer un peu sur la Méca.](attachments/2cf6223b-644c-4a60-aec9-faba9715415a.png " =451x235")

| ![Le PCB du robot principal (ce à quoi ça devrait ressembler à la fin)](attachments/92d44062-ed48-474e-a511-02007a66efe1.png " =417x267") | ![En vert à droite, les PCBs du robot principal ; en rouge à gauche, les PCBs pour les PAMIs Arduino.](attachments/6ff62c9a-4115-43f3-8e5f-29dae09d0ddc.png " =266x258") |
|-------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

Rémi a aussi pu commencer à souder les composants montés en surface (SMD - Surface Mount Device). C'est une tâche pas si
facile qui demande beaucoup de patience et de sérénité *(vous allez très vite comprendre pourquoi).* Tout d'abord, il
faut commencer par fixer le PCB et appliquer de la pâte à souder (c'est un peu comme de l'étain, mais sous forme de
pâte). Puis, sans trembler, déposer chacun des ~~petits~~ minuscules composants au bon emplacement.

*Il est possible de zoomer sur les images en passant le curseur dessus.*

| ![On fixe le PCB.](attachments/a3d32195-b7e5-40e8-8c9c-a168e4fc428b.png " =171x142") | ![On utilise un pochoir en aluminium pour appliquer la pâte à souder.](attachments/ed43a0f2-2ea0-41db-a0b8-000d57cbefcb.png " =171x177") | ![On obtient alors une carte avec de la pâte à souder au bon endroit (par exemple au bout de la flèche).](attachments/3a7b76e7-04ab-44fc-9d4b-7e085659da45.png " =214x278") | ![Il faut alors placer tous les composants. Ici à gauche une résistance et à droite un emplacement de condensateur. Cette résistance ne fait que 1 mm par 0.5 mm !!](attachments/937cc1ee-f0cf-4310-84a6-2a88e437717c.png " =214x208") |
|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

Enfin, on fait passer le PCB dans un four spécial qui fait fondre la pâte à souder !

[Le PCB passe dans le four. 408x496](attachments/0a9a6069-c509-43ac-a6d4-a0ee60ab976b.mp4)

Il n'y a plus qu'à recommencer cinq fois pour faire tous les PCBs.

### Les modèles 3Ds PAMI ROS et Arduino terminés !

Coté mécanique, cela avance aussi ! Les dernières modifications pour respecter les contraintes réglementaires ont été
faites sur les modèles !

| ![Modèle 3D des PAMIs Arduino (groupies)](attachments/57b88372-9bfa-4e26-8abe-dd2df4574714.png " =214x242") | ![Modèle 3D du PAMI ROS (Superstar)](attachments/1c3e36bb-253d-4832-9688-fbda10827a4f.png " =214x245") |
|-------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|

Certaines pièces 3D ont pu être imprimées. Il ne reste "plus qu'à" vérifier que ces deux modèles théoriques
résistent à la réalité *(pas toujours très gentille)*. À suivre…

### Mékèquecé *git*

:::info
Comme il n'est pas toujours très facile de trouver des choses visuelles et parlantes pour le code du robot, *Mékèquecé*
*(mais qu'est-ce que c'est)* est une section qui tente de vulgariser des sujets en lien avec le développement du code du
robot.
:::

En général, quand on développe un logiciel, on fait des bêtises *(sauf nous, bien sûr* :innocent:*)*. Et quand on fait
des bêtises, il faut ensuite les corriger… On se retrouve alors avec deux versions, l'ancienne version et la version
corrigée. Puis un nouveau bug… "Crotte !"… Une troisième version… Et maintenant, voilà qu'il faut aussi ajouter une
nouvelle fonctionnalité parce qu'on aimerait que le robot sache reculer *(si si, une équipe s'est déjà présentée au
trophée avec un robot qui ne pouvait pas reculer)* !

Vous l'aurez compris, il nous faut un système de gestion de versions. Ça tombe bien, *git*, créé initialement par Linus
Torvalds *(il a aussi créé Linux)*, va régler une grande partie de nos problèmes.

Dans git, à chaque fois que l'on veut créer une version, on crée un *commit*. Sous le tapis, git ne stocke que les
différences entre l'ancienne et la nouvelle version. Par exemple, ci-dessous voici une partie d'un (très petit) commit
qui ajoute les scores de l'année prochaine _(les newsletters de 2025 ont été légèrement modifiées lors de leur
publication sur le site en juillet 2026)_.

![En rouge les suppressions, en vert les ajouts. Git ne stocke que ces lignes (et quelques-unes avant et après pour optimiser la détection de modification).](attachments/c5af607c-cacc-4ee0-a298-5a9c1ceeea3c.png)

En plus, à chaque *commit*, il est possible d'ajouter un commentaire pour décrire ce qui a été modifié et pourquoi.

Un deuxième concept important de git est le système de branches. Elles permettent de travailler en parallèle sur
plusieurs versions. Par exemple, une branch cherche à corriger un bug pendant qu'une autre est pour ajouter une nouvelle
fonctionnalité. Ensuite, une fois que tout prêt, ces branches peuvent être fusionnées. En plus, comme git n'enregistre
que la partie modifiée des fichiers, lorsqu'une fusion est effectuée, il n'a besoin d'aide que s'il y a eu deux
modifications au même endroit du même fichier (pour choisir quelle version garder).

Enfin, pour encore plus faciliter le travail en équipe, git permet de stocker les *commits* sur un serveur auquel les
membres de l'équipe ont accès. Dans notre cas, nous utilisons un serveur "GitLab" qui permet notamment de stocker des
"dossiers" partagé git.

À très bientôt pour la 4ᵉ édition (déjà !!!),

Les CDROMS 📀
